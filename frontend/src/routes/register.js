import {
    VStack,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Button,
    Heading,
    Text,
  } from "@chakra-ui/react"; // Importing Chakra UI components for form layout and styling
  import { register } from "../api/endpoints"; // Import the register function from API endpoints
  import { useState } from "react"; // Import useState hook for managing state
  import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation after successful registration
  
  const Register = () => {
    // Define state variables for form fields
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate(); // Use useNavigate hook for navigation
  
    // Function to handle the form submission and user registration
    const handleRegister = async () => {
      // Check if password and confirm password match
      if (password === confirmPassword) {
        try {
          // Call the register function from API
          await register(username, email, firstName, lastName, password);
          alert("successful registration"); // Display success message
          navigate("/login"); // Navigate to login page after successful registration
        } catch {
          alert("error registering"); // Display error message if registration fails
        }
      } else {
        alert("password and confirm password do not match"); // Alert if passwords do not match
      }
    };
  
    // Function to handle navigation to the login page
    const handleNav = () => {
      navigate("/login"); // Navigate to the login page
    };
  
    return (
      <Flex
        w="100%"
        h="calc(100vh - 90px)" // Set height to fill remaining screen space (after subtracting navbar height)
        justifyContent="center" // Center the form horizontally
        alignItems="center" // Center the form vertically
      >
        <VStack alignItems="start" w="95%" maxW="400px" gap="20px">
          <Heading>Register</Heading> {/* Heading for the registration page */}
          {/* Form to input username */}
          <FormControl>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              onChange={(e) => setUsername(e.target.value)} // Update username state on change
              bg="white"
              type="text"
            />
          </FormControl>
          {/* Form to input email */}
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              onChange={(e) => setEmail(e.target.value)} // Update email state on change
              bg="white"
              type="email"
            />
          </FormControl>
          {/* Form to input first name */}
          <FormControl>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input
              onChange={(e) => setFirstName(e.target.value)} // Update first name state on change
              bg="white"
              type="text"
            />
          </FormControl>
          {/* Form to input last name */}
          <FormControl>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input
              onChange={(e) => setLastName(e.target.value)} // Update last name state on change
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
          {/* Form to input confirm password */}
          <FormControl>
            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
            <Input
              onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state on change
              bg="white"
              type="password"
            />
          </FormControl>
          <VStack w="100%" alignItems="start" gap="10px">
            {/* Register button that triggers the handleRegister function */}
            <Button
              onClick={handleRegister} // Trigger handleRegister on click
              w="100%" // Full width button
              colorScheme="green" // Green color scheme for the button
              fontSize="18px" // Set font size for the button text
            >
              Register
            </Button>
            {/* Text link to navigate to login page if the user already has an account */}
            <Text color="gray.500" onClick={handleNav}>
              Already Have an Account? Login Here!
            </Text>
          </VStack>
        </VStack>
      </Flex>
    );
  };
  
  export default Register;
  