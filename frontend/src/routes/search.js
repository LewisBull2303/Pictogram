import { Flex, HStack, VStack, Heading, Input, Button } from "@chakra-ui/react"

const Search = () => {
    return 
    (
        <Flex>
            <VStack>
                <Heading>Seach for Other Users!</Heading>
                <HStack>
                    <Input/>
                    <Button>Search</Button>
                </HStack>
                <VStack>
                    
                </VStack>
            </VStack>
        </Flex>
    )
}

export default Search