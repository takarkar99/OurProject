import React from 'react';
import {useForm} from 'react-hook-form';
import axios from "axios";
import { useParams } from 'react-router-dom';


function Defualter() {
    
    const {userId} = useParams();

    const{register, handleSubmit, formState:{errors}} = useForm();

    const onFormSubmit = (data) => {
        console.log(data)
        axios.post('http://localhost:8000/disburstment/defaultercreate/', data);
        // navigate('/document/:userId');
    }

  return (
    <>
     <div className='container' style={{backgroundColor:"rgb(232, 233, 225)"}}>
        <br/>
        
        <form method="post"  onSubmit={handleSubmit(onFormSubmit)}>
        <center><h3 style={{color:"green"}}>DEFUALTER DETAILS</h3></center>

          <label htmlFor='user'>USER:</label>
          <input type='number' id='user' name='user' value={userId} className='form-control'
          {...register('user',{required:{value:true, message:'Please enter Details!'}})} />
          <small className='form-text text-danger'>{errors?.user && errors.user.message}</small>
          <br/>
          <br/>
          <label htmlFor='default_amount'>DEFUALT AMOUNT:</label>
          <input type='number' id='default_amount' name='default_amount'className='form-control'
          {...register('default_amount',{required:{value:true, message:'Please enter Details!'}})} />
          <small className='form-text text-danger'>{errors?.default_amount && errors.default_amount.message}</small>
          <br/>
          <br/>
          <label htmlFor='pending_since_date'>PENDING SINCE DATE:</label>
          <input type='date' id='pending_since_date' name='pending_since_date' className='form-control' 
          {...register('pending_since_date',{required:{value:true, message:'Please enter Details!'}})}/>
          <small className='form-text text-danger'>{errors?.pending_since_date && errors.pending_since_date.message}</small>
          <br/>
          <br/>
          <center><input type='submit' value='SUBMIT' className='btn btn-outline-success col-4 btn-lg me-4'/>
          <input type='reset' value='RESET' className='btn btn-outline-warning col-4 btn-lg float-right'/></center>
 
    </form>
    </div>
    
    </>
  )
}

export default Defualter