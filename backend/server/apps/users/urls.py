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
    # path("posts/<pk>", PostViewSet.as_view({
    #         'get' : 'retrieve',
    # })),
    path("products/", ProductsViewSet.as_view(
        {
            'get': 'list',
            'post': 'create',
            # 'put': 'partial_update',
            # 'delete': 'destroy'
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
    # path("activate/<uid>/<token>/", ActivateUser.as_view()),
]