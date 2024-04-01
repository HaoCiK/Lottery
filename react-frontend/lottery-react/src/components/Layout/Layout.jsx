import React from "react";
import "./Layout.css";
import headerImage from "../../style/header_image.png"

const Layout = (props) => {
    return (
        <div className="layout">
            <img src={headerImage} alt="Cover Background" className="bg-image"/>
            {props.children}
        </div>
    )
};

export default Layout;