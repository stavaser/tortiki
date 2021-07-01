from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    # path('accounts/', include('apps.accounts.urls')),
   
    path("request/user_login", views.user_login, name="user_login"),
    path("request/user_register", views.user_register, name="user_register"),

]