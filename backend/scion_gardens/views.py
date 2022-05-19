from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .models import PlantCollection
from .models import Reminders
from .models import Priority
from .serializers import PlantCollectionSerializer
from .serializers import RemindersSerializer
from .serializers import PrioritySerializer
from rest_framework.permissions import IsAuthenticated, AllowAny


# Create your views here.
