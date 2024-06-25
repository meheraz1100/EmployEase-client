import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://m-72-employ-ease-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;