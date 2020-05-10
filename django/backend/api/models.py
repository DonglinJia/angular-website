from django.db import models

# Create your models here.

class Mission(models.Model):
    content = models.CharField(max_length=32)
    date = models.DateField()
    priority = models.PositiveIntegerField()
