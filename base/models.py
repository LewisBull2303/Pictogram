# Import necessary modules for defining models in Django
from django.db import models
from django.contrib.auth.models import AbstractUser

# Define custom user model inheriting from Django's AbstractUser
class Users(AbstractUser):
    # Custom username field with a maximum length of 50 characters and unique constraint
    username = models.CharField(max_length=50, unique=True, primary_key=True)
    
    # Bio field for the user, allowing up to 500 characters, with blank allowed
    bio = models.CharField(max_length=500, blank=True)
    
    # Profile image field for the user, with a default image set
    profile_image = models.ImageField(upload_to='images/', default='../Default_pfp_nxyoza.jpg')
    
    # Many-to-many relationship for followers, where each user can follow other users
    followers = models.ManyToManyField('self', symmetrical=False, related_name='following', blank=True)

    # Define the string representation of the user (return the username)
    def __str__(self):
        return self.username

# Define a Post model to represent user posts
class Post(models.Model):
    # ForeignKey to link each post to a specific user (owner of the post)
    user = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='posts')
    
    # Post image field, allowing users to upload images for posts
    post_image = models.ImageField(upload_to="images/", blank=True, null=False)
    
    # Timestamp indicating when the post was created, set automatically
    created_at = models.DateTimeField(auto_now_add=True)
    
    # Many-to-many relationship for likes, where users can like posts
    likes = models.ManyToManyField(Users, related_name='post_likes', blank=True)
