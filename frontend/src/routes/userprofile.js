import { Text, VStack, Flex, Box, Heading, HStack, Image, Button} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { get_user_profile_data } from '../api/endpoints';

const UserProfile = () => {

    const get_username_from_url = () => {
        const split_url = window.location.pathname.split('/');
        return split_url[split_url.length - 1];
    }

    const [username, setUsername] = useState(get_username_from_url())

    useEffect(() =>{
        setUsername(get_username_from_url())
    }, [])

    return (
        <Flex w='100%' justifyContent='center'>
            <VStack w='75%' >
                <Box w='100%' mt='40px'>
                    <UserDetails username={username}/>
                </Box>
            </VStack>
        </Flex>
    )
}

const UserDetails = ({username}) => {

    useEffect(() => {

        const fecthData = async () => {
            const data = await get_user_profile_data(username);
            console.log(data)
        }
        fecthData()

    }, [])

    return (
        <VStack w='100%' alignItems='start' gap='40px'>
            <Heading>@{username}</Heading>
            <HStack gap='20px'>
                <Box boxSize='150px' border='2px solid' borderColor='grey.700' bg='white' borderRadius='full' overflow='hidden'> 
                <Image src='https://8000-lewisbull2303-instagram-spjqg3hzjk.app.codeanywhere.com/api//media/profile_image/360_F_7324855_mx4CEBWTr81XLOrlQccCROtP2uNR7xbk.jpg' boxSize='100%' objectFit='cover'/>

                </Box>
                <VStack gap='20px'>
                    <HStack gap='20px' fontSize='18px'>
                        <VStack>
                            <Text>Followers</Text>
                            <Text>0</Text>
                        </VStack>
                        <VStack>
                            <Text>Following</Text>
                            <Text>0</Text>
                        </VStack>
                    </HStack>
                    <Button w='100%'>Edit Profile</Button>
                </VStack>
            </HStack>
            <Text fontSize='18px'>Bio</Text>
        </VStack>
    )
}

export default UserProfile