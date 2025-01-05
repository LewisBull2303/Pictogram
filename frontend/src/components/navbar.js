import { Flex, HStack, Text} from "@chakra-ui/react";

const NavBar = () => {
    return (
        <Flex w='100vw' h='90px' bg='blue.600' justifyContent="center" alignItems='center'>
            <HStack w='90%' justifyContent='space-between' color='white'>
                <Text fontSize='24px' fontWeight='bold'>Clonestagram</Text>
                <HStack>
                    <Text>Profile</Text>
                </HStack>
            </HStack>
        </Flex>
    )
}

export default NavBar;