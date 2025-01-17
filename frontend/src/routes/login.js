import { VStack, Flex, FormControl, FormLabel, Input, Button, Heading} from "@chakra-ui/react";
import { login } from '../api/endpoints';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async () => {
        const data = await login(username, password)
        if (data.success){
            navigate(`/${username}`)
        }
        else{
            alert('invalid username or password')
        }
    }

    return (
        <Flex w='100%' h='calc(100vh - 90px)' justifyContent='center' alignItems='center'>
            <VStack alignItems='start' w='95%' maxW='400px' gap='30px'>
                <Heading>Login</Heading>
                   <FormControl>
                        <FormLabel htmlFor='username'>Username</FormLabel>
                        <Input onChange={(e) => setUsername(e.target.value)} bg='white' type='text' />
                   </FormControl>
                   <FormControl>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input onChange={(e) => setPassword(e.target.value)} bg='white' type='password' />
                   </FormControl>
                   <Button onClick={handleLogin} w='100%' colorScheme='green' fontSize='18px'>Login</Button>
            </VStack>
        </Flex>
    )
}

export default Login