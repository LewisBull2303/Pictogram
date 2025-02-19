import { Heading, VStack, Text, Flex, Button } from "@chakra-ui/react"; // Importing Chakra UI components
import { useEffect, useState } from "react"; // Importing React hooks for state and side-effects
import { get_posts } from "../api/endpoints"; // Importing the get_posts API function to fetch posts
import Post from "../components/posts"; // Importing the Post component to display individual posts

const Home = () => {
  const [posts, setPosts] = useState([]); // State to store the list of posts
  const [loading, setLoading] = useState(true); // State to track the loading state
  const [nextPage, setNextPage] = useState(1); // State to keep track of the next page of posts

  // Function to fetch posts from the API
  const fetchData = async () => {
    const data = await get_posts(nextPage); // Call API to get posts for the current page
    setPosts([...posts, ...data.results]); // Add new posts to the existing posts list
    setNextPage(data.next ? nextPage + 1 : null); // If there is a next page, increment the page number
  };

  // useEffect hook to fetch posts when the component mounts
  useEffect(() => {
    try {
      fetchData(); // Fetch posts when the component is mounted
    } catch {
      alert("error getting posts"); // Show an alert if there is an error while fetching
    } finally {
      setLoading(false); // Set loading state to false once the posts are fetched
    }
  }, []); // Empty dependency array means it runs once on component mount

  // Function to load more posts when the button is clicked
  const loadMorePosts = () => {
    if (nextPage) {
      fetchData(); // Fetch next set of posts if there is a next page
    }
  };

  return (
    <Flex w="100%" justifyContent="center" pt="50px"> {/* Center content with padding */}
      <VStack alignItems="start" gap="20px" pb="50px"> {/* Stack the items vertically with spacing */}
        <Heading>Posts</Heading> {/* Heading for the posts section */}
        
        {/* If loading, show a loading text, otherwise display posts */}
        {loading ? (
          <Text>Loading...</Text> // Show loading message if still loading
        ) : posts ? (
          posts.map((post) => { // Map over the posts array and render each Post component
            return (
              <Post
                key={post.id} // Unique key for each post
                id={post.id}
                username={post.username}
                post_image={post.post_image}
                formatted_date={post.formatted_date}
                liked={post.liked}
                like_count={post.likes_count}
              />
            );
          })
        ) : (
          <></> // If no posts are available, render nothing
        )}

        {/* Show 'Load More' button if there is a next page and not loading */}
        {nextPage && !loading && (
          <Button colorScheme="blue" onClick={loadMorePosts} w="100%">
            Load More
          </Button>
        )}
      </VStack>
    </Flex>
  );
};

export default Home;
