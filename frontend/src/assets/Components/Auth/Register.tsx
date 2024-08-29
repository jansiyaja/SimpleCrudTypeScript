import React from "react";

const Register: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 to-white">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                        <input 
                            type="text" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input 
                            type="email" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                        <input 
                            type="password" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button 
                            type="submit" 
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
