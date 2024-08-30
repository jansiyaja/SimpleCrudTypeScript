import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
});

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const refreshToken = localStorage.getItem('refreshToken');
            try {
                const response = await axios.post('http://localhost:3000/users/refresh-token', {
                    token: refreshToken,
                });

                if (response.status === 200) {
                    const newAccessToken = response.data.accessToken;
                    localStorage.setItem('accessToken', newAccessToken);

                    // Update the original request with the new token and retry
                    axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosInstance(originalRequest);
                }
            } catch (error) {
                console.error('Refresh token failed:', error);
                // Log the user out if the refresh token fails
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
