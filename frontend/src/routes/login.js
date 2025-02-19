import {
    VStack,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Button,
    Heading,
    Text,
  } from "@chakra-ui/react"; // Import Chakra UI components for layout and styling
  import { useState } from "react"; // Import React hook for state management
  import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation after login
  import { useAuth } from "../contexts/useAuth"; // Import useAuth context to handle authentication
  
  const Login = () => {
    const [username, setUsername] = useState(""); // State to store the username input
    const [password, setPassword] = useState(""); // State to store the password input
    const navigate = useNavigate(); // useNavigate hook for navigation after login
    const { auth_login } = useAuth(); // Destructuring the auth_login function from the context
  
    // Function to handle login action
    const handleLogin = async () => {
      auth_login(username, password); // Call the auth_login function from context with the username and password
    };
  
    // Function to navigate to the registration page
    const handleNav = () => {
      navigate("/register"); // Redirect to the register page when clicked
    };
  
    return (
      <Flex
        w="100%"
        h="calc(100vh - 90px)" // Set height to fill remaining screen space (taking navbar height into account)
        justifyContent="center" // Center the content horizontally
        alignItems="center" // Center the content vertically
      >
        <VStack alignItems="start" w="95%" maxW="400px" gap="30px">
          <Heading>Login</Heading> {/* Heading for the login page */}
          {/* Form to input username */}
          <FormControl>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              onChange={(e) => setUsername(e.target.value)} // Update username state on change
              bg="white"
              type="text"
            />
          </FormControl>
          {/* Form to input password */}
          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              onChange={(e) => setPassword(e.target.value)} // Update password state on change
              bg="white"
              type="password"
            />
          </FormControl>
          <VStack w="100%" alignItems="start" gap="10px">
            {/* Login button */}
            <Button
              onClick={handleLogin} // Trigger login function when clicked
              w="100%" // Full width button
              colorScheme="green" // Green color scheme for the button
              fontSize="18px" // Set font size
            >
              Login
            </Button>
            {/* Text link to navigate to the registration page */}
            <Text color="gray.500" onClick={handleNav}>
              Dont Have an Account? Register Here!
            </Text>
          </VStack>
        </VStack>
      </Flex>
    );
  };
  
  export default Login;
  