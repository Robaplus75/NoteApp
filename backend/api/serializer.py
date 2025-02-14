from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta():
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {'password':{'write_only':True}}
    
    def create(self, validated_data):
        username = validated_data.get('username')
        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError({'username': 'User already exists'})
        user = User.objects.create_user(**validated_data)
        return user