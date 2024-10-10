import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/crm_logo.svg';
import { useAuth } from '../hooks/useAuth';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/">
                    <img src={logo} alt="Company Management CRM Logo" className="h-8" />
                </Link>

                <div className="hidden md:flex space-x-4 text-white">
                    {!isAuthenticated ? (
                        <>
                            <Link to="/login" className="hover:text-gray-200">
                                Log In
                            </Link>
                            <Link to="/register" className="hover:text-gray-200">
                                Register
                            </Link>
                        </>
                    ) : (
                        <button onClick={logout} className="hover:text-gray-200">
                            Log Out
                        </button>
                    )}
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="p-4 space-y-2 text-white flex flex-col">
                        <Link to="/" className="hover:text-gray-200 w-full" onClick={toggleMenu}>
                            Home
                        </Link>
                        {!isAuthenticated ? (
                            <>
                                <Link to="/login" className="hover:text-gray-200 w-full" onClick={toggleMenu}>
                                    Log In
                                </Link>
                                <Link to="/register" className="hover:text-gray-200 w-full" onClick={toggleMenu}>
                                    Register
                                </Link>
                            </>
                        ) : (
                            <button
                                onClick={() => {
                                    logout();
                                    toggleMenu();
                                }}
                                className="hover:text-gray-200 w-full"
                            >
                                Log Out
                            </button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
