import React from "react";
import { Container } from "react-bootstrap";
import "./MessageBar.css";

const MessageBar = (props) => {
    return (
        <Container className="message-bar">
            <h2>{props.message}</h2>
        </Container>
    )
};

export default MessageBar;