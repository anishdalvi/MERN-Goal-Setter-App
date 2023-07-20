import axios from 'axios'
import { toast } from 'react-toastify'

const API_URL = '/api/users/'


// Register User

const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data

}

// login User

const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
    //console.log(response);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data

}

// Logout User

const logout = () => {
    localStorage.removeItem('user')
    toast.success("Successfully Logged Out" ,{autoClose:1000})
}



const authService = {
    register, logout, login
}

export default authService