# Import necessary modules for serializers in Django REST framework
from rest_framework import serializers
from .models import Users, Post

# Serializer for registering a new user
class UserRegisterSerializer(serializers.ModelSerializer):

    # Password field, set as write-only to avoid it being included in the response
    password = serializers.CharField(write_only=True)

    class Meta:
        # Specify the model and the fields to include in the serializer
        model = Users
        fields = ['username', 'email', 'first_name', 'last_name', 'password']

    # Override the create method to hash the password before saving the user
    def create(self, validated_data):
        user = Users(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        # Set the hashed password
        user.set_password(validated_data['password'])
        # Save the user to the database
        user.save()
        return user

# Serializer for displaying the user's profile information
class UserProfileSerializer(serializers.ModelSerializer):

    # Custom fields for follower count, following count, and profile image URL
    follower_count = serializers.SerializerMethodField()
    following_count = serializers.SerializerMethodField()
    profile_image_url = serializers.SerializerMethodField()

    class Meta:
        # Specify the model and fields to include in the serializer
        model = Users
        fields = ['username', 'bio', 'profile_image', 'follower_count', 'following_count', 'profile_image_url']

    # Method to return the count of followers
    def get_follower_count(self, obj):
        return obj.followers.count()

    # Method to return the count of users the current user is following
    def get_following_count(self, obj):
        return obj.following.count()
    
    # Method to return the URL of the user's profile image
    def get_profile_image_url(self, obj):
        return obj.profile_image.url

# Serializer for representing a post
class PostSerializer(serializers.ModelSerializer):

    # Custom fields for username, like count, formatted date, and post image URL
    username = serializers.SerializerMethodField()
    likes_count = serializers.SerializerMethodField()
    formatted_date = serializers.SerializerMethodField()
    post_image_url = serializers.SerializerMethodField()

    class Meta:
        # Specify the model and fields to include in the serializer
        model = Post
        fields = ['id', 'username', 'post_image', 'formatted_date', 'likes', 'likes_count', 'post_image_url']

    # Method to return the username of the post's author
    def get_username(self, obj):
        return obj.user.username
    
    # Method to return the number of likes a post has
    def get_likes_count(self, obj):
        return obj.likes.count()
    
    # Method to return the formatted creation date of the post
    def get_formatted_date(self, obj):
        return obj.created_at.strftime("%d %b %y")

    # Method to return the URL of the post's image
    def get_post_image_url(self, obj):
        return obj.post_image.url

# Serializer for displaying basic user information
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        # Specify the model and fields to include in the serializer
        model = Users
        fields = ['username', 'bio', 'email', 'profile_image', 'first_name', 'last_name']
