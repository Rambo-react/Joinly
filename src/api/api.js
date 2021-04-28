import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6fb28e57-56fc-4c74-a4a4-e20e0a14b74e"
    }
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data;
                })
        )
    },

    followUser(userId) {
        return (
            instance.post(`follow/` + userId, {})
                .then(response => {
                    return response.data;
                })
        )
    },

    unfollowUser(userId) {
        return (
            instance.delete(`follow/` + userId)
                .then(response => {
                    return response.data;
                })
        )
    }
}

//в первом response много лишних данных, берем только data, там внутри наши свойства fullName , photos и т.д.
export const profileAPI = {

    getProfile(userId) {

        return (
            instance.get(`profile/` + userId)
                .then(response => {
                    return response.data;

                })
        )
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    }
}

export const authAPI = {
    getAuthMe() {
        return (
            instance.get(`auth/me`)
                .then(response => {
                    return response.data;
                    debugger
                })
                
        )
        
    },
    login(email, password, rememberMe = false) {
        return (
            instance.post(`auth/login`, { email, password, rememberMe })
        )
    },
    logout() {
        return (
            instance.delete(`auth/login`)
        )
    },



}




