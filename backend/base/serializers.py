from rest_framework import serializers
from .models import Users

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['username', 'bio', 'profile_image']