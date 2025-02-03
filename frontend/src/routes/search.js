import { Flex, HStack, VStack, Heading, Input, Button, Box, Image, Text } from "@chakra-ui/react"
import { useState } from "react"
import { search_users } from "../api/endpoints"

const Search = () => {

    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([])

    const handleSearch = async () => {
        const users = await search_users(search)
        setUsers(users)
    }

    return (
        <Flex w='100%' justifyContent='center' pt='50px'>
            <VStack w='95%' maxWidth='500px' gap='20px'>
                <Heading>Search for Other Users!</Heading>
                <HStack w='100%' gap='0'>
                    <Input onChange={(e) => setSearch(e.target.value)} bg='white'/>
                    <Button onClick={handleSearch} colorScheme="blue">Search</Button>
                </HStack>
                <VStack w='100%'>
                    {
                        users.map((users) => {
                            return <UserProfile username={users.username} profile_image={users.profile_image} first_name={users.first_name} last_name={users.last_name}/>
                        })
                    }
                </VStack>
            </VStack>
        </Flex>
    )
}

const UserProfile = ({username, profile_image, first_name, last_name}) => {
    return (
        <Flex>
            <HStack>

                <Box>
                    <Image></Image>
                </Box>

                <VStack>
                    <Text></Text>
                    <Text></Text>
                </VStack>

            </HStack>
        </Flex>
    )
}

export default Search