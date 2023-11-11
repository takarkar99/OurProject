// import React, {useState} from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


function ShowUserDefualter() {


    const [user, setUser] = useState([]);

    const getAllUser = async () => {
        const result = await axios.get('http://127.0.0.1:8000/signup/')
        setUser(result.data)
        console.log(result.data)
    }

    useEffect(()=>{
        getAllUser();
    }, [])

  return (
    <>
    <center><h1><u>User Info</u></h1></center>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last name</th>
                    <th>dob</th>
                    <th>role</th>
                    <th>Add Details</th>
                    <th>Acion</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map(obj=>{
                        return (
                            <tr>
                                <td>{obj.id}</td>
                                <td>{obj.first_name}</td>
                                <td>{obj.last_name}</td>
                                <td>{obj.dob}</td>
                                <td>{obj.role}</td>
                                <td>                             
                                    <NavLink to={`/defualter/${obj.id}`}><button>Make Defualter</button></NavLink>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default ShowUserDefualter


