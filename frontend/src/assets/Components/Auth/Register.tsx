import axios from "axios";

import React from "react";
import { useState } from "react";


interface IRgister{
    username:string;
    email:string;
    password:string
 }


const Register: React.FC = () => {
    const [register, setRegister] = useState<IRgister>({username:'',email:'',password:''});


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("chenge");
    
        setRegister({
           
            
            ...register,
            [e.target.name]: e.target.value
        });
    };
   

    const handleRegister = (e:React.FormEvent) =>{
     e.preventDefault()
     axios.post('http://localhost:3000/users/Register', register)
     .then(response => {
         console.log('Response from backend:', response.data);
        
     })
     .catch(error => {
         console.error('There was an error during login!', error);
        
     });
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 to-white">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
                        <input 
                            type="text" 
                             name="username"
                            value={register.username}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            placeholder="Enter your username"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input 
                             name="email"
                            value={register.email}
                            type="email" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            placeholder="Enter your email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                        <input 
                        value={register.password}
                        name="password"
                            type="password" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                            placeholder="Enter your password"
                            onChange={handleChange}
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
