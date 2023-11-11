import React from 'react';
import {useForm} from 'react-hook-form';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';


function Installment() {

    const navigate = useNavigate();
    
    const {userId} = useParams();

    const{register, handleSubmit, formState:{errors}} = useForm();

    const onFormSubmit = (data) => {
        console.log(data)
        axios.post('http://localhost:8000/disburstment/installmentcreate/', data);
        navigate('/loanshow');
    }

  return (
    <>
     <div className='container' style={{backgroundColor:"rgb(232, 233, 225)"}}>
        <br/>
        
        <form method="post"  onSubmit={handleSubmit(onFormSubmit)}>
        <center><h3 style={{color:"green"}}>INSTALLMENT DETAILS</h3></center>

          <label htmlFor='loan'>LOAN:</label>
          <input type='text' id='loan' name='loan' value={userId} className='form-control'
          {...register('loan',{required:{value:true, message:'Please enter Details!'}})} />
          <small className='form-text text-danger'>{errors?.loan && errors.loan.message}</small>
          <br/>
          <br/>
          <label htmlFor='remaining_amount'>REMAINING AMOUNT:</label>
          <input type='number' id='remaining_amount' name='remaining_amount'className='form-control'
          {...register('remaining_amount',{required:{value:true, message:'Please enter Details!'}})} />
          <small className='form-text text-danger'>{errors?.remaining_amount && errors.remaining_amount.message}</small>
          <br/>
          <br/>
          <label htmlFor='installment_no'>INSTALLMENT NO:</label>
          <input type='number' id='installment_no' name='installment_no' className='form-control' 
          {...register('installment_no',{required:{value:true, message:'Please enter Details!'}})}/>
          <small className='form-text text-danger'>{errors?.installment_no && errors.installment_no.message}</small>
          <br/>
          <br/>
          <label htmlFor='monthly_installment_amount'>MONTHLY INSTALLMENT AMOUNT:</label>
          <input type='number' id='monthly_installment_amount' name='monthly_installment_amount'
          {...register('monthly_installment_amount',{required:{value:true, message:'Please enter Details!'}})}
          className='form-control' />
          <small className='form-text text-danger'>{errors?.monthly_installment_amount && errors.monthly_installment_amount.message}</small>
          <br/>
          <br/>
            <label htmlFor='installment_expected_date'>INSTALLMENT EXPECTED Date:</label>
          <input type='date' id='installment_expected_date' name='installment_expected_date' className='form-control' 
          {...register('installment_expected_date',{required:{value:true, message:'Please enter Details!'}})}/>
          <small className='form-text text-danger'>{errors?.installment_expected_date && errors.installment_expected_date.message}</small>
          <br/>
          <br/>
          <label htmlFor='installment_paid_date'>INSTALLMENT PAID Date:</label>
          <input type='date' id='installment_paid_date' name='installment_paid_date' className='form-control' 
          {...register('installment_expected_date',{required:{value:true, message:'Please enter Details!'}})}/>
          <small className='form-text text-danger'>{errors?.installment_paid_date && errors.installment_paid_date.message}</small>
          <br/>
          <br/>
          <label htmlFor='penalty_amount'>PENALTY AMOUNT:</label>
          <input type='number' id='penalty_amount' name='penalty_amount' className='form-control' 
          {...register('penalty_amount',{required:{value:true, message:'Please enter Details!'}})}/>
          <small className='form-text text-danger'>{errors?.penalty_amount && errors.penalty_amount.message}</small>
          <br/>
          <br/>
          <label htmlFor='status'>STATUS: </label>
                    <select name="status" id="status" className='form-control' {...register('status',{required: 'Select Your Role'})}>
                    <option value=""></option>
                    <option value="OK">OK</option>
                    <option value="PENDING">PENDING</option>                    
                    <option value="LATE">LATE</option>                    
                    </select>
                    {errors.status && <span className='text-danger'>{errors.status.message}</span>}
                <br />
                <br />
          <center><input type='submit' value='SUBMIT' className='btn btn-outline-success col-4 btn-lg me-4'/>
          <input type='reset' value='RESET' className='btn btn-outline-warning col-4 btn-lg float-right'/></center>
 
    </form>
    </div>
    
    </>
  )
}

export default Installment