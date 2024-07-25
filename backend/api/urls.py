from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from . import views

urlpatterns = [
    path('token/', TokenObtainPairView.as_view()),
    path('token/refresh/',TokenRefreshView.as_view()),
    path('signup/', views.create_user_view),
]