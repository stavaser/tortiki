from django.urls import path
from .views import *

urlpatterns = [
    path("user/", UserProfileViewSet.as_view(
        {
            'get': 'list',
            'post': 'create',
            # 'put': 'partial_update',
            # 'delete': 'destroy'
        })),
    # path("posts/<pk>", PostViewSet.as_view({
    #         'get' : 'retrieve',
    # })),
    # path("comments/", CommentViewSet.as_view(
    #     {
    #         'get': 'list',
    #         'post': 'create',
    #         'put': 'partial_update',
    #         'delete': 'destroy'
    #     })),
    # path("profile_photo/", UploadViewSet.as_view(
    #     {
    #         'post': 'create',
    #     })),
    # path("activate/<uid>/<token>/", ActivateUser.as_view()),
]