from django.urls import path
from .views import *

urlpatterns = [
    path("user/", UserProfileViewSet.as_view(
        {
            'get': 'list',
            # 'post': 'create',
            # 'put': 'partial_update',
            # 'delete': 'destroy'
        })),
    path("product_type/", ProductTypeViewSet.as_view(
        {
            'get': 'list',
            # 'post': 'create',
        })),
    path("products/", ProductsViewSet.as_view(
        {
            'get': 'list',
            'post': 'create',
        })),
    path("products/<pk>", ProductsViewSet.as_view({
            'get' : 'retrieve',
    })),
    path("products/favorites/", ProductFavoriteViewSet.as_view(
        {
            'get': 'list',
            'post': 'create',
            'delete': 'destroy',
        })),
    path("lottery/", LotteryViewSet.as_view(
        {
            'get': 'list',
            'post': 'create',
        })),
    path("lottery/participants/", LotteryParticipantsViewSet.as_view(
        {
            'get': 'list',
            'post': 'create',
        })),
    path("lottery/participants/winners/", LotteryWinnerViewSet.as_view(
        {
            'get': 'list',
            'post': 'create',
        })),
]