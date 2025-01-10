import { VStack, Flex, FormControl, FormLabel, Input} from "@chakra-ui/react"

const Login = () => {
    return (
        <Flex>
            <VStack>
                   <FormControl>
                        <FormLabel htmlFor='username'>Username</FormLabel>
                        <Input type='text'></Input>
                   </FormControl>
            </VStack>
        </Flex>
    )
}

export default Login