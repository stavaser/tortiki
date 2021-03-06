from django.db import models
from customUser.models import CustomUser
from datetime import datetime    
from django.utils.timezone import now
from rest_framework.validators import UniqueTogetherValidator
from django.core.exceptions import NON_FIELD_ERRORS, ValidationError
from django.utils.translation import gettext_lazy as _

class SellerProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    
class Category(models.Model):
    PRODUCT_TYPE_CHOICES = (
        ('Торт', 'Торт'),
        ('Пицца', 'Пицца'),
        ('Суши', 'Суши'),
    )
    product_type = models.CharField(max_length=50, choices=PRODUCT_TYPE_CHOICES)

class Products(models.Model):
    seller = models.ForeignKey(SellerProfile, on_delete=models.CASCADE)
    product_type = models.ForeignKey(Category, related_name="products", on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    price = models.PositiveSmallIntegerField()
    weight = models.PositiveSmallIntegerField(blank=True)
    description = models.TextField(max_length=350, blank=True)
    ingredients = models.TextField(max_length=350, blank=True)
    delivery_local = models.BooleanField(default=True)
    delivery_general = models.BooleanField(default=False)
    local_price = models.PositiveSmallIntegerField(blank=True)
    general_price = models.PositiveSmallIntegerField(blank=True)
    date_added = models.DateTimeField(auto_now=True)
    is_archived = models.BooleanField(default=False)

class ProductCategory(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    product_type = models.ForeignKey(Category, on_delete=models.CASCADE)


def screenshots_path(instance, filename):
    return 'media/screenshots/user_{0}/{1}'.format(instance.lottery_participant.participant.id, filename)
  
def products_path(instance, filename):
    return 'media/products/seller_{0}/{1}'.format(instance.product.seller.id, filename)

def gallery_path(instance, filename):
    return 'media/gallery/seller_{0}/{1}'.format(instance.seller.id, filename)
  

class ProductsPictures(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    picture = models.ImageField(upload_to=products_path, height_field=None, width_field=None, max_length=100)


class ProductsLottery(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    participants = models.PositiveSmallIntegerField()
    date_end = models.DateTimeField()

class SellerGallery(models.Model):
    seller = models.ForeignKey(SellerProfile, on_delete=models.CASCADE)
    picture = models.ImageField(upload_to=gallery_path, height_field=None, width_field=None, max_length=100)

# def validate_max_number(self, value):
#     if value >= self.lottery.participants:
#         raise ValidationError(
#             _('Number exceed number of participants!'),
#             params={'value': value},
#         )

class LotteryParticipants(models.Model):
    lottery = models.ForeignKey(ProductsLottery, on_delete=models.CASCADE)
    participant = models.ForeignKey(CustomUser, related_name="participants", on_delete=models.CASCADE)
    number = models.PositiveSmallIntegerField()
    time = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = (('lottery', 'number'),)
        # constraints = [
        #     models.CheckConstraint(
        #         check = models.Q(number__lte=models.F('lottery__participants')), 
        #         name = 'number__lte_lottery__participants',
        #     )
        # ]
        # error_messages = {
        #     NON_FIELD_ERRORS: {
        #         'unique_together': "Номер %(number)% уже забронирован. Пожалуйста, выберите другой.",
        #     }
        # }
    
    def clean(self):
        if self.number > self.lottery.participants:
            raise ValidationError(_('Number exceed number of participants!'))
    
    def save(self, *args, **kwargs):
        self.clean()
        super(LotteryParticipants, self).save(*args, **kwargs)
        
class LotteryScreenshots(models.Model):
    lottery_participant = models.ForeignKey(LotteryParticipants, on_delete=models.CASCADE)
    screenshot = models.ImageField(upload_to=screenshots_path, height_field=None, width_field=None, max_length=100)

class LotteryWinner(models.Model):
    winner = models.ForeignKey(LotteryParticipants, on_delete=models.CASCADE)
    lottery = models.ForeignKey(ProductsLottery, on_delete=models.CASCADE)

class ProductFavorite(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    class Meta:
        unique_together = (('product', 'user'),)