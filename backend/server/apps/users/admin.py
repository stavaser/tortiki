from django.contrib import admin
from .models import *

admin.site.register(SellerProfile)
admin.site.register(Products)
admin.site.register(ProductsPictures)
admin.site.register(ProductsLottery)
admin.site.register(SellerGallery)
admin.site.register(LotteryParticipants)
admin.site.register(LotteryScreenshots)
admin.site.register(LotteryWinner)
admin.site.register(ProductFavorite)
admin.site.register(Category)
admin.site.register(ProductCategory)