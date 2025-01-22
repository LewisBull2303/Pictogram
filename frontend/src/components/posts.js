import { VStack, Text, Image } from "@chakra-ui/react"
import { SERVER_URL } from "../constants/constants"

const Post = ({username, post_image, formatted_date, likes, like_count}) => {
    console.log(post_image)
    return (
        <VStack>
            <Text>{username}</Text>
            <Image src={post_image ? `${SERVER_URL}${post_image}` : null}></Image>
            <Text>{formatted_date}</Text>
            <Text>{like_count}</Text>
        </VStack>
    )
}

export default Post