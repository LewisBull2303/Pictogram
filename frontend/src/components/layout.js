import { Box, VStack } from '@chakra-ui/react'

const Layout = ({children}) => {
    return (
        <VStack w='100vw' minH='100vh' bg='#FCFCFC'>
            <Box w='100vw'>
                {children}
            </Box>
        </VStack>
    )
}

export default Layout