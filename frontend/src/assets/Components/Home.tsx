import React from "react";
import { useUser } from "./userContext";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const { user, setUser } = useUser(); 
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setUser(null);
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome to the Home Page!</h2>

                <div className="mb-6">
                    <p className="text-gray-600">Hello, We're glad to have you back.</p>
                    <p className="text-gray-600">Here's a quick overview of your account:</p>
                </div>
                {user ? (
                    <div>
                        <div className="mb-4 p-4 bg-gray-50 rounded-lg shadow-inner">
                            <p className="text-sm text-gray-600">Username: <span className="font-bold text-gray-800">{user.name}</span></p>
                            <p className="text-sm text-gray-600">Email: <span className="font-bold text-gray-800">{user.email}</span></p>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <button 
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                View Dashboard
                            </button>
                            <button 
                                onClick={handleLogout}
                                className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                LogOut
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-red-500">Please Login. You are not logged in.</p>
                )}
            </div>
        </div>
    );
};

export default Home;
