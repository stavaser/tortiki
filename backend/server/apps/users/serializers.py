from rest_framework import serializers
from .models import *
from customUser.serializers import UserSerializer
from rest_framework.validators import UniqueTogetherValidator
from django.core.exceptions import ValidationError

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'

class ProductsCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        model.date_added = serializers.DateTimeField() 
        exclude = ['date_added']

class ProductsLotterySerializer(serializers.ModelSerializer):
    product = ProductsSerializer()
    class Meta:
        model = ProductsLottery
        fields = ['product', 'date_end', 'participants']
        # ordering_fields = ('product__date_added', )

    def to_representation(self, obj):
        """Move fields from profile to user representation."""
        representation = super().to_representation(obj)
        product_representation = representation.pop('product')
        for key in product_representation:
            representation[key] = product_representation[key]

        return representation

class ProductsLotteryCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductsLottery
        fields = ['date_end', 'participants']

class LotteryParticipantsSerializer(serializers.ModelSerializer):
    participant = UserSerializer()
    class Meta:
        model = LotteryParticipants
        fields = '__all__'
    
    # def to_representation(self, obj):
    #     representation = super().to_representation(obj)
    #     user_representation = representation.pop('participant')
    #     for key in user_representation:
    #         representation[key] = user_representation[key]

    #     return representation
    
class LotteryParticipantsCreateSerializer(serializers.ModelSerializer):
    # def validate(self, data):
    #     instance = LotteryParticipants(**data)
    #     try:
    #         instance.clean()
    #     except ValidationError as e:
    #         raise serializers.ValidationError(e.args[0])

    class Meta:
        model = LotteryParticipants
        fields = ['number']
    

class ProductsTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ['product_type']
