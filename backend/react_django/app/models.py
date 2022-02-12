from django.db import models
from datetime import datetime
from django.utils.text import slugify
from tinymce.models import HTMLField
from django.contrib.auth.models import User


class cloudApp(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True,blank=True,null=True)
    thumbnail = models.ImageField(upload_to='images/upload/%Y/%m/%d/')
    excerpt = models.CharField(max_length=100)
    content = HTMLField()
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        if not self.id and not self.slug:
            slug = slugify(self.title)
            e = True
            c=1
            self.slug = slug
            while e:
                try:
                    if e: 
                        e = cloudApp.objects.get(slug=slug)
                        slug = self.slug + str(c)
                        c=c+1
                except cloudApp.DoesNotExist:
                    self.slug = slug
                    break

        super(cloudApp, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

   

   
