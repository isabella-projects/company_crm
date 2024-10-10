import { useState } from 'react';
import { loginUser } from '../api/axios';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../hooks/useAuth';
import { TLoginForm, TLoginStatus } from '../types/forms';

const Login: React.FC = () => {
    const [loginStatus, setLoginStatus] = useState<TLoginStatus | null>(null);
    const { login } = useAuth();

    const handleLogin = async ({ email, password }: TLoginForm) => {
        try {
            const response = await loginUser(email, password);
            const token = response.data.token;
            login(token);

            setLoginStatus({ message: 'Login successful! Redirecting...', isSuccess: true });
        } catch (error) {
            setLoginStatus({ message: 'Invalid credentials!', isSuccess: false });
        }
    };

    return (
        <div className="flex flex-col justify-center items-center flex-grow md:max-w-lg max-w-sm">
            {loginStatus && (
                <div
                    className={`mt-4 p-4 rounded-lg w-full rounded-b-none ${
                        loginStatus.isSuccess ? 'bg-green-500' : 'bg-red-500'
                    } text-white`}
                >
                    {loginStatus.message}
                </div>
            )}
            <LoginForm onSubmit={handleLogin} />
        </div>
    );
};

export default Login;
