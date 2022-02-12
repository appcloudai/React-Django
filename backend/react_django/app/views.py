from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from app.models import cloudApp
from app.serializers import cloudAppSerializer

class cloudAppListView(ListAPIView):
    queryset = cloudApp.objects.order_by('-date_created')
    serializer_class = cloudAppSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )
    model = cloudApp

class cloudAppDetailView(RetrieveAPIView):
    queryset = cloudApp.objects.order_by('-date_created')
    serializer_class = cloudAppSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )
    model = cloudApp


