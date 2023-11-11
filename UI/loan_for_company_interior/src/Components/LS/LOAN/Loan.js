import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function Loan() {

  const {userId} = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onFormSubmit = async (data) => {
    let form_data = new FormData();
    form_data.append("application", data.application)
    form_data.append("loan_principal_amount", data.loan_principal_amount)
    form_data.append("loan_tenure", data.loan_tenure)
    form_data.append("interest_rate", data.interest_rate)
    form_data.append("total_amount_and_processing_fees", data.total_amount_and_processing_fees)
    form_data.append("installment", data.installment)
    form_data.append("maturity_date", data.maturity_date)
    form_data.append("sanction_letter", data.sanction_letter[0])
    form_data.append("status", data.status)
    form_data.append("response_timestamp", data.response_timestamp)
    form_data.append("remark", data.remark)
    await axios.post('http://localhost:8000/loansanction/loancreate/', form_data, {headers: {'Content-Type': "multipart/form-data"}});
    navigate('/loanshow');
}

    const registerOptions = {
      // Loan Principle Amount Validations
      loan_principal_amount: {
        required: "Loan Principle Amount is required !",
        min: {
          value: 99999,
          message: "Loan Amount >= 1,00,000"
        }
      },

      // Loan Tenure Validations
      loan_tenure: {
        required: "Loan Tenure is required !"
      },

      // Interest Rate Validations
      interest_rate: {
        required: "Interest Rate is required !"
      },

      // Total Amount And Processing Fees Validations
      total_amount_and_processing_fees: {
        required: "Total Amount And Processing Fees is required !"
      },

      // Installment Validations
      installment: {
        required: "Installment is required !"
      },

      // Maturity Date Validations
      maturity_date:{
        required: "Maturity Date is required"
        
      },

      // SANCTION LETTER VALIDATIONS
      sanction_letter:{
        required: "This field is required!"
      },

      // Status Validations
      status:{
        required: "Select Status !"
      },

      //response_timestamp valiadtions
      response_timestamp: {
        required: "This field is required!"
      },

      // Remark Validations
      remark:{
        required: "Remark is required !"
      },
    
      };
   
  return (
    <>
        <div className='container'>
            <center><h1><u>LOAN FORM</u></h1></center>
            <form method='post' onSubmit={handleSubmit(onFormSubmit)}>
            <label htmlFor='aid'>Application ID</label>
            <input type='number' id='aid' name='application' value={userId} className='form-control' 
            {...register('application', { required: "First name is required" })} />
            <br />
            <br />
                <label htmlFor='lpa'><b>LOAN PRINCIPLE AMOUNT:</b></label>
                <input type='number' id='lpa' name='loan_principal_amount' {...register('loan_principal_amount', registerOptions.loan_principal_amount)} placeholder='eg.1,00,000' className='form-control' />
                  <small className='text-danger'>
                    {errors?.loan_principal_amount && errors.loan_principal_amount.message}
                  </small>
                <br/>
                <br/>
                <label htmlFor='lt'><b>LOAN TENURE:</b></label>
                <input type='number' id='lt' name='loan_tenure' {...register('loan_tenure', registerOptions.loan_tenure)} placeholder='eg.3 Month' className='form-control' />
                  <small className='text-danger'>
                    {errors?.loan_tenure && errors.loan_tenure.message}
                  </small>
                <br/>
                <br/>
                <label htmlFor='ir'><b>INTEREST RATE:</b></label>
                <input type='number' name='interest_rate' id='ir' {...register('interest_rate', registerOptions.interest_rate)} placeholder='eg.10%' className='form-control' />
                  <small className='text-danger'>
                    {errors?.interest_rate && errors.interest_rate.message}
                  </small>
                <br/>
                <br/>
                <label htmlFor='taapf'><b>TOTAL AMOUNT AND PROCESSING FEES:</b></label>
                <input type='number' id='taapf' name='total_amount_and_processing_fees' {...register('total_amount_and_processing_fees', registerOptions.total_amount_and_processing_fees)} placeholder='eg.110000+5000' className='form-control' />
                  <small className='text-danger'>
                    {errors?.total_amount_and_processing_fees && errors.total_amount_and_processing_fees.message}
                  </small>
                <br/>
                <br/>
                <label htmlFor='ins'><b>INSTALLMENT:</b></label>
                <input type='number' name='installment' id='ins' {...register('installment', registerOptions.installment)} placeholder='eg.10000' className='form-control' />
                  <small className='text-danger'>
                    {errors?.installment && errors.installment.message}
                  </small>
                <br/>
                <br/>
                <label htmlFor='md'><b>MATURITY DATE:</b></label>
                <input type='date' id='md' name='maturity_date' {...register('maturity_date', registerOptions.maturity_date)} className='form-control' />
                  <small className='text-danger'>
                    {errors?.maturity_date && errors.maturity_date.message}
                  </small>
                  <label htmlFor='sl'><b>SANCTION LATTER:</b></label>
                <input type='file' id='sl' name='sanction_letter' {...register('sanction_letter', registerOptions.sanction_letter)} className='form-control' />
                  <small className='text-danger'>
                  {errors?.sanction_letter && errors.sanction_letter.message}
                  </small>
                <br/>
                <br/>
                <label htmlFor='sta'><b>STATUS:</b></label>
                <select name='status' id='sta' {...register('status', registerOptions.status)} className='form-control'>
                    <option value=''>SELECT</option>
                    <option value='PENDING'>PENDING</option>
                    <option value='DONE'>DONE</option>
                    <option value='REJECTED'>REJECTED</option>
                </select>
                  <small className='text-danger'>
                    {errors?.status && errors.status.message}
                  </small>
                <br/>
                <br/>
                <label htmlFor='rts'><b>RESPONSE TIME STAMP:</b></label>
                <input type='date' id='rts' name='response_timestamp' {...register('response_timestamp', registerOptions.response_timestamp)} className='form-control' />
                <small className='text-danger'>
                    {errors?.response_timestamp && errors.response_timestamp.message}
                  </small>
                <br/>
                <br/>
                <label htmlFor='rem'><b>REMARK:</b></label>
                <input type='text' id='rem' name='remark' {...register('remark', registerOptions.remark)} placeholder='eg.' className='form-control' />
                  <small className='text-danger'>
                    {errors.remark && errors.remark.message}
                  </small>
                <br/>
                <br/>
                <input type='submit' value='SUBMIT' className='btn btn-outline-success col-6 btn-lg'/>
                <input type='reset' value='RESET' className='btn btn-outline-warning col-6 btn-lg'/>
            </form>
        </div>
    </>
  )
}

export default Loan
