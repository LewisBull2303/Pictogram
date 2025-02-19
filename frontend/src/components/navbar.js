import { Flex, HStack, Text } from "@chakra-ui/react"; // Importing Flex, HStack, and Text components from Chakra UI
import { useNavigate } from "react-router-dom"; // Importing the useNavigate hook from React Router

// Importing icon components from React Icons
import { CgProfile } from "react-icons/cg"; 
import { IoAddCircleOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { FiUserPlus } from "react-icons/fi";
import { MdOutlineLogin } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

// NavBar component to render the navigation bar with various icons and links
const NavBar = () => {
  const username = JSON.parse(localStorage.getItem("userData"))?.username; // Get the username from localStorage
  const nav = useNavigate(); // Initialize the navigation function

  // Function to handle navigation when an icon is clicked
  const handleNavigation = (route) => {
    nav(`/${route}`); // Navigates to the specified route
  };

  return (
    <Flex
      w="100vw"
      h="90px"
      bg="blue.600"
      justifyContent="center"
      alignItems="center"
    >
      <HStack w="90%" justifyContent="space-between" color="white">
        <Text fontSize="24px" fontWeight="bold">
          Pictogram
        </Text>
        <HStack gap="20px">
          {/* Each Text element represents a clickable icon for navigation */}
          <Text onClick={() => handleNavigation("search")}>
            <IoSearch size="22px" />
          </Text>
          <Text onClick={() => handleNavigation(`${username}`)}>
            <CgProfile size="22px" />
          </Text>
          <Text onClick={() => handleNavigation("create/post")}>
            <IoAddCircleOutline size="24px" />
          </Text>
          <Text onClick={() => handleNavigation("")}>
            <IoHomeOutline size="22px" />
          </Text>
          <Text onClick={() => handleNavigation("register")}>
            <FiUserPlus size="20px" />
          </Text>
          <Text onClick={() => handleNavigation("login")}>
            <MdOutlineLogin size="20px" />
          </Text>
          <Text onClick={() => handleNavigation("settings")}>
            <IoSettingsOutline size="20px" />
          </Text>
        </HStack>
      </HStack>
    </Flex>
  );
};

export default NavBar; // Exporting NavBar component for use in other parts of the app
