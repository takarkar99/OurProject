import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ApplicationView() {

    const {userId} = useParams();

    const [user, setUser] = useState({});

    const fetchUser = async () =>{
        const result  = await axios.get(`http://localhost:8000/application/applicationdetail/${userId}/`);
        setUser(result.data);
    }

    useEffect(()=>{
        fetchUser();
    },[])
  return (
    <>
   <div className='container'>
        <center><h1><u>SINGLE APPLICATION INFORMATION</u></h1></center>
        <form>
            <label htmlFor='uid'><b>USER ID:</b></label>
            <input value={user.user} id='uid' className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='an'><b>AADHAR NUMBER:</b></label>
            <input value={user.aadhaar_no} id='an' className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='pn'><b>PAN CARD NUMBER:</b></label>
            <input value={user.pan_no} id='pn' className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='toe'><b>TYPE OF EMPLOYEMENT:</b></label>
            <input value={user.type_of_employment} id='toe' className='form-control' readOnly />
            <br/>
            <br/>
            <label htmlFor='bt'><b>BUSINESS TITLE:</b></label>
            <input value={user.business_title} id='bt' className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='btype'><b>BUSINESS TYPE:</b></label>
            <input value={user.business_type} id='btype' className='form-control' readOnly />
            <br/>
            <br/>
            <label htmlFor='baddr'><b>BUSINESS ADDRESS:</b></label>
            <input value={user.business_address} id='baddr' className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='grn'><b>GTS REGISTRATION NUMBER:</b></label>
            <input value={user.gst_registration_no} id='grn' className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='bln'><b>BUSINESS LICENSE NUMBER:</b></label>
            <input value={user.business_license_no} id='bln' className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='eaat'><b>EXPECTED AVERAGE ANNUAL TURNOVER:</b></label>
            <input value={user.expected_average_annual_turnover} id='eaat' className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='yicb'><b>YEARS IN CURRENT BUSINESS:</b></label>
            <input value={user.years_in_current_business} id='yicb' className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='c'><b>COLLATERAL:</b></label>
            <input value={user.collateral} id='c' className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='at'><b>APPLICATION STATUS:</b></label>
            <input value={user.status} id='at' className='form-control' readOnly />
            <br/>
            <br/>
            <label htmlFor='ats'><b>APPLICATION TIME STAMP:</b></label>
            <input value={user.application_timestamp} id='ats' className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='r'><b>REMARK:</b></label>
            <input value={user.remark} id='r' className='form-control' readOnly/>
            <br/>
            <br/>
            <input type='submit' value='ADD APPLICATION' className='btn btn-outline-success col-6 btn-lg'/>
            <input type='reset' value='RESET APPLICATION' className='btn btn-outline-warning col-6 btn-lg'/>
        </form>
    </div>
    
    </>
  )
}

export default ApplicationView