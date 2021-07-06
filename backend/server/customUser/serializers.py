from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers
from rest_framework.fields import CurrentUserDefault
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'phone', 'first_name', 'last_name', 'region', 'village']

class UserCreateSerializer(UserCreateSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'
