import React, { useContext, useState } from 'react';
import loginIcons from '../assest/signin.gif';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../Context';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const { fetchUserDetails, fetchUserAddToCart } = useContext(Context);

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // ✅ Block <script> or any HTML tag
    const containsHTML = (value) => /<\/?[a-z][\s\S]*>/i.test(value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ✅ Validation to block <script> or HTML
        if (containsHTML(data.email) || containsHTML(data.password)) {
            toast.error("Invalid characters detected in input fields");
            return;
        }

        const dataResponse = await fetch(SummaryApi.signIn.url, {
            method: SummaryApi.signIn.method,
            credentials: 'include',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const dataApi = await dataResponse.json();

        if (dataApi.success) {
            toast.success(dataApi.message);
            navigate('/');
            fetchUserDetails();
            fetchUserAddToCart();
        }

        if (dataApi.error) {
            toast.error(dataApi.message);
        }
    };

    return (
        <section id='login'>
            <div className='mx-auto container p-4'>
                <div className='bg-white p-5 w-full max-w-sm mx-auto rounded shadow-md'>
                    <div className='w-20 h-20 mx-auto'>
                        <img src={loginIcons} alt='login icons' />
                    </div>

                    <form className='pt-6 flex flex-col gap-4' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label>Email :</label>
                            <div className='bg-slate-100 p-2 relative flex items-center'>
                                <FaEnvelope className='absolute left-3 text-gray-400' />
                                <input
                                    type='email'
                                    placeholder='Enter email'
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    className='w-full h-full pl-10 pr-2 py-2 outline-none bg-transparent focus:ring-2 focus:ring-red-300 rounded'
                                />
                            </div>
                        </div>

                        <div className='grid'>
                            <label>Password :</label>
                            <div className='bg-slate-100 p-2 relative flex items-center'>
                                <FaLock className='absolute left-3 text-gray-400' />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Enter password'
                                    value={data.password}
                                    name='password'
                                    onChange={handleOnChange}
                                    className='w-full h-full pl-10 pr-10 py-2 outline-none bg-transparent focus:ring-2 focus:ring-red-300 rounded'
                                />
                                <div
                                    className='absolute right-3 cursor-pointer text-xl text-gray-600'
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600 mt-1 text-sm'>
                                Forgot password ?
                            </Link>
                        </div>

                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>
                            Login
                        </button>
                    </form>

                    <p className='my-5 text-center text-sm'>
                        Don't have account?{" "}
                        <Link to={"/sign-up"} className='text-red-600 hover:text-red-700 hover:underline'>Sign up</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;
