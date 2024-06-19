import axios from 'axios';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './CustomCheckbox.css';

const Login = () => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const{name, value} = e.target;
        setUserData({
            ...userData,
            [name]: value,
        })
    }

    const submitHandler = async(e) => {
        e.preventDefault();
        const newErrors = {};

        for(const fieldName in userData){
            if(userData[fieldName] == ""){
                newErrors[fieldName] = `${fieldName} is required`;
            }
        }

        setErrors(newErrors);

        if(Object.keys(newErrors).length === 0 ){
            const apiCreateUser = 'http://localhost:8080/register-user'
            axios
            .post(apiCreateUser, userData)
            .then(() => {
                window.location.reload();
            })
            .catch((error) => console.log(error))
            navigate("/");
        }
    }
    return (
        <section>
            <form className='space-y-4 w-full' onSubmit={submitHandler}>
                <div>
                    <input type="text" 
                    name='firstName'
                    onChange={inputHandler}
                    className='w-full border border-neutral-400 p-3 outline-none placeholder:text-neutral-500 font-medium rounded-sm'
                    placeholder='First Name*'/>
                </div>

                <div>
                    <input type="text"
                    name='lastName'
                    onChange={inputHandler}
                    className='w-full border border-neutral-400 p-3 outline-none placeholder:text-neutral-500 font-medium rounded-sm'
                    placeholder='Last Name*' />
                </div>

                <div>
                    <input type="email" 
                    name="email"
                    onChange={inputHandler}
                    className='w-full border border-neutral-400 p-3 outline-none placeholder:text-neutral-500 font-medium rounded-sm'
                    placeholder='Email*'/>
                </div>

                <div className='flex border  border-neutral-400 p-3 rounded-sm'>
                    <input 
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={inputHandler}
                    className='w-full  outline-none placeholder:text-neutral-500 font-medium'
                    placeholder='Create a Password*'/>
                    <button onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                            <FaEye className='opacity-75' size={20} />
                        ) : (
                            <FaEyeSlash className='opacity-75' size={20} />
                        )}
                    </button>
                </div>
                <div className=' flex items-start py-4'>
                    <input type="checkbox" 
                    name="terms"
                    className='mr-2 mt-1 custom-checkbox' />
                    <label htmlFor="ruleAndTerms" className='text-sm text-gray-600 tracking-tight font-medium'>I would like to receive updates on the latest products and promotions via email or other channels. See   
                    <a href="" className='text-black underline pl-1'>Privacy Policy</a>  , which includes our 
                    <a href="" className='text-black underline pl-1'>Notice of Financial Incentive</a> and the 
                    <a href="" className='text-black underline pl-1'>Terms and Conditions</a> , for more information</label>
                </div>

                <button type='submit'
                className='bg-black hover:bg-gray-800 rounded-sm text-white font-medium w-full py-4'>
                    Create Account
                </button>
            </form>
        </section>
    )
}

export default Login