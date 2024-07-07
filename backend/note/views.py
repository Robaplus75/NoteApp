from rest_framework import permissions, generics, authentication
from note.serializer import NoteSerializer
from note.models import Note
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework_simplejwt.authentication import JWTAuthentication

def showtoken(request):
    print(request.headers.get('authorization'))
    return JsonResponse({'data': "balh blah"})

class ListCreateNotes(generics.ListCreateAPIView):
    serializer_class = NoteSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        user = self.request.user
        notes = Note.objects.filter(author=user)
        return notes
    
    def perform_create(self, serializer):
        user = self.request.user
        if serializer.is_valid():
            serializer.save(author=user)
        else:
            print(serializer.errors)

class RetrieveUpdateDestroyNotes(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = NoteSerializer
    lookup_field = 'id'
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        notes = Note.objects.filter(author=user)
        return notes

list_create_notes_view = ListCreateNotes.as_view()
retrieve_update_destroy_notes_view = RetrieveUpdateDestroyNotes.as_view()
    
