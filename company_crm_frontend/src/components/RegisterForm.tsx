import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { TRegisterForm } from '../types/forms';

interface RegisterFormProps {
    onSubmit: (data: TRegisterForm) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // It has to password_confirmation in order for Laravel to understand properly..
        // It's called 'naming convention' :)
        onSubmit({ name, email, password, password_confirmation: passwordConfirmation });
    };

    return (
        <div className="w-full">
            <div className="w-full p-10 mb-0 space-y-4 border border-1 border-slate-300 rounded-lg">
                <h1 className="mb-5 text-4xl text-left text-gray-800 sm:text-center">Sign Up Now</h1>
                <form className="pb-1 space-y-4" onSubmit={handleSubmit}>
                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">Name</span>
                        <input
                            className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            type="text"
                            placeholder="Your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>

                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
                        <input
                            className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            type="email"
                            placeholder="Ex. james@bond.com"
                            inputMode="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>

                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">Create a password</span>
                        <input
                            className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>

                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">Confirm password</span>
                        <input
                            className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            type="password"
                            placeholder="••••••••"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            required
                        />
                    </label>

                    <div className="flex flex-col items-start justify-between sm:items-center sm:flex-row">
                        <button
                            type="submit"
                            className="w-full mt-5 sm:w-auto px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>

            <p className="my-2 text-xs font-medium text-center text-gray-700 sm:my-5">
                Already have an account?{' '}
                <Link to="/login" className="text-purple-700 hover:text-purple-900">
                    Sign in
                </Link>
            </p>
        </div>
    );
};

export default RegisterForm;
