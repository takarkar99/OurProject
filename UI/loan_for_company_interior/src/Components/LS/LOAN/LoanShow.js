import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function LoanShow() {

    const [users, setUsers] = useState([]);

    const fetchAllUsers = async () =>{
        //console.log('function called....');
        const result = await axios.get('http://localhost:8000/loansanction/loancreate/');
        //console.log(result.data);
        setUsers(result.data);
    }

    useEffect(() =>{
        fetchAllUsers();
    },[])
  return (
    <>
    <div>
    <center><h1><u>LOAN INFO</u></h1></center>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <td>LOAN PRINCIPAL AMOUNT</td>
                    <td>LOAN TENURE</td>
                    <td>INTEREST RATE</td>
                    <td>TOTAL AMOUNT AND PROCESSING FEES</td>
                    <td>INSTALLMENT</td>
                    <td>SANCTION LATTER</td>
                    <td>STATUS</td>
                </tr>

            </thead>
            <tbody>
                {
                    users.map(obj=>{
                        return(
                            <tr>
                                <td>{obj.loan_principal_amount}</td>
                                <td>{obj.loan_tenure}</td>
                                <td>{obj.interest_rate}</td>
                                <td>{obj.total_amount_and_processing_fees}</td>
                                <td>{obj.installment}</td>
                                <td><a href={`http://127.0.0.1:8000${obj.sanction_letter}`}>Sanction Letter</a></td>
                                <td>{obj.status}</td>
                                <td>
                                    <NavLink to={`/disburstment/${obj.id}`}><button className='btn btn-outline-primary me-3'>Disburst</button></NavLink>
                                    <NavLink to={`/installment/${obj.id}`}><button className='btn btn-outline-primary me-3'>Installment</button></NavLink>
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