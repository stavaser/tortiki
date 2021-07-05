from djoser.serializers import UserCreateSerializer, UserSerializer
from rest_framework import serializers
from rest_framework.fields import CurrentUserDefault
from .models import CustomUser

class UserCreateSerializer(UserCreateSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'
