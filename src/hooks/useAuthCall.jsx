import axios from 'axios';
import { fetchFail, fetchStart, loginSuccess, logoutSuccess } from '../features/authSlice';
import { useDispatch } from 'react-redux';
const BASE_URL = 'https://clarusway.pythonanywhere.com/'





const useAuthCall = () => {
 
 const dispatch = useDispatch();

const login = async(userInfo) => {
    try {
        dispatch(fetchStart())
        const {data} = await axios.post(
        `${BASE_URL}account/auth/login/`, 
        userInfo
        )
        dispatch(loginSuccess(data))
    } catch (error) {
        console.log(error);
        dispatch(fetchFail())
    }
}
const logout = async() => {
    try {
        dispatch(fetchStart())
        await axios.post(
        `${BASE_URL}account/auth/logout/`, 
        )
        dispatch(logoutSuccess())
    } catch (error) {
        console.log(error);
        dispatch(fetchFail())
    }
}
 return{login,logout}
}

export default useAuthCall

