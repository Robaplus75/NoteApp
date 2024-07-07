from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_create_notes_view),
    path('<int:id>/', views.retrieve_update_destroy_notes_view),
    path('showtoken/', views.showtoken)
]