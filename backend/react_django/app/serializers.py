from rest_framework import serializers
from .models import cloudApp

class cloudAppSerializer(serializers.ModelSerializer):
    class Meta:
        model = cloudApp
        fields = ['title', 'slug', 'thumbnail', 'excerpt', 'content','date_created']
         
