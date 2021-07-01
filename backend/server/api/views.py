from django.shortcuts import render
from apps.users.models import Profile
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import exceptions
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework import status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
import json
import datetime

@api_view(["POST"])
@permission_classes([AllowAny])
@csrf_exempt
def user_login(request):
    result = {}
    user_data = json.loads(request.body)
    if 'password' in user_data and user_data['password']:
        password = user_data['password']
    if 'username' in user_data and user_data['username']:
        username = user_data['username']
    user = User.objects.get(username=username)
    if not user:
        return Response({'error':'no user'})
    token, _ = Token.objects.get_or_create(user=user)
    result['token'] = token.key
    result['username'] = user.username
    return Response(result)

@api_view(["POST"])
@permission_classes([AllowAny])
@csrf_exempt
def user_register(request):
    result = {}
    user_data = json.loads(request.body)
    if 'password' in user_data and user_data['password']:
        user = User()
        user.password = user_data['password']
    if 'username' in user_data and user_data['username']:
        user.username = user_data['username']
   
    profile = UserProfile()
    profile.user = user
    profile.location = user_data['location']

    user.save()
    token = Token.objects.create(user=user)
    token.save()
    profile.save()
    
    result["location"] = profile.location
    result["token"] = token.key
    return Response(result, content_type="application/json")