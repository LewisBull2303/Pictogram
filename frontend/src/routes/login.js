import { VStack, Flex, FormControl, FormLabel, Input, Button, Heading} from "@chakra-ui/react"

const Login = () => {
    return (
        <Flex w='100%' h='calc(100vh - 90px)' justifyContent='center' alignItems='center'>
            <VStack>
                <Heading>Login</Heading>
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