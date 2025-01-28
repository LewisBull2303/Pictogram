import { VStack, Flex, Heading, FormControl, FormLabel, Input, Button,} from "@chakra-ui/react"
import { create_post } from '../api/endpoints'
import { useState } from "react"

const CreatePost = () => {

    const [image, setImage] = useState('')

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if(file) {
            setImage(file)
        }
    }

    const handlePost = async () => {
        if (!image) {
            alert('Please select and Image First')
            return
        }

        const formData = new FormData()
        formData.append('post_image', image)
        try {
            await create_post(formData)
        }
        catch{
            alert('Error Creating your post')
        }
    }

    return (
        <Flex w='100%' h='100%' justifyContent='center' pt='50px'>
            <VStack w='95%' maxWidth = '450px' gap='40px'>
                <Heading>Create a Post!</Heading>
                <FormControl textAlign='center'>
                    <FormLabel textAlign='center'>Upload a Picture</FormLabel>
                    <Input onChange={handleFileChange} bg='white' type='file' name='post_image' accept='image/jpeg, image/png'/>
                </FormControl>
                <Button onClick={handlePost}w='100%' colorScheme='blue'>Create Post</Button>
            </VStack>
        </Flex>
    )
}

export default CreatePost