from rest_framework import serializers
from .models import Users

class UserProfileSerializer(serializers.ModelSerializer):

    followers_count = serializers.SerializerMethodField()
    following_count = serializers.SerializerMethodField()

    class Meta:
        model = Users
        fields = ['username', 'bio', 'profile_image', 'follower_count']

    def get_follower_count(self, obj):
        return obj.followers.count()