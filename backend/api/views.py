from rest_framework import generics, permissions
from django.contrib.auth.models import User
from .serializer import UserSerializer


class CreateUser(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = []
    permission_classes = [permissions.AllowAny]


create_user_view = CreateUser.as_view()