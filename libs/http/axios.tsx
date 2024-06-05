//axios instance

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.github.com/graphql',
    headers: {},
});

export default axiosInstance;
