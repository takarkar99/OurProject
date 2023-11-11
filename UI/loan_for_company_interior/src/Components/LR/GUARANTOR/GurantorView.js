
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function GuarantorView() {

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
          <center><h1><u>VIEW GUARANTOR</u></h1></center>
          <form>
              <label htmlFor='rwc'><b>RELATION WITH CUSTOMER:</b></label>
              <input type='text' id='rwc' value={user.relation_with_customer} className='form-control' readOnly/>
              <br/>
              <br/>
              <label htmlFor='nm'><b>NAME:</b></label>
              <input type='text' id='nm' value={user.name} className='form-control' readOnly/>
              <br/>
              <br/>
              <label htmlFor='dob'><b>DOB:</b></label>
              <input type='date' id='dob' value={user.dob} className='form-control' readOnly/>
              <br/>
              <br/>
              <label htmlFor='gn'><b>GENDER:</b></label>
              <input value={user.gender} id='gn' className='form-control' readOnly/>
              <br/>
              <br/>
              <label htmlFor='mail'><b>EMAIL:</b></label>
              <input type='email' id='mail' value={user.email} className='form-control' readOnly/>
              <br/>
              <br/>
              <label htmlFor='add'><b>ADDRESS:</b></label>
              <input type='textarea' id='add' value={user.address} className='form-control' readOnly/> 
              <br/>
              <br/>
              <label htmlFor='city'><b>CITY:</b></label>
              <input type='text' id='city' value={user.city} className='form-control' readOnly/>
              <br/>
              <br/>
              <label htmlFor='st'><b>STATE:</b></label>
              <input type='text' id='st' value={user.state} className='form-control' readOnly/>
              <br/>
              <br/>
              <label htmlFor='country'><b>COUNTRY:</b></label>
              <input type='text' id='country' value={user.country} className='form-control' readOnly/>
              <br/>
              <br/>
              <label htmlFor='pin_code'><b>PIN CODE:</b></label>
              <input type='number' id='pin_code' value={user.pin_code} className='form-control' readOnly/>
              <br/>
              <br/>
              <label htmlFor='mb'><b>MOBILE:</b></label>
              <input type='text' id='mb' value={user.mobile} className='form-control' readOnly/>
              <br/>
              <br/>
              <label htmlFor='ph'><b>PHOTO:</b></label>
              <input type='file' id='ph' value={user.photo} className='form-control' />
              <br/>
              <br/>
              <label htmlFor='prof'><b>PROFESSION:</b></label>
              <input type='text' id='prof' value={user.profession} className='form-control' readOnly/>
              <br/>
              <br/>
              <label htmlFor='ic'><b>INCOME CERTIFICATE:</b></label>
              <input type='file' id='ic' value={user.income_certificate} className='form-control' readOnly/>
              <br/>
              <br/>
              <label htmlFor='bn'><b>BANK NAME:</b></label>
              <input type='text' id='bn' value={user.bank_name} className='form-control' readOnly/>
              <br/>
              <br/>
              <label htmlFor='can'><b>CURRENT ACCOUNT NO:</b></label>
              <input type='text' id='can' value={user.current_account_no} className='form-control' readOnly/>
              <br/>
              <br/>
              <label htmlFor='pb'><b>PASSBOOK COPY:</b></label>
              <input type='file' id='pb' value={user.passbook_copy} className='form-control' readOnly/>
              <br/>
              <br/>
              <label htmlFor='ifsc'><b>IFSC CODE:</b></label>
              <input type='text' id='ifsc' value={user.ifsc_code} className='form-control' readOnly/>
              <br/>
              <br/>
              <input type='submit' value='ADD GUARANTOR' className='btn btn-outline-success col-6 btn-lg'/>
              <input type='reset' value='RESET GUARANTOR' className='btn btn-outline-warning col-6 btn-lg'/>
          </form>
      </div>
      
      </>
    )
  }
  
  export default GuarantorView

