import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/'

axios.interceptors.request.use(userData => {
    console.log(userData.data)
    return userData.data;
})

axios.interceptors.response.use(x => {
    console.log(x);
    return x;
})

// Signup user
const signup = async (userData) => {
    const response = await axios.post(API_URL + 'users', userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    console.log(response.data)
    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
}


const authService = {
    signup,
    logout,
    login,
}

export default authService