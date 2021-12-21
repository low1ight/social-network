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
}

export const profileAPI = {
    getProfile: (userId) => instance.get(`profile/${userId}`).then(response => response.data),
    getProfileStatus: (userId) => instance.get(`profile/status/${userId}`).then(response => response.data ? response.data : ''),
    setProfileStatus: (status) => instance.put('profile/status',{status}).then(response => response.data)

}
export const followAPI = {
    followUser: (userId) => instance.post(`follow/${userId}`).then(response => response.data),
    unfollowUser: (userId) => instance.delete(`follow/${userId}`).then(response => response.data),
    checkFollowStatus: (userId) => instance.get(`follow/${userId}`).then(response => response.data)
}

export const authAPI = {
    authMe: () => instance.get('auth/me').then(response => response.data),
    logOut: () => instance.delete('/auth/login').then(response => response.data),
    login: (email,password,rememberMe = false) => instance.post('/auth/login',{email,password,rememberMe}).then(response => response.data)
}