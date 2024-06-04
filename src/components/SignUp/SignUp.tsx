"use client"
import React, { useContext, useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';
import { ShopeProviderContext } from '@/context/ShopeContext';
import Swal from 'sweetalert2';

const SignUp = () => {

    const router = useRouter();

    let [state, setState] = useState("login");
    let [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    let { cookies, setCookie, removeCookie } = useContext(ShopeProviderContext)

    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    let login = async (e: any) => {
        e.preventDefault();
        try {
            let data = await axios.post(`${BASE_URL}/login`, formData)
            if (data.data.token) {
                setCookie("token", data.data.token);
                window.location.replace("/")
            } else {
                alert(data.data.err)
            };
        } catch (err) {
            alert("try again the user not added")
        };
    };

    let SignUpUser = async (e: any) => {
        e.preventDefault();

        let emailRegular = /^\S+@\S+\.com/ig;
        const passwordRegular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/ig;

        try {
            if (emailRegular.test(formData.email) && passwordRegular.test(formData.password)) {

                let data = await axios.post(`${BASE_URL}/signup`, formData)
                if (data.data.token) {

                    setCookie("token", data.data.token);
                    window.location.replace("/")

                } else {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "token not disponible",
                        showConfirmButton: false,
                        timer: 1000
                    });
                };
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "email and password aren't strong",
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        } catch (err) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "try again the user not added",
                showConfirmButton: false,
                timer: 1000
            });
        };
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                {
                    state === "Sign Up"
                        ? <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                        : <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                }
                <form action="#">
                    {
                        state === "Sign Up"
                            ?
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700">Your Name</label>
                                <input
                                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                    name="name"
                                    type="text"
                                    id="name"
                                    className="w-full p-3 border rounded-lg mt-2"
                                    placeholder="Your Name"
                                />
                            </div>
                            : <></>
                    }
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email Address</label>
                        <input
                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                            name="email"
                            type="email"
                            id="email"
                            className="w-full p-3 border rounded-lg mt-2"
                            placeholder="Email Address" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                            name="password"
                            type="password"
                            id="password"
                            className="w-full p-3 border rounded-lg mt-2"
                            placeholder="Password" />
                    </div>
                    <button
                        onClick={(e: any) => state === "Sign Up" ? SignUpUser(e) : login(e)}
                        type="submit"
                        className="w-full bg-red-500 text-white p-3 rounded-lg font-bold hover:bg-red-600"
                    >
                        Continue
                    </button>
                </form>
                {
                    state === "Sign Up"
                        ? <p className="text-center mt-4">Already have an account? <a onClick={() => setState("login")} href="#" className="text-red-500 font-bold">Login here</a></p>
                        : <p className="text-center mt-4">create new account? <a onClick={() => setState("Sign Up")} href="#" className="text-red-500 font-bold">Create here</a></p>
                }
            </div>
        </div>
    )
}

export default SignUp
