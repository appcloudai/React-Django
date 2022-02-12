from django.contrib import admin
from tinymce.widgets import TinyMCE
from .models import cloudApp
from django.contrib.auth.models import User
class cloudAppAdmin(admin.ModelAdmin):

    list_display = ('id', 'title', 'date_created')
    list_display_links = ('id', 'title')
    list_filter = ['date_created',]
    search_fields = ('title', )
    list_per_page = 25
    TextField: {'widget': TinyMCE()}

admin.site.register(cloudApp, cloudAppAdmin)
