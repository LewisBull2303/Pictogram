import { Flex, HStack, Text} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'

import { CgProfile } from "react-icons/cg";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import { MdOutlineLogin } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { useAuth } from '../contexts/useAuth'


const NavBar = () => {
    
    const { auth_login } = useAuth();
    const nav = useNavigate();

    const handleNavigation = (route) => {
        nav(`/${route}`)
    }

    return (
        <Flex w='100vw' h='90px' bg='blue.600' justifyContent="center" alignItems='center'>
            <HStack w='90%' justifyContent='space-between' color='white'>
                <Text fontSize='24px' fontWeight='bold'>Pictogram</Text>
                <HStack gap='20px'>
                    <Text onClick={(route) => handleNavigation('search')}><IoSearch size='22px'/></Text>
                    <Text onClick={(route) => handleNavigation(`${username}`)}><CgProfile size='22px'/></Text>
                    <Text onClick={(route) => handleNavigation('create/post')}><IoAddCircleOutline size='24px' /></Text>
                    <Text onClick={(route) => handleNavigation('')}><IoHomeOutline size='22px'/></Text>
                    <Text onClick={(route) => handleNavigation('register')}><FiUserPlus size='20px'/></Text>
                    <Text onClick={(route) => handleNavigation('login')}><MdOutlineLogin size='20px'/></Text>
                    <Text onClick={(route) => handleNavigation('settings')}><IoSettingsOutline size='20px'/></Text>
                </HStack>
            </HStack>
        </Flex>
    )
}

export default NavBar;