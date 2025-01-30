import { Flex, HStack, Text} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'

import { CgProfile } from "react-icons/cg";
import { IoAddCircleOutline } from "react-icons/io5";

const NavBar = () => {

    const nav = useNavigate();

    const handleNavigation = (route) => {
        nav(`/${route}`)
    }

    return (
        <Flex w='100vw' h='90px' bg='blue.600' justifyContent="center" alignItems='center'>
            <HStack w='90%' justifyContent='space-between' color='white'>
                <Text fontSize='24px' fontWeight='bold'>Clonestagram</Text>
                <HStack gap='20px'>
                    <Text onClick={(route) => handleNavigation('')}><CgProfile size='22px'/></Text>
                    <Text onClick={(route) => handleNavigation('create/post')}><IoAddCircleOutline size='22px' /></Text>
                </HStack>
            </HStack>
        </Flex>
    )
}

export default NavBar;