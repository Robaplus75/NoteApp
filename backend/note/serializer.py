from rest_framework import serializers
from note.models import Note
from django.contrib.auth.models import User

class NoteSerializer(serializers.ModelSerializer):
    class Meta():
        model = Note
        fields = ['id', 'title', 'content', 'date_created', 'author']
        extra_kwargs = {"author": {"read_only": True}}



class UserSerializer(serializers.ModelSerializer):
    class Meta():
        model = User
        fields = ['id', 'username', 'password', 'notes']
        extra_kwargs = {"password": {"write_only": True}}
    
    def create(self, validated_data):
        instance = User.objects.create_user(**validated_data)
        return instance
    