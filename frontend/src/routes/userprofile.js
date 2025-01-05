import { Text, VStack, Flex, Box, Heading, HStack, Image} from '@chakra-ui/react'

const UserProfile = () => {
    return (
        <Flex w='100%' justifyContent='center'>
            <VStack w='75%' >
                <Box w='100%' mt='40px'>
                    <UserDetails />
                </Box>
            </VStack>
        </Flex>
    )
}

const UserDetails = () => {
    return (
        <VStack w='100%' alignItems='start'>
            <Heading>@admin33</Heading>
            <HStack>
                <Box boxSize='150px' border='2px solid' borderColor='grey.700' bg='white' borderRadius='full' overflow='hidden'> 
                <Image src='https://8000-lewisbull2303-instagram-spjqg3hzjk.app.codeanywhere.com/api//media/profile_image/360_F_7324855_mx4CEBWTr81XLOrlQccCROtP2uNR7xbk.jpg' boxSize='100%' objectFit='cover'/>

                </Box>
                <VStack>
                    <HStack>
                        <VStack>
                            <Text>Followers</Text>
                            <Text>0</Text>
                        </VStack>
                        <VStack>
                            <Text>Following</Text>
                            <Text>0</Text>
                        </VStack>
                    </HStack>
                </VStack>
            </HStack>

        </VStack>
    )
}

export default UserProfile