import React, { useState } from 'react'
import axios from 'axios'
import { addUser } from '../utils/userSlice';
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { BASE_URL } from '../utils/constants';

const Login = () => {
  const [emailId, setEmailId] = useState("farhan@gmail.com");
  const [password, setPassword] = useState("Farhan@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const res = await axios.post( BASE_URL + "/login", {
        emailId,
        password
      }, { withCredentials: true })
      dispatch(addUser(res.data));
      navigate("/")
    } catch (err) {
      console.error(err);

    }
  }
  return (
    <div className='flex justify-center mt-10'>
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div className='my-2'>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email ID</legend>
              <input
                type="text"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                className="input" />
            </fieldset>
          </div>
          <div className='my-2'>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input" />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login