from rest_framework import serializers
from .models import *
from customUser.serializers import UserSerializer
from rest_framework.validators import UniqueTogetherValidator
from django.core.exceptions import ValidationError


############################################################
# Products
############################################################ 

class ProductsSerializer(serializers.ModelSerializer):
    liked = serializers.SerializerMethodField('is_favorite')
    class Meta:
        model = Products
        fields = '__all__'

    def is_favorite(self, obj):
        request = self.context['request']
        return ProductFavorite.objects.filter(user=request.user).exists()
        
class ProductsCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        exclude = ['date_added']

    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)

class ProductsPicturesCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductsPictures
        fields = ['picture']

class ProductPictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductsPictures
        fields = ['picture']

    def to_representation(self, obj):
        representation = super().to_representation(obj)
        return representation.pop('picture')

class ProductTypeSerializer(serializers.ModelSerializer):
    product = ProductsSerializer()
    pictures = serializers.SerializerMethodField('get_product_pictures')

    class Meta:
        model = ProductType
        fields = ['product_type', 'product', 'pictures']

    def get_product_pictures(self, obj):
        queryset = ProductsPictures.objects.filter(product__id=obj.product.id)
        serializer = ProductPictureSerializer(queryset, many=True)
        return serializer.data


class ProductFavoriteSerializer(serializers.ModelSerializer):
    product = ProductsSerializer()
    class Meta:
        model = ProductFavorite
<<<<<<< HEAD
        fields = ['product', 'user']

    def to_representation(self, obj):
        representation = super().to_representation(obj)
        return representation.pop('product')
=======
        fields = '__all__'
>>>>>>> parent of 0b485be... added favorites add and remove

############################################################
# Lottery
############################################################
class ProductsLotterySerializer(serializers.ModelSerializer):
    product = ProductsSerializer()
    class Meta:
        model = ProductsLottery
        fields = ['product', 'date_end', 'participants']
        # ordering_fields = ('product__date_added', )

    def to_representation(self, obj):
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
