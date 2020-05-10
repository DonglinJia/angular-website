from django.db import models

# Create your models here.

class Mission(models.Model):
    content = models.CharField(max_length=255)
    date = models.DateField()
    priority = models.IntegerField()
