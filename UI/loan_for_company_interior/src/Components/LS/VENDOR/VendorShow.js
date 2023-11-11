import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function LoanShow() {

    const [users, setUsers] = useState([]);

    const fetchAllUsers = async () =>{
        //console.log('function called....');
        const result = await axios.get('http://localhost:8000/loansanction/vendorcreate/');
        //console.log(result.data);
        setUsers(result.data);
    }

    useEffect(() =>{
        fetchAllUsers();
    },[])
  return (
    <>
    <div>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <td>NAME</td>
                    <td>VENDOR TYPE</td>
                    <td>EMAIL</td>
                </tr>

            </thead>
            <tbody>
                {
                    users.map(obj=>{
                        return(
                            <tr>
                                <td>{obj.name}</td>
                                <td>{obj.vendor_type}</td>
                                <td>{obj.email}</td>
                                <td>
                                    <NavLink to={`/view/vendor/${obj.id}`}><button className='btn btn-outline-primary me-3'>VIEW</button></NavLink>
                                    <NavLink to={`/update/vendor/${obj.id}`}><button className='btn btn-outline-warning me-3'>UPDATE</button></NavLink>
                                    <NavLink to={`/delete/vendor/${obj.id}`}><button className='btn btn-outline-danger me-3'>DELETE</button></NavLink>
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

export default LoanShow