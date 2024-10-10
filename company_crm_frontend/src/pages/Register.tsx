import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { registerUser } from '../api/axios';
import RegisterForm from '../components/RegisterForm';
import { TRegisterForm } from '../types/forms';

const Register: React.FC = () => {
    const [registerStatus, setRegisterStatus] = useState<string | null>(null);
    const { login } = useAuth();

    const handleRegister = async ({ name, email, password, password_confirmation }: TRegisterForm) => {
        try {
            const response = await registerUser(name, email, password, password_confirmation);
            const token = response.data.token;
            login(token);

            setRegisterStatus('Registration successful! Redirecting to home page...');
        } catch (error) {
            setRegisterStatus('Registration failed');
        }
    };

    return (
        <div className="flex flex-col justify-center items-center flex-grow md:max-w-lg max-w-sm">
            <RegisterForm onSubmit={handleRegister} />
            {registerStatus && <div className="mt-4 p-4 text-white bg-green-500 rounded-lg">{registerStatus}</div>}
        </div>
    );
};

export default Register;
