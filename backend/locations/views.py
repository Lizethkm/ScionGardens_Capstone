from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Location
from .serializers import LocationSerializer


# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_locations(request):
    locations = Location.objects.all()
    serializer = LocationSerializer(locations, many=True)
    return Response(serializer.data)
