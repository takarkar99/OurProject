import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink , Link} from 'react-router-dom';

function DocumentShow() {

    const [users, setUsers] = useState([]);

    const fetchAllUsers = async () =>{
        //console.log('function called....');
        const result = await axios.get('http://localhost:8000/application/documentcreate/');
        //console.log(result.data)
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
                    <td>Application Id</td>
                    <td>AADHAR CARD</td>
                    <td>PAN CARD</td>
                    <td>BUSINESS ADDRESS</td>
                </tr>

            </thead>
            <tbody>
                {
                    users.map(obj=>{
                        return(
                            <tr>
                                <td>{obj.application}</td>
                                <td><a href={`http://127.0.0.1:8000${obj.aadhaar_card}`}>Adhar Card</a></td>
                                <td><a href={`http://127.0.0.1:8000${obj.pan_card}`}>Pan Card</a></td>
                                <td><a href={`http://127.0.0.1:8000${obj.business_address_proof_or_copy_of_rent_agreement}`}>Bussiness Address</a></td>
                                <td>
                                    <NavLink to={`/update/document/${obj.id}`}><button className='btn btn-outline-warning me-3'>UPDATE</button></NavLink>
                                    <NavLink to={`/delete/document/${obj.id}`}><button className='btn btn-outline-danger me-3'>DELETE</button></NavLink>
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

export default DocumentShow