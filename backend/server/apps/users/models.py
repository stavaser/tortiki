from django.db import models
from customUser.models import CustomUser

class UserProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    region = models.CharField(max_length=50)
    village = models.CharField(max_length=50)

class SellerProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    region = models.CharField(max_length=50)
    village = models.CharField(max_length=50)

class Products(models.Model):
    PRODUCT_TYPE_CHOICES = (
        ('Торт', 'Торт'),
        ('Пицца', 'Пицца'),
        ('Суши', 'Суши'),
    )

    seller = models.OneToOneField(SellerProfile, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    product_type = models.CharField(max_length=50, choices=PRODUCT_TYPE_CHOICES)
    price = models.PositiveSmallIntegerField()
    weight = models.PositiveSmallIntegerField(blank=True)
    description = models.TextField(max_length=350, blank=True)
    ingredients = models.TextField(max_length=350, blank=True)
    delivery_local = models.BooleanField(default=True)
    delivery_general = models.BooleanField(default=False)
    local_price = models.PositiveSmallIntegerField()
    general_price = models.PositiveSmallIntegerField()
    date_added = models.DateField(auto_now_add=True)

def user_directory_path(instance, filename):

    # file will be uploaded to MEDIA_ROOT / user_<id>/<filename>
    return 'user_{0}/{1}'.format(instance.user.id, filename)
  

class ProductsPictures(models.Model):
    product = models.OneToOneField(Products, on_delete=models.CASCADE)
    picture = models.ImageField(upload_to=user_directory_path, height_field=None, width_field=None, max_length=100)


class ProductsLottery(models.Model):
    product = models.OneToOneField(Products, on_delete=models.CASCADE)
    participants = models.PositiveSmallIntegerField()
    date_end = models.DateTimeField()

class SellerGallery(models.Model):
    seller = models.OneToOneField(SellerProfile, on_delete=models.CASCADE)
    picture = models.ImageField(upload_to=user_directory_path, height_field=None, width_field=None, max_length=100)