import React from "react";
import "./Register.scss";
import { useSelector, useDispatch } from "react-redux";

function Register() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  return <div>Register</div>;
}

export default Register;
