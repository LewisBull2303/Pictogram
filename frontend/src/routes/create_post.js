import {
  VStack,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Button,
  Image,
} from "@chakra-ui/react";
import { create_post } from "../api/endpoints";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const nav = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = async () => {
    if (!image) {
      alert("Please select and Image First");
      return;
    }
    try {
      await create_post(image);
      nav("/");
    } catch {
      alert("Error Creating your post");
    }
  };

  return (
    <Flex w="100%" h="100%" justifyContent="center" pt="50px">
      <VStack w="95%" maxWidth="450px" gap="40px">
        <Heading>Create a Post!</Heading>
        <FormControl textAlign="center">
          <FormLabel textAlign="center">Upload a Picture</FormLabel>
          <input
            onChange={handleFileChange}
            bg="white"
            type="file"
            name="post_image"
            accept="image/jpeg, image/png"
          />
        </FormControl>
        {imagePreview && (
          <Image
            src={imagePreview}
            alt="Image Preview"
            boxSize="200px"
            objectFix="cover"
            borderRadius="8px"
          />
        )}
        <Button onClick={handlePost} w="100%" colorScheme="blue">
          Create Post
        </Button>
      </VStack>
    </Flex>
  );
};

export default CreatePost;
