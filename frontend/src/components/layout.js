import { Flex } from '@chakra-ui/react'

const Layout = ({children}) => {
    return (
        <Flex w='100vw' minH='100vh' bg='red.400'>
            {children}
        </Flex>
    )
}

export default Layout