import React from "react";
import "./WinnerPicker.css";
import { Container, Button } from "react-bootstrap";

const WinnerPicker = (props) => {
    return (
        <Container className="winner-picker">
            <h3 className="heading">Ready to pick a winner?</h3>
            <Button
            variant="primary"
            onClick={props.handleClick}
            >
            Pick a winner!
            </Button>
        </Container>
    )
};

export default WinnerPicker;