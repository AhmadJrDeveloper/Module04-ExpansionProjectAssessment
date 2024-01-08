import { useContext } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const useApi = () => {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const apiCall = async ({ url, method, data = null }) => {
        console.log("hereeee",data);
        console.log("method",method);
        try {
            const response = await axios.post('http://localhost:4000/auth/login',data) ;
            return response.data;
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    toast.error(error.response.data.message)
                    setUser(null); 
                    navigate('/')

                } else if (error.response.status === 403) {
                    toast.error("Forbidden Access")
                }
            }
            throw error;
        }
    };

    return { apiCall };
};

export default useApi;