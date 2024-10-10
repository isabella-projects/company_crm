import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Home: React.FC = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="p-6 text-center space-y-10">
            <h1 className="md:text-6xl text-3xl font-bold">Welcome to Company Management App</h1>
            <p className="md:text-2xl text-lg">
                This is a platform where you can manage companies, employees, and tasks.
            </p>
            {!isAuthenticated ? (
                <p className="md:text-xl text-sm">
                    Please{' '}
                    <Link to="/login" className="text-blue-600 font-bold">
                        login
                    </Link>{' '}
                    or{' '}
                    <Link to="/register" className="text-blue-600 font-bold">
                        register
                    </Link>{' '}
                    to get started.
                </p>
            ) : (
                <>
                    <button
                        onClick={() => navigate('/add-company')}
                        className="bg-green-500 text-white font-semibold p-3 text-lg rounded hover:bg-green-600"
                    >
                        Add Your Company
                    </button>
                </>
            )}
        </div>
    );
};

export default Home;
