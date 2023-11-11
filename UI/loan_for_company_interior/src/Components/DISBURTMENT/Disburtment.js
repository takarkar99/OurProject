import React from 'react';
import {useForm} from 'react-hook-form';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';


function Disburstment() {
  const navigate = useNavigate();

    const {userId} = useParams();

  const{register, handleSubmit, formState:{errors}} = useForm();

  const onSubmit = (data) => {
    let form_data = new FormData()
    form_data.append("loan", data.loan)
    form_data.append("insurance_doc", data.insurance_doc[0])
    form_data.append("payment_mode", data.payment_mode)
    form_data.append("net_disbursed_amount",data.net_disbursed_amount)
    form_data.append("disbursed_to_account_no", data.disbursed_to_account_no)
    form_data.append("receipt_doc", data.receipt_doc[0])
    form_data.append("status", data.status)
    form_data.append("response_timestamp", data.response_timestamp)
    console.log(form_data)
    axios.post("http://localhost:8000/disburstment/disburstmentcreate/", form_data ,{headers:{"Content-Type":"multipart/form-data"}}).then((response) => {return(response.data);
   }).catch(error => {console.log(error.data)})
    console.log("data", data);
    navigate('/loanshow');
 }

  return (
    <>
     <div className='container' style={{backgroundColor:"rgb(232, 233, 225)"}}>
        <br/>
        
        <form method="post"  onSubmit={handleSubmit(onSubmit)}>
        <center><h3 style={{color:"green"}}>Disburstment Details</h3></center>

          <label htmlFor='loan'>LOAN:</label>
          <input type='text' id='loan' name='loan' value={userId} className='form-control'
          {...register('loan',{required:{value:true, message:'Please enter Details!'}})} />
          <small className='form-text text-danger'>{errors?.loan && errors.loan.message}</small>
          <br/>
          <br/>
          <label htmlFor='insurance_doc'>INSURANCE DOCUMENT:</label>
          <input type='file' id='insurance_doc' name='insurance_doc' 
          {...register('insurance_doc',{validate:(value)=>{
          const fileTypes = ["pdf"];
          const fileType = value[0].name.split(".")[1];
          if (!fileTypes.includes(fileType)){
            return `Please upload a valid file formate.(${fileTypes})`;
          }}})} className='form-control'/>
          <small className='form-text text-danger'>{errors?.insurance_doc && errors.insurance_doc.message}</small>
          <br/>
          <br/>
          <label htmlFor='payment_mode'>PAYMENT MODE:</label>
          <select type='text' id='payment_mode' name='payment_mode' {...register("payment_mode")} className='form-control'>
          <option value="select" style={{"color":"green"}}>SELECT</option>
          <option value="NEFT">NEFT</option>
          <option value="RTGS">RTGS</option>
          <option value="IMPS">IMPS</option>
          </select>
          <small className='form-text text-danger'>{errors?.payment_mode && errors.payment_mode.message}</small>
          <br/>
          <br/>
          <label htmlFor='net_disbursed_amount'>NET DISBURSED AMOUNT:</label>
          <input type='number' id='net_disbursed_amount' name='net_disbursed_amount'className='form-control'
          {...register('net_disbursed_amount',{required:{value:true, message:'Please enter Details!'}})} />
          <small className='form-text text-danger'>{errors?.net_disbursed_amount && errors.net_disbursed_amount.message}</small>
          <br/>
          <label htmlFor='disbursed_to_account_no'>DISBURSED TO ACCOUNT NO:</label>
          <input type='number' id='disbursed_to_account_no' name='disbursed_to_account_no' className='form-control' 
          {...register('disbursed_to_account_no',{required:{value:true, message:'Please enter Details!'}})}/>
          <small className='form-text text-danger'>{errors?.disbursed_to_account_no && errors.disbursed_to_account_no.message}</small>
          <br/>
          <br/>
          <label htmlFor='receipt_doc'>RECEPT DOCUMENT:</label>
          <input type='file' id='receipt_doc' name='receipt_doc'
          {...register('disbursed_to_account_no',{required:{value:true, message:'Please enter Details!'}})}
          
           {...register('receipt_doc',{validate:(value)=>{
            const fileTypes = ["pdf"];
            const fileType = value[0].name.split(".")[1];
            if (!fileTypes.includes(fileType)){
              return `Please upload a valid file formate.(${fileTypes})`;
            }}})}
          className='form-control' />
          <small className='form-text text-danger'>{errors?.receipt_doc && errors.receipt_doc.message}</small>
          <br/>
          <br/>
          <label htmlFor='status'>STATUS: </label>
                    <select name="status" id="status" className='form-control' {...register('status',{required: 'Select Your Role'})}>
                    <option value=""></option>
                    <option value="PENDING">PENDING</option>
                    <option value="DISBURST">DISBURST</option>                    
                    </select>
                    {errors.status && <span className='text-danger'>{errors.status.message}</span>}
                <br />
                <br />
            <label htmlFor='response_timestamp'>RESPONSE TIMESTAMP:</label>
          <input type='date' id='response_timestamp' name='response_timestamp' className='form-control' 
          {...register('response_timestamp',{required:{value:true, message:'Please enter Details!'}})}/>
          <small className='form-text text-danger'>{errors?.response_timestamp && errors.response_timestamp.message}</small>
          <br/>
          <br/>
          <center><input type='submit' value='SUBMIT' className='btn btn-outline-success col-4 btn-lg me-4'/>
          <input type='reset' value='RESET' className='btn btn-outline-warning col-4 btn-lg float-right'/></center>
 
    </form>
    </div>
    
    </>
  )
}

export default Disburstment