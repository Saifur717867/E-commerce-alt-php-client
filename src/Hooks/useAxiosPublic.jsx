import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://e-commerce-alt-php-server.vercel.app/',
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;