import axios from "axios"; // Import axios for making HTTP requests
import { SERVER_URL } from "../constants/constants"; // Import the base server URL from constants

const BASE_URL = SERVER_URL; // Define the base URL for the API

// Create an axios instance with the base URL and credentials enabled (cookies)
const api = axios.create({
  baseURL: BASE_URL, // Set the base URL
  withCredentials: true, // Allow credentials (like cookies) to be sent with requests
});

// Interceptor for handling responses
api.interceptors.response.use(
  (response) => response, // Return the response if it's successful
  async (error) => {
    const original_request = error.config; // Get the original request that caused the error

    // Handle 401 Unauthorized errors (e.g., expired tokens)
    if (error.response?.status === 401 && !original_request._retry) {
      original_request._retry = true; // Mark the request as retried to prevent infinite loops

      try {
        await refresh_token(); // Try refreshing the token
        return api(original_request); // Retry the original request with the new token
      } catch (refreshError) {
        window.location.href = "/login"; // Redirect to login if token refresh fails
        return Promise.reject(refreshError); // Reject the error if refresh fails
      }
    }
    return Promise.reject(error); // Return the original error if it's not a 401
  }
);

// Fetch user profile data
export const get_user_profile_data = async (username) => {
  const response = await api.get(`/user_data/${username}/`); // Send GET request to fetch user data
  return response.data; // Return the profile data
};

// Function to refresh the JWT token
const refresh_token = async () => {
  const response = await api.post("/token/refresh/"); // Send a POST request to refresh the token
  return response.data; // Return the new token data
};

// Function to log in and get JWT token
export const login = async (username, password) => {
  const response = await api.post("/token/", { username, password }); // Send POST request with login credentials
  return response.data; // Return the login response (tokens)
};

// Function to register a new user
export const register = async (
  username,
  email,
  firstName,
  lastName,
  password
) => {
  const response = await api.post("/register/", { // Send POST request to register
    username: username,
    email: email,
    first_name: firstName,
    last_name: lastName,
    password: password,
  });
  return response.data; // Return the registration response
};

// Function to check authentication status
export const get_auth = async () => {
  const response = await api.get(`/authenticated/`); // Send GET request to check if user is authenticated
  return response.data; // Return the authentication status
};

// Function to toggle follow status for a user
export const toggleFollow = async (username) => {
  const response = await api.post("/toggle_follow/", { username: username }); // Send POST request to toggle follow
  return response.data; // Return the follow status
};

// Function to fetch a user's posts
export const get_user_posts = async (username) => {
  const response = await api.get(`/posts/${username}/`); // Send GET request to fetch posts by user
  return response.data; // Return the list of posts
};

// Function to toggle like status for a post
export const toggleLike = async (id) => {
  const response = await api.post("/toggleLike/", { id: id }); // Send POST request to toggle like on a post
  return response.data; // Return the like status
};

// Function to create a new post
export const create_post = async (post_image) => {
  const formData = new FormData(); // Create a FormData object to send image as multipart form
  formData.append("post_image", post_image); // Append the post image to the form data

  try {
    const response = await api.post("/create_post/", formData, { // Send POST request with the form data
      headers: {
        "Content-Type": "multipart/form-data", // Specify the content type as multipart
      },
    });

    return response.data; // Return the created post data
  } catch (error) {
    console.error("Error creating post:", error); // Log any error that occurs during post creation
    throw error; // Throw the error to be handled by the caller
  }
};

// Function to fetch posts (with pagination support)
export const get_posts = async (num) => {
  const response = await api.get(`/get_posts/?page=${num}`); // Send GET request with page number
  return response.data; // Return the paginated posts
};

// Function to search for users by username
export const search_users = async (search) => {
  const response = await api.get(`/search/?query=${search}`); // Send GET request to search users
  return response.data; // Return the search results
};

// Function to log out a user and clear cookies
export const logout = async () => {
  const response = await api.post("/logout/"); // Send POST request to log out
  return response.data; // Return the logout response
};

// Function to update user details
export const update_user = async (values) => {
  const response = await api.patch("/update_user/", values, { // Send PATCH request to update user data
    headers: { "Content-Type": "multipart/form-data" }, // Set the content type to multipart
  });
  return response.data; // Return the updated user data
};
