import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import useApi from "../hooks/useApi";

function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const { fetchUserData } = useContext(AuthContext);
  const { apiCall } = useApi();
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !password) {
      console.log("ENTER name OR PASSWORD");
      toast.error("Please insret name or password");
      setLoading(false);
      return;
    }

    try {
      const login = await apiCall({
        url: "http://localhost:4000/auth/login",
        method: "post",
        data: { name, password },
      });

      await fetchUserData();
      toast.success("Logged in Successfully!");
      navigate("/home");
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };
  return (
    <Form onSubmit={(e) => submitHandler(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
