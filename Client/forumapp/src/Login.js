import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useContext(UserContext);
  const [Form, setForm] = useState({});
  const submitLoginForm = async (e) => {
    e.preventDefault();
    // alert("submit");
    try {
      const loginRes = await axios.post(
        "http://localhost:4002/api/users/login",
        Form
      );
      console.log(loginRes);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      }); 
      localStorage.setItem("auth-token", loginRes.data.token);
      //navigate user to homepage
      navigate("/");
    } catch (error) {}
  };
  let handleChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setForm({ ...Form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <form onSubmit={submitLoginForm}>
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          type="text"
        />
        <br />
        <br />
        <input
          onChange={handleChange}
          name="password"
          placeholder="Password"
          type="text"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <Link to="/signup">Sign up</Link>
    </>
  );
}
export default Login;
