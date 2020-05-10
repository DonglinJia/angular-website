from django.contrib.auth.models import User, Group
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend

from backend.api.models import Mission
from backend.api.serializers import UserSerializer, MissionSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class MissionViewSet(viewsets.ModelViewSet):

    queryset = Mission.objects.all()
    serializer_class = MissionSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['date', 'priority']

