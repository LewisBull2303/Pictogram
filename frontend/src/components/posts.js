import { VStack, Text, Image, HStack, Flex, Box } from "@chakra-ui/react";

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

import { toggleLike } from "../api/endpoints";

const Post = ({
  id,
  username,
  post_image,
  formatted_date,
  liked,
  like_count,
}) => {
  const [clientLiked, setClientLiked] = useState(liked);
  const [clientLikeCount, setClientLikeCount] = useState(like_count);

  const post_image_url = post_image;

  const handleToggleLike = async () => {
    const data = await toggleLike(id);
    if (data.now_liked) {
      setClientLiked(true);
      setClientLikeCount(clientLikeCount + 1);
    } else {
      setClientLiked(false);
      setClientLikeCount(clientLikeCount - 1);
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
          <HStack>
            <Box>
              {clientLiked ? (
                <Box color="red">
                  <FaHeart onClick={handleToggleLike} />
                </Box>
              ) : (
                <FaRegHeart onClick={handleToggleLike} />
              )}
            </Box>
            <Text>{clientLikeCount}</Text>
          </HStack>
          <Text>{formatted_date}</Text>
        </HStack>
      </Flex>
    </VStack>
  );
};

export default Post;
