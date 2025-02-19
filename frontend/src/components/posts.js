import { VStack, Text, Image, HStack, Flex, Box } from "@chakra-ui/react"; // Import Chakra UI components for layout and styling

import { FaHeart } from "react-icons/fa"; // Import filled heart icon (for liked state)
import { FaRegHeart } from "react-icons/fa"; // Import empty heart icon (for unliked state)
import { useState } from "react"; // Import useState hook to manage component state

import { toggleLike } from "../api/endpoints"; // Import the function to handle the like toggling

// Post component to display individual posts with like functionality
const Post = ({
  id,
  username,
  post_image,
  formatted_date,
  liked,
  like_count,
}) => {
  const [clientLiked, setClientLiked] = useState(liked); // State for managing like status (liked or not)
  const [clientLikeCount, setClientLikeCount] = useState(like_count); // State for managing the number of likes

  const post_image_url = post_image; // Assign the post image URL to a variable

  // Function to handle the like/unlike toggle
  const handleToggleLike = async () => {
    const data = await toggleLike(id); // Call the toggleLike API function

    if (data.now_liked) {
      setClientLiked(true); // Update state to reflect liked status
      setClientLikeCount(clientLikeCount + 1); // Increment the like count
    } else {
      setClientLiked(false); // Update state to reflect unliked status
      setClientLikeCount(clientLikeCount - 1); // Decrement the like count
    }
  };

  return (
    <VStack
      maxWidth="400px"
      maxHeight="300px"
      w="400px"
      h="400px"
      border="1px solid"
      borderColor="gray.400"
      borderRadius="8px"
    >
      {/* Header of the post displaying the username */}
      <HStack
        w="100%"
        flex="1"
        borderBottom="1px solid"
        borderColor="gray.300"
        p="0 20px"
        bg="gray.50"
        borderRadius="8px 8px 0 0"
      >
        <Text>@{username}</Text>
      </HStack>

      {/* Image section of the post */}
      <Flex
        flex="6"
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          minWidth="225px"
          maxWidth="300px"
          minHeight="225px"
          maxHeight="225px"
          src={post_image_url}
        ></Image>
      </Flex>

      {/* Footer section displaying the like button and the formatted date */}
      <Flex
        flex="2"
        w="100%"
        justifyContent="center"
        alignItems="center"
        borderTop="1px solid"
        bg="gray.50"
        borderColor="gray.300"
        borderRadius="0 0 8px 8px"
        maxHeight="40px"
      >
        <HStack w="90%" justifyContent="space-between">
          {/* Like button and like count */}
          <HStack>
            <Box>
              {clientLiked ? (
                <Box color="red"> {/* Display red heart if liked */}
                  <FaHeart onClick={handleToggleLike} />
                </Box>
              ) : (
                <FaRegHeart onClick={handleToggleLike} />
              )}
            </Box>
            <Text>{clientLikeCount}</Text> {/* Display the current like count */}
          </HStack>

          {/* Display the formatted date of the post */}
          <Text>{formatted_date}</Text>
        </HStack>
      </Flex>
    </VStack>
  );
};

export default Post; // Export the Post component for use in other parts of the app
