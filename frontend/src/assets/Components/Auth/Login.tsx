import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axiosInstance from '../axiosInstance';
import {useUser} from '../userContext';


 interface ILogin{
    email:string;
    password:string
 }

const Login: React.FC = () => {
    
    const [error, setError] = useState<string>("");
    const[login,setLogin]=useState<ILogin>({email:'',password:''})


   const navigate = useNavigate();
   const { setUser } = useUser();

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   
    
        setLogin({
           
            
            ...login,
            [e.target.name]: e.target.value
        });
    };
   

    const handleLogin = async (e:React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault()
         try {
            const response = await axiosInstance.post('/users/login', login);
            
            if (response.status === 200) {
                console.log("respose",response.data)

                const accessToken=response.data.accessToken
                const refreshToken=response.data.refreshToken
                const userData={
                    name:response.data.data.name,
                    email:response.data.data.email

                }
                localStorage.setItem('accessToken', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
               console.log(userData);
             
                setUser(userData);
                navigate('/');
              
            }
            console.log("respose not  get")
        } catch (error) {
            setError('Invalid credentials. Please try again.');
            console.error('There was an error logging in!', error);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 to-white">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input 
                             name='email'
                            value={login.email}
                            type="email" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            placeholder="Enter your email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
                        <input 
                            type="password" 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                            placeholder="Enter your password"
                            name='password'
                            value={login.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button 
                            type="submit" 
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Login
                        </button>
                        {error && <p className=' text-red-500'>{error}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
