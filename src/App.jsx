import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import Counter from "./pages/Counter";
import Acccount from "./pages/Acccount";

function App() {
    const [token, setToken] = useState(
        JSON.parse(localStorage.getItem("token"))
    );
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.token) {
            setToken(location.state.token);
        }
    }, [navigate]);
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("token"))) {
            setToken(JSON.parse(localStorage.getItem("token")));
        } else {
            navigate("/login");
        }
    }, []);
    function PrivateRoute({ isAuth, children }) {
        if (!isAuth) {
            navigate("/login");
        }
        return children;
    }
    return (
        <div>
            <Routes>
                <Route
                    index
                    element={
                        <PrivateRoute isAuth={!!token}>
                            <MainLayout>
                                <Home></Home>
                            </MainLayout>
                        </PrivateRoute>
                    }
                ></Route>
                <Route
                    path="/account"
                    element={
                        <PrivateRoute isAuth={!!token}>
                            <MainLayout>
                                <Acccount></Acccount>
                            </MainLayout>
                        </PrivateRoute>
                    }
                ></Route>
                <Route
                    path="/products"
                    element={
                        <PrivateRoute isAuth={!!token}>
                            <MainLayout>
                                <Products></Products>
                            </MainLayout>
                        </PrivateRoute>
                    }
                ></Route>
                <Route
                    path="/login"
                    element={
                        <AuthLayout>
                            <Login></Login>
                        </AuthLayout>
                    }
                ></Route>
                <Route
                    path="/register"
                    element={
                        <AuthLayout>
                            <Register></Register>
                        </AuthLayout>
                    }
                ></Route>
                <Route
                    path="/counter"
                    element={
                        <PrivateRoute isAuth={!!token}>
                            <MainLayout>
                                <Counter></Counter>
                            </MainLayout>
                        </PrivateRoute>
                    }
                ></Route>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
