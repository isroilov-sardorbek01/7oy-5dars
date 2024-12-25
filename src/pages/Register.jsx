import React, { useState } from "react";
import img from "../images/regImg.svg";
import imgsee from "../images/see.svg";
import imgnotSee from "../images/notsee.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [per, setPer] = useState(false);
    const navigate = useNavigate();

    function validate() {
        if (username === "") {
            toast.error("Username is not valid", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return false;
        }
        if (!email.includes("@")) {
            toast.error("Email is not valid", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return false;
        }
        if (password === "") {
            toast.error("Password is not valid!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return false;
        }
        if (rePassword === "") {
            toast.error("RePassword is not valid", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return false;
        }
        if (password !== rePassword) {
            toast.error("Password is not same!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return false;
        }
        return true;
    }
    function handleReg(e) {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) {
            setPer(false);
            return;
        }
        const data = {
            username,
            email,
            password,
        };
        axios
            .post("https://auth-rg69.onrender.com/api/auth/signup", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((respose) => {
                if (respose.status == 200) {
                    navigate("/login");
                    toast.success("You registered sucesfully , please LOGIN", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div>
            <div className="container flex items-center justify-around ">
                <div className="flex flex-col justify-center w-[400px]">
                    <h1 className="text-[40px] text-center mb-5">Register</h1>
                    <input
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        className="w-full p-2 mb-3 border-2 text-[18px] border-blue-400 rounded-md"
                        type="text"
                        placeholder="Enter the name"
                    />
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="w-full p-2 mb-3 border-2 text-[18px] border-blue-400 rounded-md"
                        type="text"
                        placeholder="Enter the email"
                    />
                    <div className="flex items-center p-2 mb-3 border-2 border-blue-400 rounded-md">
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            className="w-full text-[18px] border-none focus:outline-none"
                            type={per ? "text" : "password"}
                            placeholder="password"
                        />
                        <img
                            onClick={() => {
                                setPer(!per);
                            }}
                            src={per ? imgnotSee : imgsee}
                            width={25}
                            height={25}
                            alt=""
                        />
                    </div>
                    <input
                        value={rePassword}
                        onChange={(e) => {
                            setRePassword(e.target.value);
                        }}
                        className="w-full p-2 mb-3 border-2 text-[18px] border-blue-400 rounded-md"
                        type={per ? "text" : "password"}
                        placeholder="repassword"
                    />
                    <div className="flex justify-center">
                        <button
                            className="w-[150px] px-2 bg-blue-400 text-white rounded-md text-[30px] active:scale-95 transition-[2s] mb-3"
                            onClick={handleReg}
                        >
                            REGISTER
                        </button>
                    </div>
                    <Link to="/login" className="text-center">
                        to Login page
                    </Link>
                </div>
                <div className="mt-10 right">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Register;
