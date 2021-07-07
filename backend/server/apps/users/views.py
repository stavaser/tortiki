from pathlib import Path
import requests
import random

from django.shortcuts import render, get_object_or_404
from django.core.exceptions import NON_FIELD_ERRORS, ValidationError

from django.http import HttpRequest
from django.contrib.auth import login

from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User

from rest_framework import (
    generics, 
    permissions,
    viewsets, 
    serializers,
)
from rest_framework.response import Response
from rest_framework.permissions import (
    IsAuthenticated,
    AllowAny,
    IsAdminUser,
)
from rest_framework.views import APIView
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.decorators import api_view, permission_classes

from .models import *
from customUser.models import CustomUser
from customUser.serializers import *
from .serializers import *


@permission_classes([IsAuthenticated])
class UserProfileViewSet(viewsets.ViewSet):
    def list(self, request):
        # /user/?user_id=1
        if request.GET.get('user_id'):                                  
            user_id = request.GET.get('user_id')
            queryset = CustomUser.objects.filter(id=user_id)
        # /user/?phone=root
        elif request.GET.get('phone'):                               
            phone = request.GET.get('phone')            
            queryset = CustomUser.objects.filter(phone=phone)
        else:
            queryset = CustomUser.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)


# class SellerProfileViewSet(viewsets.ViewSet):
#     def list(self, request):
#         self.permission_classes = [IsAuthenticated,]
#         # /seller/?user_id=1
#         if request.GET.get('user_id'):                                  
#             user_id = request.GET.get('user_id')
#             queryset = CustomUser.objects.filter(id=user_id)
#         # /seller/?phone=root
#         elif request.GET.get('phone'):                               
#             phone = request.GET.get('phone')            
#             queryset = CustomUser.objects.filter(phone=phone)
#         else:
#             queryset = CustomUser.objects.all()
#         serializer = UserSerializer(queryset, many=True)
#         return Response(serializer.data)

@permission_classes([IsAuthenticated])
class ProductTypeViewSet(viewsets.ViewSet):
    def list(self, request):
        # /product_type/?product_type=торт
        if request.GET.get('product_type'):                                  
            product_type = request.GET.get('product_type')
            queryset = produt.objects.filter(product_type=product_type)
        # /products/?seller_id=1
        else:
            queryset = ProductType.objects.all()
        serializer = ProductTypeSerializer(queryset, many=True)
        return Response(serializer.data)

@permission_classes([IsAuthenticated])
class ProductsViewSet(viewsets.ViewSet):
    def list(self, request):
        # /products/?product_id=1
        if request.GET.get('product_id'):                                  
            product_id = request.GET.get('product_id')
            queryset = ProductType.objects.filter(product__id=product_id)
        # /products/?seller_id=1
        elif request.GET.get('seller_id'):                               
            seller_id = request.GET.get('seller_id')            
            queryset = ProductType.objects.filter(seller__id=seller_id)
        # /products/?delivery_local=True
        elif request.GET.get('delivery_local'):                               
            delivery_local = request.GET.get('delivery_local')            
            queryset = ProductType.objects.filter(product__delivery_local=delivery_local)
        # /products/?delivery_general=True
        elif request.GET.get('delivery_general'):                               
            delivery_general = request.GET.get('delivery_general')            
            queryset = Products.objects.filter(delivery_general=delivery_general)
        else:
            queryset = ProductType.objects.all()
        serializer = ProductTypeSerializer(queryset.order_by("-product__date_added"), many=True)
        return Response(serializer.data)

    def create(self, request):
        new_product = ProductsCreateSerializer(data=request.data)
        if not new_product.is_valid():
            return Response(status=400)

        seller = get_object_or_404(SellerProfile, id=int(request.data["seller"]))
        new_product.save(seller=seller)

        product = get_object_or_404(Products, id=new_product.data['id'])
        picture = {}
        for f in request.FILES.getlist('picture'):
            picture['picture'] = f
            new_picture = ProductsPicturesCreateSerializer(data=picture)
            if new_picture.is_valid():
                new_picture.save(product=product)

        return Response(status=201) # Response({"product_id": new_product.data['id']}, status=201)


@permission_classes([IsAuthenticated])
class LotteryViewSet(viewsets.ViewSet):
    def list(self, request):
        # /lottery/?lottery_id=1
        if request.GET.get('lottery_id'):                                  
            lottery_id = request.GET.get('lottery_id')
            queryset = ProductsLottery.objects.filter(id=lottery_id)
        else:
            queryset = ProductsLottery.objects.all()
        serializer = ProductsLotterySerializer(queryset, many=True)
        return Response(serializer.to_representation(queryset.order_by('-date_end')))

    def create(self, request):
        products = ProductsViewSet()
        new_product = products.create(request)
        new_lottery = ProductsLotteryCreateSerializer(data=request.data)
        print(new_product)
        if new_lottery.is_valid():
            product = get_object_or_404(Products, id=new_product.data['product_id'])
            new_lottery.save(product=product)
            return Response(status=201)
        else:
            print(new_lottery.errors)
            return Response(status=400)


@permission_classes([IsAuthenticated])
class LotteryParticipantsViewSet(viewsets.ViewSet):
    def list(self, request):
        # /lottery/participants/?lottery_id=1
        if request.GET.get('lottery_id'):                                  
            lottery_id = request.GET.get('lottery_id')
            queryset = LotteryParticipants.objects.filter(lottery__id=lottery_id)
        # /lottery/participants/?user_id=1
        elif request.GET.get('user_id'):                                  
            user_id = request.GET.get('user_id')
            queryset = LotteryParticipants.objects.filter(participant__id=user_id)
        else:
            queryset = LotteryParticipants.objects.all()
        serializer = LotteryParticipantsSerializer(queryset, many=True)
        return Response(serializer.data)#Response(serializer.to_representation(queryset.order_by('-date_end')))

    def create(self, request):
        new_participant = LotteryParticipantsCreateSerializer(data=request.data)
        new_screenshot = LotteryScreenshotsSerializer(data=request.data)
        if new_participant.is_valid() and new_screenshot.is_valid():
            lottery = get_object_or_404(ProductsLottery, id=int(request.data["lottery_id"]))
            new_participant.save(participant=request.user, lottery=lottery)
            
            lottery_participant = get_object_or_404(LotteryParticipants, id=new_participant.data['id'])
            new_screenshot.save(lottery_participant=lottery_participant)
            return Response(status=201)
        else:
            print(new_participant.errors)
            return Response(status=400)

@permission_classes([IsAuthenticated])
class LotteryWinnerViewSet(viewsets.ViewSet):
    def list(self, request):
        # /lottery/participants/?lottery_id=1
        if request.GET.get('lottery_id'):                                  
            lottery_id = request.GET.get('lottery_id')
            queryset = LotteryWinner.objects.filter(winner__lottery__id=lottery_id)
        else:
            queryset = LotteryWinner.objects.all()
        serializer = LotteryWinnerSerializer(queryset, many=True)
        return Response(serializer.data)#Response(serializer.to_representation(queryset.order_by('-date_end')))

    def create(self, request):
        lottery_id = int(request.data['lottery_id'])
        lottery = get_object_or_404(ProductsLottery, id=lottery_id)
        winning_number = random.randint(1, lottery.participants)
        new_winner = LotteryWinner()
        print(winning_number)
        try:
            lottery_participant = LotteryParticipants.objects.get(id=lottery_id, number=winning_number) or "none"
            print(lottery_participant.participant.first_name)
            new_winner.winner = lottery_participant
            new_winner.lottery = lottery
            new_winner.save()
        except LotteryParticipants.DoesNotExist:
            lottery_participant = None
            print(lottery_participant)

        return Response(status=201)
    

@permission_classes([IsAuthenticated])
class ProductFavoriteViewSet(viewsets.ViewSet):
    def list(self, request):
        # /products/favorites/?product_id=1
        if request.GET.get('product_id'):                                  
            product_id = request.GET.get('product_id')
            queryset = ProductFavorite.objects.filter(product__id=product_id)
        else:
            queryset = ProductFavorite.objects.all()
        serializer = ProductFavoriteSerializer(queryset, many=True)
        return Response(serializer.data) #Response(serializer.to_representation(queryset.order_by('-date_end')))

    def create(self, request):
        product_id = int(request.data['product_id'])
        try:
            product = Products.objects.get(id=product_id)
        except Products.DoesNotExist:
            return Response(status=400)

        new_favorite = ProductFavorite()
        new_favorite.product = product
        new_favorite.user = request.user
        new_favorite.save()
        return Response(status=201)
    
# @api_view(['GET', 'POST'])
# def get_lottery_participants(request):
#     if request.method == 'POST':
#         return Response({"message": "Got some data!", "data": request.data})
#     return Response({"message": "Hello, world!"})