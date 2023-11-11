import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signin() {
  
  const [user, setUser] = useState({});
  const navigate = useNavigate()
  
  const onChangeEvent = (event) => {
    setUser({...user, [event.target.name]: event.target.value})
    console.log(user)
  }

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const {data} = await axios.post("http://127.0.0.1:8000/access_token/", user)
    // axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`
    if (data.access) {
      localStorage.setItem("user", JSON.stringify(data))      
      localStorage.setItem("email", JSON.stringify(user.email))      
      // navigate('/showUser')
      navigate('/home')
      window.location.reload();
    }
    console.log(data)
  }

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"))
  };

  return (
    <div>
        <main className="form-signin w-100 m-auto">
  <form method='post' onSubmit={onFormSubmit}>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email'
      onChange={(event) => onChangeEvent(event)}/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  name='password'
      onChange={(event) => onChangeEvent(event)}/>
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</main>

    </div>
  )
}

export default Signin