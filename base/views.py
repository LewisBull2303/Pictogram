from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

# Import necessary models and serializers
from .models import Users, Post
from .serializers import UserProfileSerializer, UserRegisterSerializer, PostSerializer, UserSerializer

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

# View for checking if the user is authenticated
@api_view(['GET'])
@permission_classes([IsAuthenticated])  # Ensures only authenticated users can access this view
def auhtenticated(request):
    return Response('authenticated!')

# View for user registration
@api_view(['POST'])
def register(request):
    serializer = UserRegisterSerializer(data=request.data)  # Serialize the registration data
    if serializer.is_valid():
        serializer.save()  # Save the user data to the database
        return Response(serializer.data)  # Return the serialized data as response
    return Response(serializer.errors)  # Return errors if the data is invalid


# Custom view for obtaining JWT tokens (both access and refresh)
class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        try:
            response = super().post(request, *args, **kwargs)  # Obtain tokens using the parent method
            tokens = response.data
            access_token = tokens['access']
            refresh_token = tokens['refresh']
            username = request.data['username']

            # Try fetching the user from the database
            try:
                user = Users.objects.get(username=username)
            except Users.DoesNotExist:
                return Response({'error': 'User not found'}, status=404)

            res = Response()

            # Add user details to the response data
            res.data = {"success": True,
                        'user': {
                            'username': user.username,
                            'bio': user.bio,
                            'email': user.email,
                            'first_name': user.first_name,
                            'last_name': user.last_name
                        }
                        }

            # Set the access and refresh tokens in the cookies
            res.set_cookie(
                key='access_token',
                value=access_token,
                httponly=True,
                secure=True,
                samesite='None',
                path='/'
            )

            res.set_cookie(
                key='refresh_token',
                value=refresh_token,
                httponly=True,
                secure=True,
                samesite='None',
                path='/'
            )

            return res
        except:
            return Response({'success': False})

# Custom view for refreshing JWT tokens
class CustomTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        try:
            refresh_token = request.COOKIES.get('refresh_token')  # Get refresh token from cookies
            request.data['refresh'] = refresh_token

            response = super().post(request, *args, **kwargs)  # Use the parent method to get new access token
            tokens = response.data
            access_token = tokens['access']

            res = Response()
            res.data = {
                "success": True
            }

            # Set new access token in cookies
            res.set_cookie(
                key='access_token',
                value=access_token,
                httponly=True,
                secure=True,
                samesite='None',
                path='/'
            )

            return res
        except:
            return Response({'success': False})


# View to get user profile data
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_profile_data(request, pk):
    try:
        try:
            user = Users.objects.get(username=pk)  # Fetch the user by username (pk)
        except Users.DoesNotExist:
            return Response({'error': 'User not found'}, status=404)
        
        serializer = UserProfileSerializer(user, many=False)

        following = False
        
        # Check if the authenticated user is following the profile
        if request.user in user.followers.all():
            following = True

        return Response({**serializer.data, 'is_my_profile': request.user.username == user.username, 'following': following})
    except:
        return Response({'error': 'An error getting user data'})


# View to toggle follow/unfollow a user
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def toggleFollow(request):
    try:
        try:
            my_user = Users.objects.get(username=request.user.username)  # Get the authenticated user
            user_to_follow = Users.objects.get(username=request.data['username'])  # Get the user to follow/unfollow
        except Users.DoesNotExist:
            return Response({'error': 'users does not exist'})

        # Add or remove user from followers list
        if my_user in user_to_follow.followers.all():
            user_to_follow.followers.remove(my_user)
            return Response({'now_following': False})
        else:
            user_to_follow.followers.add(my_user)
            return Response({'now_following': True})
    except:
        return Response({'error': 'error following user'})


# View to get all posts of a specific user
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_users_posts(request, pk):
    try:
        user = Users.objects.get(username=pk)
        my_user = Users.objects.get(username=request.user.username)
    except Users.DoesNotExist:
        return Response({'error': 'User not found'}, status=404)
    
    posts = user.posts.all().order_by('-created_at')  # Fetch posts ordered by creation date

    serializer = PostSerializer(posts, many=True)

    data = []

    # Add like status for each post
    for post in serializer.data:
        new_post = {}

        if my_user.username in post['likes']:
            new_post = {**post, 'liked': True}
        else:
            new_post = {**post, 'liked': False}
        data.append(new_post)

    return Response(data)


# View to toggle like/unlike a post
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def toggleLike(request):
    try:
        try:
            post = Post.objects.get(id=request.data['id'])  # Get the post by ID
        except Post.DoesNotExist:
            return Response({'error': 'Post not found'}, status=404)
        
        try:
            user = Users.objects.get(username=request.user.username)  # Get the authenticated user
        except Users.DoesNotExist:
            return Response({'error': 'User not found'}, status=404)
        
        # Add or remove like for the post
        if user in post.likes.all():
            post.likes.remove(user)
            return Response({'now_liked': False})
        else:
            post.likes.add(user)
            return Response({'now_liked': True})
    except:
        return Response({'error': 'failed to like post'})


# View to create a new post
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_post(request):
    try:
        post_image = request.FILES.get('post_image')  # Get the uploaded image

        if not post_image:
            return Response({'error': 'No image provided'}, status=400)

        try:
            user = Users.objects.get(username=request.user.username)  # Get the authenticated user
        except Users.DoesNotExist:
            return Response({'error': 'User not found'}, status=404)

        # Create the new post
        post = Post.objects.create(
            user=user,
            post_image=post_image
        )
        
        # Serialize and return the post data
        serializer = PostSerializer(post, many=False)

        return Response(serializer.data)
    except Exception as e:
        return Response({'Error': f'Error Creating Post: {str(e)}'})


# View to get all posts with pagination
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_posts(request):
    try:
        my_user = Users.objects.get(username=request.user.username)  # Get the authenticated user
    except Users.DoesNotExist:
        return Response({'error': 'user does not exist'})

    posts = Post.objects.all().order_by('-created_at')  # Fetch all posts ordered by creation date

    paginator = PageNumberPagination()
    paginator.page_size = 10  # Limit posts per page

    result_page = paginator.paginate_queryset(posts, request)
    serializer = PostSerializer(result_page, many=True)

    data = []

    # Add like status for each post
    for post in serializer.data:
        new_post = {}

        if my_user.username in post['likes']:
            new_post = {**post, 'liked': True}
        else:
            new_post = {**post, 'liked': False}
        data.append(new_post)

    return paginator.get_paginated_response(data)


# View to search for users by username
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def search_user(request):
    query = request.query_params.get('query', '')  # Get the search query from URL parameters
    users = Users.objects.filter(username__icontains=query)  # Filter users by query
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


# View to update user details
@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def update_user_details(request):
    data = request.data

    try:
        user = Users.objects.get(username=request.user.username)  # Get the authenticated user
    except Users.DoesNotExist:
        return Response({'error': 'user does not exist'})

    serializer = UserSerializer(user, data, partial=True)  # Allow partial updates

    if serializer.is_valid():
        serializer.save()
        return Response({**serializer.data, "success": True})
    
    return Response({**serializer.errors, "success": False})


# View to log out a user by clearing cookies
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout(request):
    try:
        res = Response()
        res.data = {"success": True}
        res.delete_cookie('access_token', path='/', samesite='None')  # Remove access token cookie
        res.delete_cookie('refresh_token', path='/', samesite='None')  # Remove refresh token cookie
        return res
    except:
        return Response({"success": False})
