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
        # model.date_added = serializers.DateTimeField() 
        # fields = ['seller', 'title', 'product_type', 'price', 'weight', 'description', 
        #     'ingredients', 'delivery_local', 'delivery_general', 'local_price',
        #     'general_price'
        # ]
        exclude = ['date_added']

class ProductsPicturesCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductsPictures
        fields = ['picture']

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

    class Meta:
        model = LotteryParticipants
        fields = ['id', 'number']
    
class LotteryScreenshotsSerializer(serializers.ModelSerializer):

    class Meta:
        model = LotteryScreenshots
        fields = ['screenshot']

class LotteryWinnerSerializer(serializers.ModelSerializer):
    winner = LotteryParticipantsSerializer()
    class Meta:
        model = LotteryWinner
        fields = '__all__'
    
class ProductTypeSerializer(serializers.ModelSerializer):
    product = ProductsSerializer()
    class Meta:
        model = ProductType
        fields = ['product_type', 'product']

class ProductFavoriteSerializer(serializers.ModelSerializer):
    product = ProductsSerializer()
    class Meta:
        model = ProductFavorite
        fields = '__all__'
