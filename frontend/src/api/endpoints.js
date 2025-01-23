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
    const response = await api.get(`/user_data/${username}/`);
    return response.data
}

const refresh_token = async () => {
    const response = await api.post('/token/refresh/');
    return response.data
}

export const login = async (username, password) => {
    const response = await api.post('/token/', {username, password});
    return response.data
}

export const register = async (username, email, firstName, lastName, password) => {
    const response = await api.post('/register/', {username:username, email:email, first_name:firstName, last_name:lastName, password:password});
    return response.data
}

export const get_auth = async () => {
    const response = await api.get(`/authenticated/`);
    return response.data
}

export const toggleFollow = async (username) => {
    const response = await api.post('/toggle_follow/', {username:username});
    return response.data
}

export const get_user_posts = async (username) => {
    const response = await api.get(`/posts/${username}/`);
    return response.data
} 

export const toggleLike = async (id) => {
    const response = await api.post('/toggleLike/', {id:id})
    return response.data
}