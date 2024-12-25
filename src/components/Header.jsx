import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import imgQuit from "../images/quitImg.svg";

function Header() {
    const navigate = useNavigate();

    function handleQuit(e) {
        e.preventDefault();
        const con = confirm("Are you really want to QUIT!");
        if (con) {
            localStorage.clear();
            navigate("/login");
        }
    }
    return (
        <div className="mb-10 shadow-xl bg-slate-200">
            <div className="container flex items-center justify-between">
                <Link className="text-[40px] font-mono font-bold" to="/">
                    INBAZAR
                </Link>
                <ul className="hovEl">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "active" : "nonactive"
                        }
                    >
                        Bosh sahifa
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : "nonactive"
                        }
                        to="/products"
                    >
                        Bozor
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : "nonactive"
                        }
                        to="/counter"
                    >
                        CounterRedux
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : "nonactive"
                        }
                        to="/account"
                    >
                        Account
                    </NavLink>
                </ul>
                <div
                    onClick={handleQuit}
                    className="flex items-center hover:underline hover:cursor-pointer"
                >
                    <h1>Chiqish</h1>
                    <img src={imgQuit} width={30} height={30} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Header;
