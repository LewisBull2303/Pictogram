// Import necessary components and hooks from Chakra UI and other libraries
import {
    Text,
    VStack,
    Flex,
    Box,
    Heading,
    HStack,
    Image,
    Button,
    Spacer,
  } from "@chakra-ui/react"; // Chakra UI components for layout and styling
  import { useEffect, useState } from "react"; // React hooks for state management and lifecycle methods
  import {
    get_user_posts,
    get_user_profile_data,
    toggleFollow,
  } from "../api/endpoints"; // API functions for getting user data and toggling follow status
  import { useNavigate } from "react-router-dom"; // Hook for navigating between pages
  
  import Post from "../components/posts"; // Import Post component to display user posts
  
  // UserProfile component that displays the user's profile and posts
  const UserProfile = () => {
    // Function to extract username from the URL path
    const get_username_from_url = () => {
      const split_url = window.location.pathname.split("/"); // Split URL by "/"
      return split_url[split_url.length - 1]; // Return the last part (username)
    };
  
    // Set initial state for the username from the URL
    const [username, setUsername] = useState(get_username_from_url());
  
    // Update username when the component is mounted or URL changes
    useEffect(() => {
      setUsername(get_username_from_url());
    }, []);
  
    return (
      <Flex w="100%" justifyContent="center">
        {/* Profile and posts section */}
        <VStack w="75%">
          <Box w="100%" mt="40px">
            <UserDetails username={username} /> {/* Display user details */}
          </Box>
          <Box w="100%" mt="50px">
            <UserPosts username={username} /> {/* Display user posts */}
          </Box>
        </VStack>
      </Flex>
    );
  };
  
  // UserDetails component to display user info like bio, followers, etc.
  const UserDetails = ({ username }) => {
    const nav = useNavigate(); // Initialize navigation hook
  
    // Navigate to settings page
    const handleNavigationSettings = () => {
      nav("/settings");
    };
  
    // State variables for user profile data and loading state
    const [loading, setLoading] = useState(true);
    const [bio, setBio] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [followerCount, setFollowerCount] = useState(0);
    const [followingCount, setFollowingCount] = useState(0);
  
    const [isMyProfile, setIsMyProfile] = useState(false); // Check if it's the user's profile
    const [following, setFollowing] = useState(false); // Track if the user is following
  
    const profile_image_url = profileImage; // Store profile image URL
  
    // Toggle follow status (follow/unfollow)
    const handleToggleFollow = async () => {
      const data = await toggleFollow(username); // Toggle follow status via API
      if (data.now_following) {
        setFollowerCount(followerCount + 1); // Increment follower count if following
        setFollowing(true);
      } else {
        setFollowerCount(followerCount - 1); // Decrement follower count if unfollowing
        setFollowing(false);
      }
    };
  
    // Fetch user profile data from API
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await get_user_profile_data(username); // Fetch profile data
          setBio(data.bio); // Set bio
          setProfileImage(data.profile_image); // Set profile image
          setFollowerCount(data.follower_count); // Set follower count
          setFollowingCount(data.following_count); // Set following count
  
          setIsMyProfile(data.is_my_profile); // Check if it's the user's profile
          setFollowing(data.following); // Set follow status
        } catch {
          console.log("error"); // Log any errors
        } finally {
          setLoading(false); // Set loading to false once data is fetched
        }
      };
      fetchData();
    }, []); // Empty dependency array to run only once
  
    return (
      <VStack w="100%" alignItems="start" gap="40px">
        {/* Display username */}
        <Heading>@{username}</Heading>
  
        <HStack gap="20px">
          {/* Profile image */}
          <Box
            boxSize="150px"
            border="2px solid"
            borderColor="grey.700"
            bg="white"
            borderRadius="full"
            overflow="hidden"
          >
            <Image src={profile_image_url} boxSize="100%" objectFit="cover" /> {/* Profile image */}
          </Box>
  
          <VStack gap="20px">
            {/* Display follower and following counts */}
            <HStack gap="20px" fontSize="18px">
              <VStack>
                <Text>Followers</Text>
                <Text>{loading ? "-" : followerCount}</Text>
              </VStack>
              <VStack>
                <Text>Following</Text>
                <Text>{loading ? "-" : followingCount}</Text>
              </VStack>
            </HStack>
  
            {/* Show either 'Edit Profile' or 'Follow/Unfollow' button */}
            {loading ? (
              <Spacer />
            ) : isMyProfile ? (
              <Button w="100%" onClick={handleNavigationSettings}>
                Edit Profile
              </Button>
            ) : (
              <Button onClick={handleToggleFollow} colorScheme="blue" w="100%">
                {following ? "Unfollow" : "Follow"}
              </Button>
            )}
          </VStack>
        </HStack>
  
        {/* Display bio */}
        <Text fontSize="18px">{loading ? "-" : bio}</Text>
      </VStack>
    );
  };
  
  // UserPosts component to display user's posts
  const UserPosts = ({ username }) => {
    const [posts, setPosts] = useState([]); // State for storing posts
    const [loading, setLoading] = useState(true); // Loading state
  
    // Fetch user posts from the API
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const postsData = await get_user_posts(username); // Fetch posts data
          setPosts(postsData); // Set posts data
        } catch {
          alert("Error getting posts"); // Show error message if fetching posts fails
        } finally {
          setLoading(false); // Set loading to false once posts are fetched
        }
      };
  
      fetchPosts(); // Fetch posts when component mounts
    }, []); // Empty dependency array to run only once
  
    return (
      <Flex w="100%" wrap="wrap" gap="30px" pb="50px">
        {/* Display loading text while posts are being fetched */}
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          // Display each post using the Post component
          posts.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                username={post.username}
                post_image={post.post_image}
                formatted_date={post.formatted_date}
                liked={post.liked}
                like_count={post.likes_count}
              />
            );
          })
        )}
      </Flex>
    );
  };
  
  // Export UserProfile as default
  export default UserProfile;
  