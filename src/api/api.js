import * as axios from "axios";


let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0d5c46de-6823-4120-b92a-307b369b76b4'
    }
})

export const usersAPI = {
    getUsers: (page,count = 50) => instance.get(`users?page=${page}&count=${count}`).then(response => response.data),
    followUser: (userId) => instance.post(`follow/${userId}`).then(response => response.data),
    unfollowUser: (userId) => instance.delete(`follow/${userId}`).then(response => response.data)
}

export const profileAPI = {
    getProfile: (userId) => instance.get(`profile/${userId}`).then(response => response.data),
}