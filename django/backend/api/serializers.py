from django.contrib.auth.models import User, Group
from rest_framework import serializers

from backend.api.models import Mission


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class MissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mission
        fields = ('content', 'date', 'priority')