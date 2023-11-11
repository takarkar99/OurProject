import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function VendorView() {
  

    const {userId} = useParams();

    const [user, setUser] = useState({});

    const fetchUser = async () =>{
        const result  = await axios.get(`http://localhost:5000/users/${userId}`);
        setUser(result.data);
    }

    useEffect(()=>{
        fetchUser();
    },[])
    
  return (
    <>
    <div className='container'>
        <center><h1><u>VIEW VENDOR </u></h1></center>
        <form>
            <label htmlFor='ap'><b>APPLICATION:</b></label>
            <input type='number' id='ap' name='ap' className='form-control' readOnly/>
            <br/> 
            <br/>
            <label htmlFor='nm'><b>NAME:</b></label>
            <input type='text' id='nm' value={user.name} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='vt'><b>VENDOR TYPE :</b></label>
            <input type='text' id='vt' value={user.vendor_type} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='mail'><b>EMAIL:</b></label>
            <input type='email' id='mail' value={user.email} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='addr'><b>ADDRESS:</b></label>
            <input type='text' id='addr' value={user.address} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='city'><b>CITY:</b></label>
            <input type='text' id='city' value={user.city} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='state'><b>STATE:</b></label>
            <input type='text' id='state' value={user.state} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='cn'><b>COUNTRY:</b></label>
            <input type='text' id='cn' value={user.country} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='pco'><b>PIN CODE:</b></label>
            <input type='number' id='pco' value={user.pin_code} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='mb'><b>MOBILE:</b></label>
            <input type='text' id='mb' value={user.mobile} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='bn'><b>BANK NAME:</b></label>
            <input type='text' id='bn' value={user.bank_name} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='pc'><b>PASSBOOK COPY:</b></label>
            <input type='file' id='pc' value={user.passbook_copy} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='can'><b>CURRENT ACCOUNT NO:</b></label>
            <input type='text' id='can' value={user.current_account_no} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='ic'><b>IFSC CODE:</b></label>
            <input type='text' id='ic' value={user.ifsc_code} className='form-control' readOnly/>
            <br/>
            <br/>
            <input type='submit' value='ADD VENDOR' className='btn btn-outline-success col-6 btn-lg'/>
            <input type='reset' value='RESET VENDOR' className='btn btn-outline-warning col-6 btn-lg'/>
        </form>
    </div>
    
    </>
  )
}


export default VendorView