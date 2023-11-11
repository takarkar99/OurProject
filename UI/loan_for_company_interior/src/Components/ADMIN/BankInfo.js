import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

const BankInfo = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = async (data)=>{
        let form_data = new FormData();
        form_data.append('passbook_copy', data.passbook_copy[0]);
        form_data.append("user", data.user)
        form_data.append("bank_name", data.bank_name)
        form_data.append("ifsc_code", data.ifsc_code)
        form_data.append("current_account_no", data.current_account_no)
        await axios.post("http://localhost:8000/api/bank/", form_data, {headers: {'Content-Type': "multipart/form-data"}})
    }

  return (
    <div className='container'>
      <form method='post' onSubmit={handleSubmit(onSubmit)}>
        <center><h2>BANK INFORMATION</h2></center>
        <label htmlFor='user'>USER</label>
        <input type='number' id='user' name='user' {...register("user", {required:{value:true, message:"Please enter the user name"}})} className='form-control'/>
        <small className='form-text text-danger'>{errors?.user && errors.user.message}</small>
        <br/><br/>
        <label htmlFor='bank_name'>BANK NAME</label>
        <input type='text' id='bank_name' name='bank_name' {...register("bank_name", {required:{value:true, message:"Please enter your bank name!"}})} className='form-control'/>
        <small className='form-text text-danger'>{errors?.bank_name && errors.bank_name.message}</small>
        <br/><br/>
        <label htmlFor='current_account_no'>CURRENT ACCOUNT NUMBER</label>
        <input type='text' id='current_account_no' name='current_account_no' {...register("current_account_no", {required:{value:true, message:"Please enter your current account number!"}})} className='form-control'/>
        <small className='form-text text-danger'>{errors?.current_account_no && errors.current_account_no.message}</small>
        <br/><br/>
        <label htmlFor='ifsc_code'>IFSC CODE</label>
        <input type='text' id='ifsc_code' name='ifsc_code'{...register("ifsc_code", {required:{value:true, message:"Please enter your bank IFSC CODE!"}})} className='form-control'/>
        <small className='form-text text-danger'>{errors?.ifsc_code && errors.ifsc_code.message}</small>
        <br/><br/>
        <label htmlFor='passbook_copy'>PASSBOOK CODE</label>
    
        <input type='file' id='passbook_copy' accept='image/jpeg, image/png, image/gif'  name='passbook_copy' {...register("passbook_copy",{validate:(value)=>{
                                                                                                   const fileTypes = ["jpg", "png", "jpeg"];
                                                                                                   const fileType = value[0].name.split(".")[1];
                                                                                                   if (!fileTypes.includes(fileType)){
                                                                                                    return `please upload a valid file format. (${fileTypes})`;
                                                                                                   }}})} className='form-control'/> 
        <small className='form-text text-danger'>{errors?.passbook_copy && errors.passbook_copy.message}</small>
        <br/><br/>
        <input type='submit' value='SUBMIT' className='btn btn-outline-success col-6 btn-lg'/>
        <input type='reset' value='RESET' className='btn btn-outline-warning col-6 btn-lg'/>
        <label></label>
      </form>
    </div>
  )
}

export default BankInfo
