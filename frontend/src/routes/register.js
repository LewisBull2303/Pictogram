import { VStack, Flex, FormControl, FormLabel, Input, Button, Heading} from "@chakra-ui/react";
import { login } from '../api/endpoints';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName ] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()

    const handleRegister = async () => {

    }

    return (
        <Flex w='100%' h='calc(100vh - 90px)' justifyContent='center' alignItems='center'>
            <VStack alignItems='start' w='95%' maxW='400px' gap='30px'>
                <Heading>Register</Heading>
                <FormControl>
                        <FormLabel htmlFor='username'>Username</FormLabel>
                        <Input onChange={(e) => setUsername(e.target.value)} bg='white' type='text' />
                   </FormControl>
                   <FormControl>
                        <FormLabel htmlFor='username'>Email</FormLabel>
                        <Input onChange={(e) => setEmail(e.target.value)} bg='white' type='email' />
                   </FormControl>
                   <FormControl>
                        <FormLabel htmlFor='username'>First Name</FormLabel>
                        <Input onChange={(e) => setFirstName(e.target.value)} bg='white' type='text' />
                   </FormControl>
                   <FormControl>
                        <FormLabel htmlFor='username'>Last Name</FormLabel>
                        <Input onChange={(e) => setLastName(e.target.value)} bg='white' type='text' />
                   </FormControl>
                   <FormControl>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input onChange={(e) => setPassword(e.target.value)} bg='white' type='password' />
                   </FormControl>
                   <FormControl>
                        <FormLabel htmlFor='password'>Confirm Password</FormLabel>
                        <Input onChange={(e) => setConfirmPassword(e.target.value)} bg='white' type='password' />
                   </FormControl>
                   <Button onClick={handleRegister} w='100%' colorScheme='green' fontSize='18px'>Register</Button>
            </VStack>
        </Flex>
    )
}

export default Login