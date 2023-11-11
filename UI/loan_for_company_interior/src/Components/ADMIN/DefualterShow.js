import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function DefualterShow() {

    const [users, setUsers] = useState([]);

    const fetchAllUsers = async () =>{
        //console.log('function called....');
        const result = await axios.get('http://localhost:8000/disburstment/defaultercreate/');
        //console.log(result.data);
        setUsers(result.data);
    }

    useEffect(() =>{
        fetchAllUsers();
    },[])
  return (
    <>
    <div>
    <center><h1><u>DEFUALTER INFO</u></h1></center>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <td>DEFUALT AMOUNT</td>
                    <td>PENDING SINCE DATE</td>
                </tr>

            </thead>
            <tbody>
                {
                    users.map(obj=>{
                        return(
                            <tr>
                                <td>{obj.default_amount}</td>
                                <td>{obj.pending_since_date}</td>
                                <td>
                                    <NavLink to={`/disburstment/${obj.id}`}><button className='btn btn-outline-primary me-3'>View</button></NavLink>
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

export default DefualterShow