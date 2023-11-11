import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function LoanView() {

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
            <center><h1><u>LOAN VIEW</u></h1></center>
            <form>
                <label htmlFor='ap'><b>APPLICATION:</b></label>
                <input type='number' id='ap' name='ap' placeholder='eg.1211' className='form-control' />
                <br/>
                <br/>
                <label htmlFor='lpa'><b>LOAN PRINCIPLE AMOUNT:</b></label>
                <input type='number' id='lpa' value={user.loan_principal_amount} className='form-control' readOnly/>
                <br/>
                <br/>
                <label htmlFor='lt'><b>LOAN TENURE:</b></label>
                <input type='number' id='lt' value={user.loan_tenure} className='form-control' readOnly/>
                <br/>
                <br/>
                <label htmlFor='ir'><b>INTEREST RATE:</b></label>
                <input type='number' value={user.interest_rate} id='ir' className='form-control' readOnly/>
                <br/>
                <br/>
                <label htmlFor='taapf'><b>TOTAL AMOUNT AND PROCESSING FEES:</b></label>
                <input type='number' id='taapf' value={user.total_amount_and_processing_fees} className='form-control' readOnly/>
                <br/>
                <br/>
                <label htmlFor='ins'><b>INSTALLMENT:</b></label>
                <input type='number' value={user.installment} id='ins' className='form-control' readOnly/>
                <br/>
                <br/>
                <label htmlFor='md'><b>MATURITY DATE:</b></label>
                <input type='date' id='md' value={user.maturity_date} className='form-control' readOnly/>
                  <label htmlFor='sl'><b>SANCTION LATTER:</b></label>
                <input type='file' id='sl' value={user.sanction_letter} className='form-control' readOnly />
                <br/>
                <br/>
                <label htmlFor='sta'><b>STATUS:</b></label>
                <input value={user.status} id='sta' className='form-control' readOnly/>
                <br/>
                <br/>
                <label htmlFor='rts'><b>RESPONSE TIME STAMP:</b></label>
                <input type='date' id='rts' value={user.response_timestamp} className='form-control' readOnly/>
                <br/>
                <br/>
                <label htmlFor='rem'><b>REMARK:</b></label>
                <input type='text' id='rem' value={user.remark} className='form-control' readOnly/>
                <br/>
                <br/>
                <input type='submit' value='SUBMIT' className='btn btn-outline-success col-6 btn-lg'/>
                <input type='reset' value='RESET' className='btn btn-outline-warning col-6 btn-lg'/>
            </form>
        </div>
    </>
  )
}

export default LoanView
