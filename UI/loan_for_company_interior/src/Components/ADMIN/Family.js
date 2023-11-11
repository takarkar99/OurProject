import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom';
import authHeader from '../HEADERS/authHeader';

function Family() {
    const {register, handleSubmit, formState:{errors}, setValue} = useForm();
    const {userId} = useParams()

    const onSubmit = (data) => {
      const auth = authHeader()
      axios.post("http://127.0.0.1:8000/api/family/", data, {headers: {...auth}})
      console.log(authHeader())
      console.log({...auth})
    }

  return (
    <div>
        <div className='container jumbotron' style={{backgroundColor:"rgb(232, 233, 225)"}}>
      <center><h3>FAMILY FORM</h3></center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='userid'>Your User Id</label>
        <input type='number' className='form-control' id='userid' name='user'
        {...register('user')}
        value={userId}
        //{...setValue('user', userId)}
        ></input><br></br>
        <label htmlFor='father_name'>Father Name</label>
        <input 
          type='text' 
          id='father_name' 
          name='father_name' 
          className="form-control" 
          {...register('father_name',{required:{value:true, message:'Please enter your father name!'}})} />
        <small className='form-text text-danger'>{errors?.father_name && errors.father_name.message}</small>
        <br/><br/>
        <label htmlFor='mother_name'>Mother Name</label>
        <input 
          type='text' 
          id='mother_name' 
          name='mother_name' 
          {...register('mother_name',{required:{value:true, message:"Please enter your mother name!"}})} 
          className='form-control' />
        <small className='form-text text-danger'>{errors?.mother_name && errors.mother_name.message}</small>
        <br/><br/>
        <label htmlFor='mother_profession'>Mother Profession</label>
        <input 
          type='text' 
          id='mother_profession' 
          name='mother_profession' className='form-control' 
          {...register('mother_profession',{required:{value:true, message:"Please enter your mother profession!"}})} />
        <small className='form-text text-danger'>{errors?.mother_profession && errors.mother_profession.message}</small>
        <br/><br/>
        <p>Marital Satus</p>
        <input type='radio' id='marital_status' name='marital_status' value='MARRIED' {...register('marital_status',{required:{value:true, message:"Please tell us your marital status!"}})} />
        <label htmlFor='maritial_status'>Married</label><br/>
        <input 
          type='radio' 
          id='maritial_status' 
          name='maritial_status' 
          value='UNMARRIED' 
          {...register('marital_status',{required:{value:true, message:"Please tell us your marital_status!"}})} />
        <label htmlFor='marital_status'>Unmarried</label><br/>
        <small className='form-text text-danger'>{errors?.marital_status && errors.marital_status.message}</small>
        <br/><br/>
        <label htmlFor='spouse_name'>Spouse Name</label>
        <input 
          type='text' 
          id='spouse_name' 
          name='spouse_name' 
          {...register('spouse_name',{required:{value:true, message:"Please enter your spouse name!"}})} 
          className='form-control'/>
        <small className='form-text text-danger'>{errors?.spouse_name && errors.spouse_name.message}</small>
        <br/><br/>
        <label htmlFor='spouse_profession'>Spouse Profession</label>
        <input 
          type='text' 
          id='spouse_profession' 
          name='spouse_profession' 
          className='form-control' 
          {...register('spouse_profession',{required:{value:true, message:"Please enter your spouse profession!"}})} />
        <small className='form-text text-danger'>{errors?.spouse_profession && errors.spouse_profession.message}</small>
        <br/><br/>
        <label htmlFor='mobile'>Mobile</label>
        <input 
          type='text' 
          id='mobile' 
          name='mobile' 
          {...register('mobile',{required:{value:true, message:"Please enter your 10 digits mobile number!"}})} 
          className='form-control' />
        <small className='form-text text-danger'>{errors?.mobile && errors.mobile.message}</small>
        <br/><br/>
        <label htmlFor='address'>Address</label>
        <input 
          type='text' 
          id='address' 
          name='address' 
          {...register('address',{required:{value:true, message:"Please enter your address!"}})} 
          className='form-control'/>
        <small className='form-text text-danger'>{errors?.address && errors.address.message}</small>
        <br/><br/>
        <input type='submit' value='SUBMIT' className='btn btn-outline-success col-6'/>
        <input type='reset' value='RESET' className='btn btn-outline-warning col-6'/>
      </form>
    </div>
    </div>
  )
}

export default Family