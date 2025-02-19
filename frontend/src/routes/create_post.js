import {
    VStack, // Vertical stack layout component
    Flex, // Flexible box layout component
    Heading, // Heading component for titles
    FormControl, // Form control wrapper component
    FormLabel, // Form label component
    Button, // Button component for user interaction
    Image, // Image component to display images
  } from "@chakra-ui/react"; // Importing Chakra UI components for styling
  
  import { create_post } from "../api/endpoints"; // Importing the create_post API function
  import { useState } from "react"; // Importing useState hook for managing component state
  import { useNavigate } from "react-router-dom"; // Importing useNavigate hook for programmatic navigation
  
  const CreatePost = () => {
    const [image, setImage] = useState(""); // State to store the selected image file
    const [imagePreview, setImagePreview] = useState(""); // State to store image preview URL
    const nav = useNavigate(); // Hook to navigate to different routes
  
    // Handle file input change (when a user selects an image)
    const handleFileChange = (e) => {
      const file = e.target.files[0]; // Get the first file from the file input
      if (file) {
        setImage(file); // Set the image state to the selected file
        const reader = new FileReader(); // Create a new FileReader to read the file
        reader.onload = () => {
          setImagePreview(reader.result); // Set the image preview state with the file URL
        };
        reader.readAsDataURL(file); // Read the file as a Data URL
      }
    };
  
    // Handle post submission (create post action)
    const handlePost = async () => {
      if (!image) {
        alert("Please select and Image First"); // Alert user if no image is selected
        return;
      }
      try {
        await create_post(image); // Call the create_post API with the selected image
        nav("/"); // Navigate to the home page after post is created successfully
      } catch {
        alert("Error Creating your post"); // Alert if there's an error creating the post
      }
    };
  
    return (
      <Flex w="100%" h="100%" justifyContent="center" pt="50px">
        <VStack w="95%" maxWidth="450px" gap="40px"> {/* VStack to vertically stack the content */}
          <Heading>Create a Post!</Heading> {/* Heading text for the page */}
          <FormControl textAlign="center"> {/* FormControl to wrap input field */}
            <FormLabel textAlign="center">Upload a Picture</FormLabel> {/* Label for the file input */}
            <input
              onChange={handleFileChange} // Event handler when file is selected
              bg="white" // Background color of the input field
              type="file" // Input type for file selection
              name="post_image" // Name of the input field
              accept="image/jpeg, image/png" // Allow only jpeg and png image files
            />
          </FormControl>
          {imagePreview && ( // If there is a preview of the image, show it
            <Image
              src={imagePreview} // Use the image preview URL as the source
              alt="Image Preview" // Alt text for the image
              boxSize="200px" // Set the size of the image
              objectFit="cover" // Ensure the image covers the area without stretching
              borderRadius="8px" // Rounded corners for the image
            />
          )}
          <Button onClick={handlePost} w="100%" colorScheme="blue"> {/* Button to create post */}
            Create Post
          </Button>
        </VStack>
      </Flex>
    );
  };
  
  export default CreatePost;
  