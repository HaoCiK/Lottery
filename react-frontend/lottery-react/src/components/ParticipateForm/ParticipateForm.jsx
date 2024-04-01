import React from "react";
import './ParticipateForm.css';
import { Container, Form, Button } from "react-bootstrap";

const ParticipateForm = (props) => {
    return (
        <Container className="participate-form">
            <Form onSubmit={props.handleSubmit}>
                <h3>Try your LUCK!</h3>
                <Form.Group controlId="amountInput" className="input-bar">
                    {/* <Form.Label>Enter ether to participate!</Form.Label> */}
                    <Form.Control
                    type="text"
                    placeholder="Enter amount of ether"
                    value={props.value}
                    onChange={(event) => props.setValue(event.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enter Lottery
                </Button>
            </Form>
        </Container>
    )
};

export default ParticipateForm;