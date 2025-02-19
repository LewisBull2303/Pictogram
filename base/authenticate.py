# Import JWTAuthentication class from rest_framework_simplejwt for token-based authentication
from rest_framework_simplejwt.authentication import JWTAuthentication

# Custom authentication class inheriting from JWTAuthentication
class CookiesAuthentication(JWTAuthentication):
    
    # Override the authenticate method to use cookies for authentication
    def authenticate(self, request):

        # Retrieve the 'access_token' from the cookies in the request
        access_token = request.COOKIES.get('access_token')

        # If there's no access token in the cookies, return None (unauthenticated)
        if not access_token:
            return None
        
        # Validate the access token using the inherited method
        validated_token = self.get_validated_token(access_token)

        # Attempt to get the user associated with the validated token
        try:
            user = self.get_user(validated_token)
        except:
            # If there is an error (e.g., invalid token or no user found), return None
            return None
        
        # Return the authenticated user and validated token as a tuple
        return (user, validated_token)
