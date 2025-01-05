import { Text, VStack, Flex, Box, Heading, HStack} from '@chakra-ui/react'

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
                <Box>

                </Box>
                <HStack></HStack>
            </HStack>

        </VStack>
    )
}

export default UserProfile