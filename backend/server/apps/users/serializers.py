from rest_framework import serializers
from .models import *

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'

class UserProfileCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        # model.date = serializers.DateTimeField()
        fields = ["region", "village"]

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
    

class ProductsTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ['product_type']
