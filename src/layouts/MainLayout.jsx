import React from "react";
import Header from "../components/Header";

function MainLayout({children}) {
    return <div>
        <Header></Header>
        <main>{children}</main>
    </div>;
}

export default MainLayout;
