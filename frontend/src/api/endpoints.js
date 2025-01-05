import axios from 'axios'

const BASE_URL = 'https://8000-lewisbull2303-instagram-spjqg3hzjk.app.codeanywhere.com/api/'

const api =axios.create ({
    baseURL:BASE_URL,
    withCredentials:true,
})

export const get_user_profile_data = async (username) => {
    const response = await api.get(`user_data/${username}/`);
    return response.data;
}