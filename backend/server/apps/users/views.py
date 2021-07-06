from pathlib import Path
import requests
from django.shortcuts import render, get_object_or_404
from django.core.exceptions import NON_FIELD_ERRORS, ValidationError

from django.http import HttpRequest
from django.contrib.auth import login

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
from django.http import HttpResponse, JsonResponse

from .models import *
from customUser.models import CustomUser
from customUser.serializers import *
from .serializers import *
from django.contrib.auth.models import User

# class UserProfileViewSet(viewsets.ViewSet):
#     def list(self, request):
#         self.permission_classes = [AllowAny,]
#         if request.method == 'GET':
#             users = UserProfile.objects.all()
#             serializer = UserProfileSerializer(users, many=True)
#             return Response(serializer.data)

#         # serializer = UserProfileSerializer(UserProfile.objects.all())
#         # return Response(serializer.data)

class UserProfileViewSet(viewsets.ViewSet):
    def list(self, request):
        self.permission_classes = [AllowAny,]
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

    # def create(self, request):
    #     self.permission_classes = [IsAuthenticated,]
    #     new_profile = UserProfileCreateSerializer(data=request.data)
    #     if new_profile.is_valid():
    #         new_profile.save(user=request.user)
    #         return Response(status=201)
    #     else:
    #         return Response(status=400)

class ProductsViewSet(viewsets.ViewSet):
    def list(self, request):
        self.permission_classes = [IsAuthenticated,]
        # /products/?product_id=1
        if request.GET.get('product_id'):                                  
            product_id = request.GET.get('product_id')
            queryset = Products.objects.filter(id=product_id)
        # /products/?seller_id=1
        elif request.GET.get('seller_id'):                               
            seller_id = request.GET.get('seller_id')            
            queryset = Products.objects.filter(seller=seller_id)
        # /products/?delivery_local=True
        elif request.GET.get('delivery_local'):                               
            delivery_local = request.GET.get('delivery_local')            
            queryset = Products.objects.filter(delivery_local=delivery_local)
        # /products/?delivery_general=True
        elif request.GET.get('delivery_general'):                               
            delivery_general = request.GET.get('delivery_general')            
            queryset = Products.objects.filter(delivery_general=delivery_general)
        else:
            queryset = Products.objects.all()
        serializer = ProductsSerializer(queryset.order_by("-date_added"), many=True)
        return Response(serializer.data)

    def create(self, request):
        self.permission_classes = [IsAuthenticated,]
        new_product = ProductsCreateSerializer(data=request.data)
        new_product.is_valid()
        print(new_product.errors)
        if new_product.is_valid():
            seller = get_object_or_404(SellerProfile, id=int(request.data["seller"]))
            new_product.save(seller=seller)
            return Response({"product_id": new_product.data['id']}, status=201)
        else:
            return Response(status=400)


class LotteryViewSet(viewsets.ViewSet):
    def list(self, request):
        self.permission_classes = [IsAuthenticated,]
        # /lottery/?lottery_id=1
        if request.GET.get('lottery_id'):                                  
            lottery_id = request.GET.get('lottery_id')
            queryset = ProductsLottery.objects.filter(id=lottery_id)
        else:
            queryset = ProductsLottery.objects.all()
        serializer = ProductsLotterySerializer(queryset, many=True)
        return Response(serializer.to_representation(queryset.order_by('-date_end')))

    def create(self, request):
        self.permission_classes = [IsAuthenticated,]
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


class LotteryParticipantsViewSet(viewsets.ViewSet):
    def list(self, request):
        self.permission_classes = [IsAuthenticated,]
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
        self.permission_classes = [IsAuthenticated,]
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


# @api_view(['GET', 'POST'])
# def get_lottery_participants(request):
#     if request.method == 'POST':
#         return Response({"message": "Got some data!", "data": request.data})
#     return Response({"message": "Hello, world!"})