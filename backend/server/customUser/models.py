from django.db import models
from django.contrib.auth.models import AbstractUser
from phone_field import PhoneField
from .managers import CustomUserManager


class CustomUser(AbstractUser): 
    username = None
    user_permissions = None
    groups = None
    region = models.CharField(max_length=50)
    village = models.CharField(max_length=50)
    phone = models.CharField(verbose_name="phone", unique=True, max_length=15)
    USERNAME_FIELD = 'phone'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'region', 'village']
    objects = CustomUserManager()

    def __str__(self):
        return self.phone