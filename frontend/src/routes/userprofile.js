import { Text, VStack, Flex, Box, Heading, HStack, Image, Button} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { get_user_profile_data } from '../api/endpoints';
import { SERVER_URL } from '../constants/constants';

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

    const [loading, setLoading] = useState(true)
    const [bio, setBio] = useState('')
    const [profileImage, setProfileImage] = useState('')
    const [followerCount, setFollowerCount] = useState(0)
    const [followingCount, setFollowingCount] = useState(0)

    const [isMyProfile, setIsMyProfile] = useState(false)
    const [following, setFollowing] = useState(false)
 
    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await get_user_profile_data(username);
                setBio(data.bio)
                setProfileImage(data.profile_image)
                setFollowerCount(data.follower_count)
                setFollowingCount(data.following_count)

                setIsMyProfile(data.is_my_profile)
                setFollowing(data.following)
            } catch {
                console.log('error')
            } finally {
                setLoading(false)
            }
        }
        fetchData()
        
    }, [])

    return (
        <VStack w='100%' alignItems='start' gap='40px'>
            <Heading>@{username}</Heading>
            <HStack gap='20px'>
                <Box boxSize='150px' border='2px solid' borderColor='grey.700' bg='white' borderRadius='full' overflow='hidden'> 
                <Image src={loading ? '' : `${SERVER_URL}${profileImage}`}boxSize='100%' objectFit='cover'/>

                </Box>
                <VStack gap='20px'>
                    <HStack gap='20px' fontSize='18px'>
                        <VStack>
                            <Text>Followers</Text>
                            <Text>{loading ? '-' : followerCount}</Text>
                        </VStack>
                        <VStack>
                            <Text>Following</Text>
                            <Text>{loading ? '-' : followingCount}</Text>
                        </VStack>
                    </HStack>
                    {
                        isMyProfile ?
                            <Button w='100%'>Edit Profile</Button>
                        :
                        <Button colorScheme='blue' w='100%'>{following ? 'Unfollow' : 'Follow'}</Button>

                    }
                </VStack>
            </HStack>
            <Text fontSize='18px'>{loading ? '-' : bio}</Text>
        </VStack>
    )
}
console.log(SERVER_URL)
export default UserProfile