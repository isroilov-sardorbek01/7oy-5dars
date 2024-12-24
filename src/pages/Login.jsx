import React, { useState } from "react";
import img from "../images/regImg.svg";
import imgsee from "../images/see.svg";
import imgnotSee from "../images/notsee.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [per, setPer] = useState(false);
    const [load, setLoad] = useState(false);
    const navigate = useNavigate();

    function handleReg(e) {
        setLoad(true);
        e.preventDefault();
        const data = {
            username,
            password,
        };
        axios
            .post("https://auth-rg69.onrender.com/api/auth/signin", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                if (response.status == 200) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                    localStorage.setItem(
                        "token",
                        JSON.stringify(response.data.accessToken)
                    );
                    navigate("/", {
                        state: { token: response.data.accessToken },
                    });
                    toast.success("You login succesfully!", {
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
                if (err.status == 401) {
                    toast.error("Password is not correctly!", {
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
                if (err.status == 404) {
                    toast.error("User not found!", {
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
            .finally(() => {
                setLoad(false);
            });
    }
    return (
        <div>
            <div className="container flex items-center justify-around ">
                <div className="flex flex-col justify-center w-[400px]">
                    <h1 className="text-[40px] text-center mb-5">Login</h1>
                    <input
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        className="w-full p-2 mb-3 border-2 text-[18px] border-blue-400 rounded-md"
                        type="text"
                        placeholder="Enter the name"
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
                    <div className="flex justify-center">
                        <button
                            className="w-[150px] px-2 bg-blue-400 text-white rounded-md text-[30px] active:scale-95 transition-[2s] mb-3"
                            onClick={handleReg}
                            disabled={load}
                        >
                            {load ? "LOADING" : "LOGIN"}
                        </button>
                    </div>
                    <Link to="/register" className="text-center">
                        to Register Page
                    </Link>
                </div>
                <div className="mt-10 right">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Login;
