import { useAuth } from "../contexts/useAuth"; // Import custom hook to manage authentication state
import { Navigate } from "react-router-dom"; // Import Navigate component to redirect users
import { Text } from "@chakra-ui/react"; // Import Chakra UI Text component for UI elements

// PrivateRoute component to protect routes that require authentication
const PrivateRoute = ({ children }) => {
  const { auth, authLoading } = useAuth(); // Use the custom hook to get auth state and loading status

  if (authLoading) { 
    return <Text>Loading...</Text>; // Show a loading message while auth status is being determined
  }

  if (auth) { // If the user is authenticated
    return children; // Render the children (protected content)
  } else { // If the user is not authenticated
    return <Navigate to="/login" />; // Redirect to login page
  }
};

export default PrivateRoute; // Export the PrivateRoute component for use in routing
