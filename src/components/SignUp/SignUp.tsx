"use client"
import React, { useContext, useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';
import { ShopeProviderContext } from '@/context/ShopeContext';
import Swale from '../Swal/Swal';

const SignUp = () => {

    const router = useRouter();

    let [state, setState] = useState("login");
    let [stateToke, setStateToke] = useState(true);
    let [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    let { setCookie } = useContext(ShopeProviderContext)

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    let login = async (e: any) => {
        e.preventDefault();
        try {
            let data = await axios.post(`${BASE_URL}/login`, formData)
            if (data.data.token) {
                // loading
                setStateToke(false);

                setCookie("token", data.data.token);

                if (typeof window !== 'undefined') {
                    localStorage.setItem("role", data.data.role);
                }

                window.location.replace("/")
            } else {
                Swale(`${data.data.err} ❌`)
            };
        } catch (err) {
            router.push("/error");
        };
    };

    let SignUpUser = async (e: any) => {
        e.preventDefault();

        let emailRegular = /^\S+@\S+\.com/ig;
        const passwordRegular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/ig;

        try {
            if (formData.name.length >= 3 && emailRegular.test(formData.email) && passwordRegular.test(formData.password)) {

                let data = await axios.post(`${BASE_URL}/signup`, formData)
                if (data.data.token) {
                    // loading
                    setStateToke(false);

                    setCookie("token", data.data.token);
                    localStorage.setItem("role", data.data.role);
                    window.location.replace("/")

                } else {
                    Swale("token not disponible ❌")
                };
            } else {
                Swale("email and password aren't strong ❌")
            }
        } catch (err) {
            router.push("/error");
        };
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white text-center p-4 rounded-lg shadow-lg w-full max-w-md transform transition-transform duration-500 hover:scale-105 sm:p-8 mx-5 sm:text-left">
                {
                    state === "Sign Up"
                        ? <h4 className="text-xs sm:text-3xl font-bold mb-6 text-center text-gray-900">Sign Up</h4>
                        : <h4 className="text-xs sm:text-3xl font-bold mb-6 text-center text-gray-900">Login</h4>
                }
                <form>
                    {
                        state === "Sign Up"
                            ?
                            <div className="mb-4">
                                <label htmlFor="name" className="block mb-2 text-xs  font-medium text-gray-700 sm:text-sm">
                                    Username
                                </label>
                                <input
                                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                    type="email"
                                    id="name"
                                    name="name"
                                    placeholder="Username"
                                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                                />
                            </div>
                            : <></>
                    }
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-xs  font-medium text-gray-700 sm:text-sm">
                            Email Address
                        </label>
                        <input
                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 text-xs  font-medium text-gray-700 sm:text-sm">
                            Password
                        </label>
                        <input
                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                        />
                    </div>
                    <div className="mb-6">
                        <button
                            onClick={(e: any) => state === "Sign Up" ? SignUpUser(e) : login(e)}
                            type="submit"
                            className="w-full bg-blue-700 text-white py-3 px-4 rounded-lg hover:bg-blue-800 transition-colors duration-300"
                        >
                            {stateToke ? "Continue" : "Loading..."}
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    {
                        state === "Sign Up"
                            ? <p className="text-xs sm:text-sm text-center mt-4">Already have an account? <a onClick={() => setState("login")} href="#" className="text-blue-700 hover:underline">Login here</a></p>
                            : <p className="text-xs sm:text-sm text-center mt-4">create new account? <a onClick={() => setState("Sign Up")} href="#" className="text-blue-700 hover:underline">Create here</a></p>
                    }
                </div>
            </div>
        </div>
    )
}

export default SignUp
