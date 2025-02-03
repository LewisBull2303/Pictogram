import { Flex, HStack, VStack, Heading, Input, Button } from "@chakra-ui/react"

const Search = () => {
    return (
        <Flex w='100%' justifyContent='center' pt='50px'>
            <VStack w='95%' maxWidth='500px' gap='20px'>
                <Heading>Search for Other Users!</Heading>
                <HStack w='100%' gap='0'>
                    <Input/>
                    <Button>Search</Button>
                </HStack>
                <VStack w='100%'>
                    
                </VStack>
            </VStack>
        </Flex>
    )
}

export default Search