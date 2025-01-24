import { Text, VStack, Flex, Heading, FormControl, FormLabel, Input, Button, Image} from "@chakra-ui/react"

const CreatePost = () => {
    return (
        <Flex w='100%' h='100%' justifyContent='center' pt='50px'>
            <VStack w='95%' maxWidth = '450px' gap='40px'>
                <Heading>Create a Post!</Heading>
                <FormControl>
                    <FormLabel>Upload a Picture</FormLabel>
                    <Input bg='white' type='file' name='post_image' accept='image/jpeg, image/png'/>
                </FormControl>
                <Button w='100%' colorScheme='blue'>Create Post</Button>
            </VStack>
        </Flex>
    )
}

export default CreatePost