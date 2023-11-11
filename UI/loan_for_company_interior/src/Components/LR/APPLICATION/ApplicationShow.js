import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function ApplicationShow() {

    const [users, setUsers] = useState([]);

    const fetchAllUsers = async () =>{
        //console.log('function called....');
        const result = await axios.get('http://localhost:8000/application/applicationcreate/');
        console.log(result.data);
        setUsers(result.data);
    }

    useEffect(() =>{
        fetchAllUsers();
    },[])
  return (
    <>
    <div>
    <center><h1><u>APPLICATION INFO</u></h1></center>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <td>USER ID</td>
                    <td>AADHAR NUMBER</td>
                    <td>PAN CARD NUMBER</td>
                    <td>TYPE OF EMPLOYEMENT</td>
                    <td>BUSINESS TITLE</td>
                    <td>APPLICATION STATUS</td>
                    <td>APPLICATION TIME STAMP</td>
                    <td>REMARK</td>
                </tr>

            </thead>
            <tbody>
                {
                    users.map(obj=>{
                        return(
                            <tr>
                                <td>{obj.user}</td>
                                <td>{obj.aadhaar_no}</td>
                                <td>{obj.pan_no}</td>
                                <td>{obj.type_of_employment}</td>
                                <td>{obj.business_title}</td>
                                <td>{obj.status}</td>
                                <td>{obj.application_timestamp}</td>
                                <td>{obj.remark}</td>
                                <td>
                                    <NavLink to={`/update/application/${obj.id}`}><button className='btn btn-outline-warning me-3'>Update</button></NavLink>
                                    <NavLink to={`/delete/application/${obj.id}`}><button className='btn btn-outline-danger me-3'>Delete</button></NavLink>
                                    <NavLink to={`/view/application/${obj.id}`}><button className='btn btn-outline-primary me-3'>View</button></NavLink>
                                    <NavLink to={`/document/${obj.id}`}><button className='btn btn-outline-primary me-3'>Add Doc</button></NavLink>
                                    <NavLink to={`/guarantor/${obj.id}`}><button className='btn btn-outline-primary me-3'>Add Guarantor</button></NavLink>
                                    <NavLink to={`/vendor/${obj.id}`}><button className='btn btn-outline-primary me-3'>Add Vendor</button></NavLink>
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

export default ApplicationShow