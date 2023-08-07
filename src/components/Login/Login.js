import React, { useState } from "react";
import "./Login.scss";
import { Form, Input, Button, Alert } from "antd";
import { useDispatch , useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Modetoggle from "../ModeToggle/ModeToggle";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user);
  const [showAlert, setShowAlert] = useState(false)

  const onFinish = (values) => {
    if(user != null && user?.username === values.username && user?.password === values.password){
      dispatch({
        type: "LOGIN_USER",
        payload: values,
      })
      navigate("/")
    }else{
      setShowAlert(true)
    }
    
  };
  return (
    <div className="login-container">
      {showAlert && (
          <Alert
            style={{
              width: "320px",
              left: "50%",
              top: "200px",
              transform: "translate(-50%, -50%)",
              position: "absolute",
            }}
            message="Invalid username and password"
            type="error"
            showIcon={true}
            closable
            onClose={() => setShowAlert(false)}
          />
        )}
        <div className="form">
      <Form name="login-form" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please enter your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
      <p className="link_text">Don't have an account? <Link to="/register">Register</Link></p>
      <Modetoggle />
      </div>
    </div>
  );
}

export default Login;
