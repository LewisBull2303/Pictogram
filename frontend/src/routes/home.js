import { Heading, VStack, Flex, Text, Image } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { get_posts } from "../api/endpoints"
import Post from "../components/posts"
import { SERVER_URL } from "../constants/constants"

const Home = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [nextPage, setNextPage] = useState(1)

    const fetchData = async () => {
        const posts = await get_posts(nextPage)
        setPosts(...posts, [posts.results])
        setNextPage(posts.next ? nextPage+1 : null)
    }

    useEffect(() => {
        try {
            fetchData()
        }
        catch{
            alert('error getting posts')
        }
        finally {
            setLoading(false)
        }
    })

    return (
        <Flex w='100%' justifyContent='center' pt='50px'>
            <VStack alignItems='start' gap='20px' pb='50px'>
                {
                    loading ?
                        <Text>Loading...</Text>
                    :
                        posts ?
                            posts.map((post) => {
                                return <Post key={post.id} id={post.id} username={post.username} post_image={post.post_image} formatted_date={post.formatted_date} liked={post.liked} like_count={post.likes_count}/>
                            })
                        :

                        <></>
                }
            </VStack>
        </Flex>
    )
}

export default Home