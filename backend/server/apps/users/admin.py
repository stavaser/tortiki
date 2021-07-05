from django.contrib import admin
from .models import *

admin.site.register(UserProfile)
admin.site.register(SellerProfile)
admin.site.register(Products)
admin.site.register(ProductsPictures)
admin.site.register(ProductsLottery)
admin.site.register(SellerGallery)