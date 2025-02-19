import { Box, VStack } from "@chakra-ui/react"; // Importing Box and VStack components from Chakra UI

import NavBar from "./navbar"; // Importing the NavBar component

// Layout component that wraps the children components passed to it
const Layout = ({ children }) => {
  return (
    <VStack w="100vw" minH="100vh" bg="#FCFCFC"> {/* VStack for vertical stacking, full width and height, background color */}
      <NavBar /> {/* Rendering the NavBar component */}
      <Box w="100vw">{children}</Box> {/* Rendering the children components passed to Layout inside a Box with full width */}
    </VStack>
  );
};

export default Layout; // Exporting the Layout component for use in other parts of the app
