from django.db import models
from django.contrib.auth.models import AbstractUser
from phone_field import PhoneField
from .managers import CustomUserManager


class CustomUser(AbstractUser): 
    username = None
    phone = models.CharField(verbose_name="phone", unique=True, max_length=15)
    USERNAME_FIELD = 'phone'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()