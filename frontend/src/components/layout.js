import { Box, VStack } from "@chakra-ui/react";

import NavBar from "./navbar";

const Layout = ({ children }) => {
  return (
    <VStack w="100vw" minH="100vh" bg="#FCFCFC">
      <NavBar />
      <Box w="100vw">{children}</Box>
    </VStack>
  );
};

export default Layout;
