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

class UserProfileViewSet(viewsets.ViewSet):
    def list(self, request):
        self.permission_classes = [AllowAny,]
        if request.method == 'GET':
            users = UserProfile.objects.all()
            serializer = UserProfileSerializer(users, many=True)
            return Response(serializer.data)

        # serializer = UserProfileSerializer(UserProfile.objects.all())
        # return Response(serializer.data)

class UserProfileViewSet(viewsets.ViewSet):
    def list(self, request):
        self.permission_classes = [AllowAny,]
        # /user/?user_id=1
        if request.GET.get('user_id'):                                  
            user_id = request.GET.get('user_id')
            queryset = UserProfile.objects.filter(user=user_id)
        # /user/?username=root
        elif request.GET.get('username'):                               
            username = request.GET.get('username')            
            queryset = UserProfile.objects.filter(user__username=username)
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
