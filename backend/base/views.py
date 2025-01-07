from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Users
from .serializers import UserProfileSerializer

# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_profile_data(request, pk):
    try:
        try:
            user = Users.objects.get(username=pk)
        except Users.DoesNotExist:
            return Response({'error': 'User not found'}, status=404)
        
        serializer = UserProfileSerializer(user, many=False)
        return Response(serializer.data)
    except:
        return Response({'error': 'An error getting user data'})
