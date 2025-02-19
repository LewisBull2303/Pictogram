import {
    Flex,
    HStack,
    VStack,
    Heading,
    Input,
    Button,
    Box,
    Image,
    Text,
  } from "@chakra-ui/react"; // Import Chakra UI components for styling and layout
  import { useState } from "react"; // Import useState hook to manage state in the component
  import { search_users } from "../api/endpoints"; // Import API function to search for users
  import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation to user profiles
  
  const Search = () => {
    // Set up state variables to store search query and search results
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
  
    // Function to handle search action
    const handleSearch = async () => {
      const users = await search_users(search); // Call the search API with the search query
      setUsers(users); // Update state with the fetched users
    };
  
    return (
      <Flex w="100%" justifyContent="center" pt="50px">
        <VStack w="95%" maxWidth="500px" gap="20px">
          {/* Heading for the page */}
          <Heading>Search for Other Users!</Heading>
  
          {/* Search input field and button */}
          <HStack w="100%" gap="0">
            <Input onChange={(e) => setSearch(e.target.value)} bg="white" />
            <Button onClick={handleSearch} colorScheme="blue">
              Search
            </Button>
          </HStack>
  
          {/* Display list of user profiles */}
          <VStack w="100%">
            {users.map((user) => {
              return (
                <UserProfile
                  key={user.username} // Ensure unique key for each user
                  username={user.username}
                  profile_image={user.profile_image}
                  first_name={user.first_name}
                  last_name={user.last_name}
                />
              );
            })}
          </VStack>
        </VStack>
      </Flex>
    );
  };
  
  const UserProfile = ({ username, profile_image, first_name, last_name }) => {
    const nav = useNavigate(); // Use useNavigate for navigation to a user's profile
  
    // Function to handle navigation when a user profile is clicked
    const handleNav = () => {
      nav(`/${username}`); // Navigate to the user's profile page using their username
    };
  
    return (
      <Flex
        onClick={handleNav} // Trigger navigation on click
        w="100%"
        h="100px"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="8px"
        bg="white"
        justifyContent="center"
        alignItems="center"
      >
        {/* Display user profile in a row with an avatar and name */}
        <HStack w="90%" gap="20px" alignItems="center">
          {/* Profile Image */}
          <Box
            boxSize="70px"
            borderRadius="full"
            overflow="hidden"
            bg="white"
            border="1px solid"
          >
            <Image src={profile_image} boxSize="100%" objectFit="cover" />
          </Box>
  
          {/* User details */}
          <VStack alignItems="start" gap="3px">
            <Text fontWeight="medium">
              {first_name} {last_name}
            </Text>
            <Text color="gray.600" fontSize="15px">
              @{username} {/* Display username with "@" symbol */}
            </Text>
          </VStack>
        </HStack>
      </Flex>
    );
  };
  
  export default Search;
  