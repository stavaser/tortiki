from djoser.serializers import UserCreateSerializer, UserSerializer, TokenSerializer
from djoser.conf import settings as djoser_settings
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

class UserLoginSerializer(TokenSerializer):
    user = UserSerializer()

    # def get_user(self, obj):
    #     return obj.user.object.

    class Meta:
        model = djoser_settings.TOKEN_MODEL
        fields = '__all__'