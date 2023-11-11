import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function GuarantorShow() {

    const [users, setUsers] = useState([]);

    const fetchAllUsers = async () =>{
        //console.log('function called....');
        const result = await axios.get('http://localhost:8000/application/guarantorcreate/');
        //console.log(result.data);
        setUsers(result.data);
    }

    useEffect(() =>{
        fetchAllUsers();
    },[])
  return (
    <>
    <div>
        <center><h1><u>DOCUMENTOR INFO</u></h1></center>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <td>RELATION WITH CUSTOMER</td>
                    <td>NAME</td>
                    <td>PHOTO</td>
                    <td>INCOME CERTIFICATE</td>
                    <td>PASSBOOK COPY</td>
                    <td>IFSC CODE</td>
                </tr>

            </thead>
            <tbody>
                {
                    users.map(obj=>{
                        return(
                            <tr>
                                <td>{obj.relation_with_customer}</td>
                                <td>{obj.name}</td>
                                <td><a href={`http://127.0.0.1:8000${obj.photo}`}>Photo</a></td>
                                <td><a href={`http://127.0.0.1:8000${obj.income_certificate}`}>Income Certificate</a></td>
                                <td><a href={`http://127.0.0.1:8000${obj.passbook_copy}`}>passbook copy</a></td>
                                <td>{obj.ifsc_code}</td>
                                <td>
                                    <NavLink to={`/view/guarantor/${obj.id}`}><button className='btn btn-outline-primary me-3'>VIEW</button></NavLink>
                                    <NavLink to={`/update/guarantor/${obj.id}`}><button className='btn btn-outline-warning me-3'>UPDATE</button></NavLink>
                                    <NavLink to={`/delete/guarantor/${obj.id}`}><button className='btn btn-outline-danger me-3'>DELETE</button></NavLink>
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

export default GuarantorShow