"use client"
import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';

const SignUp = () => {

    const router = useRouter();

    let [state, setState] = useState("login");
    let [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    let login = async (e: any) => {
        e.preventDefault();
        try {
            let data = await axios.post("http://localhost:4000/login", formData)
            console.log(data)
            if (data.data.token) {
                localStorage.setItem("token", data.data.token);
                router.push("/")
            } else {
                alert(data.data.err)
            };
        } catch (err) {
            alert("try again the user not added")
        };
    }
    let SignUpUser = async (e: any) => {
        e.preventDefault();
        try {
            let data = await axios.post("http://localhost:4000/signup", formData)
            if (data.data.token) {
                localStorage.setItem("token", data.data.token);
                router.push("/")
            } else {
                alert(data.data.err)
            };
        } catch (err) {
            alert("try again the user not added")
        };
    }

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