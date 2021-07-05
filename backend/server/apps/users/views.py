from pathlib import Path
import requests
from django.shortcuts import render, get_object_or_404

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
            queryset = UserProfile.objects.filter(user=user_id)
        # /user/?phone=root
        elif request.GET.get('phone'):                               
            phone = request.GET.get('phone')            
            queryset = UserProfile.objects.filter(user__phone=phone)
        else:
            queryset = UserProfile.objects.all()
        serializer = UserProfileSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        self.permission_classes = [IsAuthenticated,]
        new_profile = UserProfileCreateSerializer(data=request.data)
        if new_profile.is_valid():
            new_profile.save(user=request.user)
            return Response(status=201)
        else:
            return Response(status=400)

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
        serializer = ProductsSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        self.permission_classes = [IsAuthenticated,]
        new_product = ProductsCreateSerializer(data=request.data)
        new_product.is_valid()
        print(new_product.errors)
        if new_product.is_valid():
            seller = get_object_or_404(SellerProfile, id=int(request.data["seller"]))
            new_product.save(seller=seller)
            return Response(status=201)
        else:
            return Response(status=400)
    # def post(self, request):
    #     return Response()
    # def retrieve(self, request, pk=None):
    #     self.permission_classes = [AllowAny,]
    #     post = get_object_or_404(Post, id=int(pk))
    #     serializer = PostSerializer(post)
    #     return Response(serializer.data)

    # def partial_update(self, request):
    #     self.permission_classes = [IsAuthenticated,]
    #     post = get_object_or_404(Post, id=int(request.data["id"]))
    #     if request.user == post.user:
    #         post.content = request.data["content"]
    #         post.save()
    #         return Response(status=200)
    #     else:
    #         return Response(status=403)

    # def destroy(self, request):
    #     # destroy by
    #         # id
    #         # user
    #     self.permission_classes = [IsAuthenticated,]
    #     post = get_object_or_404(Post, id=int(request.data["id"]))
    #     if request.user == post.user:
    #         post.delete()
    #         return Response(status=200)
    #     else:
    #         return Response(status=403)
