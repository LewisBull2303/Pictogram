import { VStack, Flex, FormControl, FormLabel, Input} from "@chakra-ui/react"

const Login = () => {
    return (
        <Flex>
            <VStack>
                   <FormControl>
                        <FormLabel htmlFor='username'>Username</FormLabel>
                        <Input type='text' />
                   </FormControl>
                   <FormControl>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input type='password' />
                   </FormControl>
                   <Button>Login</Button>
            </VStack>
        </Flex>
    )
}

export default Login