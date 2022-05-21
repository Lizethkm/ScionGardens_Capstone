from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response 
from .models import Reminder
from .serializers import ReminderSerializer

# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_reminders(request):
    reminders = Reminder.objects.all()
    serializer = ReminderSerializer(reminders, many=True)
    return Response(serializer.data)


@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def reminders_details(request):

    if request.method == 'GET':
        reminders = Reminder.objects.filter(user_id=request.user.id)
        serializer = ReminderSerializer(reminders, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = ReminderSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET','PUT','DELETE'])
@permission_classes([IsAuthenticated])
def retrieve_reminder(request, pk):

    reminder = get_object_or_404(Reminder, pk=pk)

    if request.method == 'GET':
        serializer = ReminderSerializer(reminder)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = ReminderSerializer(reminder, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == 'DELETE':
        reminder.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
