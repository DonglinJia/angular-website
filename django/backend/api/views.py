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

    # @action(method=['post'], detail=False)
    # def post(self, request):


    # @action(methods=['get'], detail=False)
    # def statistics(self, request):
    #
    #     queryset = Mission.objects.all()
    #     search_date = request.GET.get('date')
    #     search_priority = request.GET.get('priority')
    #
    #     if search_date:
    #         queryset = queryset.filter(date=search_date)
    #     if search_priority:
    #         queryset = queryset.filter(priority=search_priority)
    #
    #     return HttpResponse(queryset)

