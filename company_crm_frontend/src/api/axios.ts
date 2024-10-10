import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    withXSRFToken: true,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

const getCsrfToken = async () => {
    await axios.get('/sanctum/csrf-cookie');
};

export const loginUser = async (email: string, password: string) => {
    await getCsrfToken();
    const response = await api.post('/login', { email, password });
    return response;
};

export const registerUser = async (name: string, email: string, password: string, password_confirmation: string) => {
    await getCsrfToken();
    const response = await api.post('/register', {
        name,
        email,
        password,
        password_confirmation,
    });
    return response;
};

export const logoutUser = async () => {
    const token = localStorage.getItem('token');
    const response = await api.post(
        '/logout',
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
    return response;
};

export const createCompany = async (formData: FormData) => {
    await getCsrfToken();
    const token = localStorage.getItem('token');

    return api.post('/companies', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
    });
};
