from django.urls import path
from .views import cloudAppListView, cloudAppDetailView

urlpatterns = [
    path('', cloudAppListView.as_view()),
    path('<slug>', cloudAppDetailView.as_view()),
]
