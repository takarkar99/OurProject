import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function ApplicationDelete() {

    const navigate = useNavigate();

    const {userId} = useParams();

    const [user, setUser] = useState({});

    const fetchUser = async () =>{
        const result = await axios.get(`http://localhost:8000/application/applicationdetail/${userId}/`);
        setUser(result.data);
    }

    const onFormSubmit = (event) =>{
        event.preventDefault();
        axios.delete(`http://localhost:8000/application/applicationdetail/${userId}/`);
        navigate('/applicationshow');
    }

    useEffect(()=>{
        fetchUser();
    },[])
  return (
    <>
    <div className='container'>
        <center><h1><u>DELETE CONFIRMATION</u></h1></center>
        <form onSubmit={(event)=>onFormSubmit(event)}>
            <h2>Do you really want to delete<span style={{"color": "red"}}> {user.user} this data?</span></h2>
            <input type='submit' value='YES' className='btn btn-outline-danger col-6 col-lg'/>
            <NavLink to='/applicationshow'><input type='button' value='NO' className='btn btn-outline-success col-6 col-lg'/></NavLink>
        </form>
    </div>
    </>
  )
}

export default ApplicationDelete