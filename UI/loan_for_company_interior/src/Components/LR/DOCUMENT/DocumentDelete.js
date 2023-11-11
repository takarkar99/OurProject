import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

function DocumentDelete() {

    const navigate = useNavigate();

    const {ApplicationId} = useParams();

    const [user, setUser] = useState({});

    const fetchUser = async () =>{
        const result = await axios.get(`http://localhost:5000/users/${ApplicationId}`);
        setUser(result.data);
    }

    const onFormSubmit = (event) =>{
        event.preventDefault();
        axios.delete(`http://localhost:5000/users/${ApplicationId}`);
        navigate('/documentshow');
    }

    useEffect(()=>{
        fetchUser();
    },[])
  return (
    <>
    <div className='container'>
        <center><h1><u>DELETE CONFIRMATION</u></h1></center>
        <form onSubmit={(event)=>onFormSubmit(event)}>
            <h2>Do you really want to delete<span style={{"color": "red"}}> {user.aadhaar_card} this data?</span></h2>
            <input type='submit' value='YES' className='btn btn-outline-danger col-6 col-lg'/>
            <NavLink to='/documentshow'><input type='button' value='NO' className='btn btn-outline-success col-6 col-lg'/></NavLink>
        </form>
    </div>
    </>
  )
}

export default DocumentDelete