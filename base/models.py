from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Users(AbstractUser):
    username = models.CharField(max_length=50, unique=True, primary_key=True)
    bio = models.CharField(max_length=500)
    profile_image = models.ImageField(upload_to='profile_image/', blank=True, null=True)
    followers = models.ManyToManyField('self', symmetrical=False, related_name='following', blank=True)

    def __str__(self):
        return self.username

class Post(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='posts')
    post_image = models.ImageField(upload_to="post_images/", blank=True, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.ManyToManyField(Users, related_name='post_likes', blank=True)