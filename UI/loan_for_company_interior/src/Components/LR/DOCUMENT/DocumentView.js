
import { useParams } from 'react-router-dom'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DocumentView() {

    const {userId} = useParams();

    const [user, setUser] = useState({});

    const fetchUser = async () =>{
        const result  = await axios.get(`http://localhost:8000/appliaction/documentdetail/${userId}/`);
        setUser(result.data);
    }

    useEffect(()=>{
        fetchUser();
    },[])
    
    return  (
     <>
    <div className='container'>
        <center><h1><u>DOCUMENT VIEW</u></h1></center>
        <form>
            <label htmlFor='ac'><b>AADHAR CARD:</b></label>
            <input type='file' id='ac' value={user.aadhar_card} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='pc'><b>PAN CARD:</b></label>
            <input type='file' id='pc' value={user.pan_card} className='form-control'  readOnly/>
            <br/>
            <br/>
            <label htmlFor='bap'><b>BUSINESS ADDRESS PROOF OR COPY OF RENT AGREEMENT :</b></label>
            <input type='file' id='bap' value={user.business_address_proof_or_copy_of_rent_agreement} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='eb'><b>ELECTRICITY BILL:</b></label>
            <input type='file' id='eb' value={user.electricity_bill} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='mc'><b>MSME CERTIFICATE:</b></label>
            <input type='file' id='mc' value={user.msme_certificate} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='gc'><b>GST CERTIFICATE:</b></label>
            <input type='file' id='gc' value={user.gst_certificate} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='uar'><b>UDYOG AADHAR REGISTRATION:</b></label>
            <input type='file' id='uar' value={user.udyog_aadhaar_registration} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='bl'><b>BUSINESS LICENSE:</b></label>
            <input type='file' id='bl' value={user.business_license} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='bpp'><b>BUSINESS PLAN OR PROPOSAL:</b></label>
            <input type='file' id='bpp' value={user.business_plan_or_proposal} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='ts'><b>THREE YEAR ITR WITH BALANCE SHEET:</b></label>
            <input type='file' id='ts' value={user.three_year_itr_with_balance_sheet} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='cd'><b>COLLATERAL DOCUMENT:</b></label>
            <input type='file' id='cd' value={user.collateral_document}  className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='sd'><b>STAMP DUTY:</b></label>
            <input type='file' id='sd' value={user.stamp_duty} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='st'><b>STATUS OF DOCUMENT:</b></label>
            <input name='status' id='st' value={user.status} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='rt'><b>RESPONSE TIMESTAMP:</b></label>
            <input type='date' id='rt' value={user.response_timestamp} className='form-control' readOnly/>
            <br/>
            <br/>
            <label htmlFor='rm'><b>REMARK:</b></label>
            <input type='text' id='rm' value={user.remark} className='form-control' readOnly/>
            <br/>
            <br/>
            <input type='submit' value='ADD DOCUMENT' className='btn btn-outline-success col-6 btn-lg'/>
            <input type='reset' value='RESET DOCUMENT' className='btn btn-outline-warning col-6 btn-lg'/>
        </form>
    </div>

    </>
  )
}

export default DocumentView