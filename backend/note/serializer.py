from rest_framework import serializers
from note.models import Note

class NoteSerializer(serializers.ModelSerializer):
    class Meta():
        model = Note
        fields = ['id', 'title', 'content', 'date_created', 'author']
        extra_kwargs = {"author": {"read_only": True}}

    