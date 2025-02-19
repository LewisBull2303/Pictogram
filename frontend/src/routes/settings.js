// Import necessary components and hooks from Chakra UI and other libraries
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Textarea,
    VStack,
  } from "@chakra-ui/react"; // Chakra UI components for layout and form controls
  import { useState } from "react"; // Hook to manage state
  import { update_user, logout } from "../api/endpoints"; // API functions for updating user and logging out
  import { useNavigate } from "react-router-dom"; // Hook to navigate between pages
  
  // Settings component
  const Settings = () => {
    // Get user data from localStorage and parse it
    const storage = JSON.parse(localStorage.getItem("userData"));
  
    // Set state variables with values from localStorage, if available
    const [username, setUsername] = useState(storage ? storage.username : "");
    const [email, setEmail] = useState(storage ? storage.email : "");
    const [firstName, setFirstName] = useState(storage ? storage.first_name : "");
    const [lastName, setLastName] = useState(storage ? storage.last_name : "");
    const [bio, setBio] = useState(storage ? storage.bio : "");
    const [profile_image, setProfileImage] = useState(
      storage ? storage.profile_image : ""
    );
  
    // Initialize the navigation hook to redirect users
    const nav = useNavigate();
  
    // Logout handler: calls the logout function and redirects to the login page
    const handleLogout = async () => {
      try {
        await logout(); // Call the logout API function
        nav("/login"); // Navigate to login page
      } catch {
        alert("error logging out"); // Display error if logout fails
      }
    };
  
    // Update handler: updates user data and saves it in localStorage
    const handleUpdate = async () => {
      try {
        // Call the API to update the user details
        await update_user({
          username: username,
          profile_image: profile_image,
          email: email,
          first_name: firstName,
          last_name: lastName,
          bio: bio,
        });
  
        // Save updated user data to localStorage
        localStorage.setItem(
          "userData",
          JSON.stringify({
            username: username,
            email: email,
            first_name: firstName,
            last_name: lastName,
            bio: bio,
          })
        );
  
        // Alert the user that the update was successful
        alert("successfully updated");
      } catch {
        alert("error updating details"); // Display error if update fails
      }
    };
  
    return (
      // Flex container to center the settings form
      <Flex w="100%" justifyContent="center" pt="50px">
        <VStack w="95%" maxWidth="500px" gap="20px">
          <Heading>Settings</Heading> {/* Page heading */}
  
          {/* Form controls for each editable field */}
          <VStack w="100%" gap="10px" alignItems="start">
            {/* Profile picture input */}
            <FormControl>
              <FormLabel>Profile Picture</FormLabel>
              <input
                onChange={(e) => setProfileImage(e.target.files[0])} // Update profile image on file selection
                bg="white"
                type="file"
                accept="image/jpeg, image/png" // Allow only image files
              />
            </FormControl>
  
            {/* Username input */}
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                onChange={(e) => setUsername(e.target.value)} // Update username on change
                value={username}
                bg="white"
                type="text"
              />
            </FormControl>
  
            {/* Email input */}
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                onChange={(e) => setEmail(e.target.value)} // Update email on change
                value={email}
                bg="white"
                type="email"
              />
            </FormControl>
  
            {/* First name input */}
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                onChange={(e) => setFirstName(e.target.value)} // Update first name on change
                value={firstName}
                bg="white"
                type="text"
              />
            </FormControl>
  
            {/* Last name input */}
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                onChange={(e) => setLastName(e.target.value)} // Update last name on change
                value={lastName}
                bg="white"
                type="text"
              />
            </FormControl>
  
            {/* Bio input */}
            <FormControl>
              <FormLabel>Bio</FormLabel>
              <Textarea
                onChange={(e) => setBio(e.target.value)} // Update bio on change
                value={bio}
                bg="white"
                type="text"
              />
            </FormControl>
  
            {/* Save changes button */}
            <Button onClick={handleUpdate} w="100%" colorScheme="blue" mt="10px">
              Save Changes
            </Button>
          </VStack>
  
          {/* Logout button */}
          <Button onClick={handleLogout} colorScheme="red">
            Logout
          </Button>
        </VStack>
      </Flex>
    );
  };
  
  // Export the Settings component to be used in other parts of the app
  export default Settings;
  