import { VStack, Text, Image } from "@chakra-ui/react"

const Post = ({username, post_image, formatted_date, likes, like_count}) => {

    return (
        <VStack>
            <Text>{username}</Text>
            <Image>{post_image}</Image>
            <Text>{formatted_date}</Text>
            <Text>{likes}</Text>
            <Text>{like_count}</Text>
        </VStack>
    )
}

export default Post