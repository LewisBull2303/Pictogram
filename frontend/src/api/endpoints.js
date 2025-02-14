import axios from 'axios'
import { SERVER_URL } from '../constants/constants'

const BASE_URL = SERVER_URL

const api = axios.create({
    baseURL:BASE_URL,
    withCredentials:true
})

api.interceptors.response.use(
    (response) => response,
    async error => {
        const original_request = error.config

        if (error.response?.status === 401 && !original_request._retry) {
            original_request._retry = true;

            try {
                await refresh_token();
                return api(original_request);
            } catch (refreshError) {
                window.location.href = '/login'
                return Promise.reject(refreshError)
            }
        }
        return Promise.reject(error)
    }
)

export const get_user_profile_data = async (username) => {
    const response = await api.get(`api/user_data/${username}/`);
    return response.data
}

const refresh_token = async () => {
    const response = await api.post('api/token/refresh/');
    return response.data
}

export const login = async (username, password) => {
    const response = await api.post('api/token/', {username, password});
    return response.data
}

export const register = async (username, email, firstName, lastName, password) => {
    const response = await api.post('api/register/', {username:username, email:email, first_name:firstName, last_name:lastName, password:password});
    return response.data
}

export const get_auth = async () => {
    const response = await api.get(`api/authenticated/`);
    return response.data
}

export const toggleFollow = async (username) => {
    const response = await api.post('api/toggle_follow/', {username:username});
    return response.data
}

export const get_user_posts = async (username) => {
    const response = await api.get(`api/posts/${username}/`);
    return response.data
} 

export const toggleLike = async (id) => {
    const response = await api.post('api/toggleLike/', {id:id})
    return response.data
}

export const create_post = async (post_image) => {
    const formData = new FormData();
    formData.append("post_image", post_image); 

    try {
        const response = await api.post('api/create_post/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', 
            }
        });

        return response.data;
    } catch (error) {
        console.error("Error creating post:", error);
        throw error;
    }
}

export const get_posts = async (num) => {
    const response = await api.get(`api/get_posts/?page=${num}`)
    return response.data
}

export const search_users = async (search) => {
    const response = await api.get(`api/search/?query=${search}`)
    return response.data
}

export const logout = async () => {
    const response = await api.post('api/logout/')
    return response.data
}

export const update_user = async (values) => {
    const response = await api.patch('api/update_user/', values, { headers: {'Content-Type': 'multipart/form-data'}})
    return response.data
}
