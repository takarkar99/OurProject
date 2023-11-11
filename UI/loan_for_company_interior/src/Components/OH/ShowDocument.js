import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function ShowDocument() {
    const [users, setUsers] = useState([]);
    

    const ChangeStatus = () => {
            var x = document.getElementsByClassName('done');
            if (x) {
                var id;
                for(var i = 0; i < x.length; i++){
                    if(x[i].checked){
                        id = x[i].value
                        axios.patch(`http://127.0.0.1:8000/application/documentdetail/${id}/`, {"status": "DONE"})
                    }
                }
            }
            var y = document.getElementsByClassName('reject');
            if (y) {
            var idr;
            for(var j = 0; j < y.length; j++){
                    if(y[j].checked){
                        idr = y[j].value
                        axios.patch(`http://127.0.0.1:8000/application/documentdetail/${idr}/`, {"status": "REJECTED"})
                    }
                }
            }

    }

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
    <center><h1><u>Documents</u></h1></center>
    <table className='table table-dark'>
        <thead>
            <tr>
                <th>Application ID</th>
                <th>Documents</th>
                <th>Change Status</th>
                <th>Acions</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(obj=>{
                    return (
                        <tr>
                            <td><p id='id'>{obj.id}</p></td>
                            <td><a href={`http://127.0.0.1:8000/${obj.electricity_bill}`}>electricity_bill</a><br/>
                            <a href={`http://127.0.0.1:8000/${obj.msme_certificate}`}>msmecertificate</a><br/>
                            <a href={`http://127.0.0.1:8000/${obj.gst_certificate}`}>gst_certificate</a><br/>
                            <a href={`http://127.0.0.1:8000/${obj.udyog_aadhaar_registration}`}>udyog_aadhaar_registration</a></td>
                            <td><input type="radio" id="html" className='done' name="fav_language" value={obj.id}></input>
                            <label htmlFor="html">DONE</label><br></br>
                            <input type="radio" id="html1" className='reject' name="fav_language" value={obj.id}></input>
                            <label htmlFor="html1">REJECT</label><br></br></td>
                            <td>
                                <button onClick={ChangeStatus}>SUBMIT</button>
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

export default ShowDocument