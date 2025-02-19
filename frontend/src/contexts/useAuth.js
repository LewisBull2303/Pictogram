import { createContext, useContext, useState, useEffect } from "react"; // Importing necessary hooks and functions from React
import { get_auth, login } from "../api/endpoints"; // Import API functions to handle authentication requests
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

// Creating the context for authentication
const AuthContext = createContext();

// The AuthProvider component will provide auth-related values and methods to the rest of the app
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false); // State to track if the user is authenticated
  const [authLoading, setAuthLoading] = useState(true); // State to track if the auth check is in progress
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to check the authentication status
  const check_auth = async () => {
    try {
      await get_auth(); // Make API call to check if the user is authenticated
      setAuth(true); // Set auth to true if the user is authenticated
    } catch {
      setAuth(false); // Set auth to false if authentication fails
    } finally {
      setAuthLoading(false); // Set loading state to false once the check is complete
    }
  };

  // Function to handle login, by making an API call and saving user data to localStorage
  const auth_login = async (username, password) => {
    const data = await login(username, password); // Call the login API with the provided credentials
    if (data.success) {
      setAuth(true); // Set auth to true if login is successful
      const userData = {
        username: data.user.username, // Store user's data
        bio: data.user.bio,
        email: data.user.email,
        first_name: data.user.first_name,
        last_name: data.user.last_name,
      };
      localStorage.setItem("userData", JSON.stringify(userData)); // Store user data in localStorage
      navigate(`/${username}`); // Navigate to the user's profile page
      console.log(navigate(`/${username}`)); // Log the navigation (debugging)
    } else {
      alert("invalid username or password"); // Show an alert if login fails
    }
  };

  // useEffect to check authentication status when the component mounts or when the location path changes
  useEffect(() => {
    check_auth(); // Call check_auth function on initial load or when path changes
  }, [window.location.pathname]); // Dependency array to trigger effect on path changes

  // Return the AuthContext provider with the auth state and auth_login method passed down
  return (
    <AuthContext.Provider value={{ auth, authLoading, auth_login }}>
      {children} {/* Render children components with access to auth context */}
    </AuthContext.Provider>
  );
};

// Custom hook to access auth context in other components
export const useAuth = () => useContext(AuthContext); // Return context value (auth, authLoading, auth_login) for easy access
