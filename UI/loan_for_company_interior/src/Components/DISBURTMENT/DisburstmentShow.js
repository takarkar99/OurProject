import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function DisburtmentShow() {

    const [users, setUsers] = useState([]);

    const fetchAllUsers = async () =>{
        //console.log('function called....');
        const result = await axios.get('http://localhost:8000/disburstment/disburstmentcreate/');
        //console.log(result.data);
        setUsers(result.data);
    }

    useEffect(() =>{
        fetchAllUsers();
    },[])
  return (
    <>
    <div>
    <center><h1><u>DISBURSTMENT INFO</u></h1></center>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <td>INSURANCE DOCUMENT</td>
                    <td>PAYMENT MODE</td>
                    <td>RECEPT DOCUMENT</td>
                    <td>STATUS</td>
                </tr>

            </thead>
            <tbody>
                {
                    users.map(obj=>{
                        return(
                            <tr>
                                <td><a href={`http://127.0.0.1:8000${obj.insurance_doc}`}>Sanction Letter</a></td>
                                <td>{obj.payment_mode}</td>
                                <td><a href={`http://127.0.0.1:8000${obj.receipt_doc}`}>Sanction Letter</a></td>
                                <td>{obj.status}</td>
                                <td>
                                    <NavLink to='/success'><button className='btn btn-outline-primary me-3'>Check Process</button></NavLink>
                                    <NavLink to={`/update/loan/${obj.id}`}><button className='btn btn-outline-warning me-3'>UPDATE</button></NavLink>
                                    <NavLink to={`/delete/loan/${obj.id}`}><button className='btn btn-outline-danger me-3'>DELETE</button></NavLink>
                                </td>
                            </tr>
                        );
                    })
                }

            </tbody>
        </table>
    </div>
    </>

  )
}

export default DisburtmentShow