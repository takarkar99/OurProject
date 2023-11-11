import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'




function RegisteredUserList() {
    const [users, setUsers] = useState([])

    const getAllUser = async () => {
        const result = await axios.get("http://127.0.0.1:8000/signup/")
        setUsers(result.data)
    }
    useEffect(()=>{
        getAllUser()
    })
  return (
        <>
    <center><h1><u>Registered User List</u></h1></center>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last name</th>
                    <th>dob</th>
                    <th>role</th>
                    <th>Apply Loan</th>
                    <th>Acions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(obj=>{
                        return (
                            <tr>
                                <td>{obj.first_name}</td>
                                <td>{obj.last_name}</td>
                                <td>{obj.dob}</td>
                                <td>{obj.role}</td>
                                <td>
                                    <NavLink to={`/application/${obj.id}`}><button>Apply Loan</button></NavLink>
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

export default RegisteredUserList   