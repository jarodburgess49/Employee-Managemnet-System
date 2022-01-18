import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { addEmployee, updateUserDetails } from "../actions/userActions";

const EmployeeComponent = (id) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");


  const [email, setEmail] = useState("");
  
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
      dispatch(addEmployee({ id: id, name, email, password }));
    
  };

  return (
    <Row>
      <Col md={3}>
        <h2>Employee Profile</h2>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
           <Form.Group controlId="name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          </Form.Group>
          <Button type="submit">Enter</Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
};

export default EmployeeComponent;