import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function InstallmentShow() {

    const [users, setUsers] = useState([]);

    const fetchAllUsers = async () =>{
        //console.log('function called....');
        const result = await axios.get('http://localhost:8000/disburstment/installmentcreate/');
        //console.log(result.data);
        setUsers(result.data);
    }

    useEffect(() =>{
        fetchAllUsers();
    },[])
  return (
    <>
    <div>
    <center><h1><u>INSTALLMENT INFO</u></h1></center>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <td>REMAINING AMOUNT</td>
                    <td>INSTALLMENT NO</td>
                    <td>MONTHLY INSTALLMENT AMOUNT</td>
                    <td>STATUS</td>
                </tr>

            </thead>
            <tbody>
                {
                    users.map(obj=>{
                        return(
                            <tr>
                                <td>{obj.remaining_amount}</td>
                                <td>{obj.installment_no}</td>
                                <td>{obj.monthly_installment_amount}</td>
                                <td>{obj.status}</td>
                                <td>
                                    <NavLink><button className='btn btn-outline-primary me-3'>View</button></NavLink>
                                    <NavLink><button className='btn btn-outline-warning me-3'>UPDATE</button></NavLink>
                                    <NavLink><button className='btn btn-outline-danger me-3'>DELETE</button></NavLink>
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

export default InstallmentShow