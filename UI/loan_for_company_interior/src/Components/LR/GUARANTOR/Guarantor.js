import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { NavLink, useNavigate, useParams } from 'react-router-dom';


function Guarantor() {

    const {userId} = useParams();

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onFormSubmit = async (data) => {
        let form_data = new FormData();
        form_data.append("application", data.application)
        form_data.append("relation_with_customer", data.relation_with_customer)
        form_data.append("name", data.name)
        form_data.append("dob", data.dob)
        form_data.append("gender", data.gender)
        form_data.append("email", data.email)
        form_data.append("address", data.address)
        form_data.append("city", data.city)
        form_data.append("state", data.state)
        form_data.append("country", data.country)
        form_data.append("pin_code", data.pin_code)
        form_data.append("mobile", data.mobile)
        form_data.append("photo", data.photo[0])
        form_data.append("profession", data.profession)
        form_data.append("income_certificate", data.income_certificate[0])
        form_data.append("bank_name", data.bank_name)
        form_data.append("current_account_no", data.current_account_no)
        form_data.append("passbook_copy", data.passbook_copy[0])
        form_data.append("ifsc_code", data.ifsc_code)
        await axios.post('http://localhost:8000/application/guarantorcreate/', form_data, {headers: {'Content-Type': "multipart/form-data"}});
        navigate('/applicationshow');
    }
    

    const registerOptions = {
        //Relation With Customer Validations

        relation_with_customer: {
            required: "This Field is Required!"
        },

        //Name Validations

        name: {
            required: "This Field is Required!"
        },

        //DOB Validations

        dob: {
            required: "This Field is Required!"
        },

        //APPLICATION STATUS VALIDATIONS

        gender: {
            required: "Please Select One!"
        },

         //Email Validations

         email: { required: "Email is required!",
         pattern: {
            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: "Email should be in proper rules and regulations"
        }},

        //Address Validations

        address: {
            required: "This Field is Required!"
        },

        //City Validations

        city: {
            required: "This Field is Required!"
        },

        //State Validations

        state: {
            required: "This Field is Required!"
        },

        //Country Validations

        country: {
            required: "This Field is Required!"
        },

        //Pin Code Validations

        pin_code: { required: "PIN Code is required!",
        minlength: {
            value: 6,
            message: "Minimum length of PIN Code is 6!"
        }
         },

        //Mobile No. Validations

        mobile: { required: "Mobile No. is required!",
        minLength: {
            value: 10,
            message: "Minimum length of Mobile No. is 10!"
        }
         },

        //Photo Validations

        photo: {
            required: "This Field is Required!"
        },

        //Profession Validations

        profession: {
            required: "This Field is Required!"
        },

        //Income Certificate Validations

        income_certificate: {
            required: "This Field is Required!"
        },

        //Bank Name Validations

        bank_name: {
            required: "This Field is Required!"
        },

        //Current Account No. Validations

        current_account_no: { required: "Current Account No. is required!",
        minLength: {
            value: 15,
            message: "Minimum length of Current Account No. is 15!"
        }
         },

        //Passbook Copy Validations

        passbook_copy: {
            required: "This Field is Required!"
        },

       //IFSC Code Validations

       ifsc_code: { required: "IFSC Code is required!",
       minlength: {
           value: 11,
           message: "Minimum length of IFSC Code is 11!"
       },
       pattern: {
           value: /^[A-Z]{4}0[A-Z0-9]{6}$/,
           message: "IFSC Code should be in proper rules and regulations"
       }},

    };
    return (
      <>
      <div className='container'>
          <center><h1><u>GUARANTOR FORM</u></h1></center>
          <form method='post' onSubmit={handleSubmit(onFormSubmit)}>
          <label htmlFor='aid'>Application ID</label>
            <input type='number' id='aid' name='application' value={userId} className='form-control' 
            {...register('application', { required: "First name is required" })} />
            <br />
            <br />
              <label htmlFor='rwc'><b>RELATION WITH CUSTOMER:</b></label>
              <input type='text' id='rwc' name='relation_with_customer' {...register('relation_with_customer', registerOptions.relation_with_customer)} className='form-control' />
              <small className='text-danger'>
              {errors?.relation_with_customer && errors.relation_with_customer.message}
              </small>
              <br/>
              <br/>
              <label htmlFor='nm'><b>NAME:</b></label>
              <input type='text' id='nm' name='name'{...register('name', registerOptions.name)} className='form-control' />
              <small className='text-danger'>
              {errors?.name && errors.name.message}
              </small>
              <br/>
              <br/>
              <label htmlFor='dob'><b>DOB:</b></label>
              <input type='date' id='dob' name='dob' {...register('dob', registerOptions.dob)} className='form-control' />
              <small className='text-danger'>
              {errors?.dob && errors.dob.message}
              </small>
              <br/>
              <br/>
              <label htmlFor='gn'><b>GENDER:</b></label>
              <select name='gender'  {...register('gender', registerOptions.gender)} id='gn' className='form-control'>
                  <option value=''>SELECT</option>
                  <option value='MALE'>MALE</option>
                  <option value='FEMALE'>FEMALE</option>
                  <option value='TRANSGENDER'>TRANSGENDER</option>
              </select>
              <small className='text-danger'>
              {errors?.gender && errors.gender.message}
              </small>
              <br/>
              <br/>
              <label htmlFor='mail'><b>EMAIL:</b></label>
              <input type='email' id='mail' name='email'{...register('email', registerOptions.email)} placeholder='eg. admin@gmail.com' className='form-control' />
              <small className='text-danger'>
              {errors?.email && errors.email.message}
              </small>
              <br/>
              <br/>
              <label htmlFor='add'><b>ADDRESS:</b></label>
              <input type='textarea' id='add' name='address' {...register('address', registerOptions.address)} className='form-control' /> 
              <small className='text-danger'>
              {errors?.address && errors.address.message}
              </small>
              <br/>
              <br/>
              <label htmlFor='city'><b>CITY:</b></label>
              <input type='text' id='city' name='city' {...register('city', registerOptions.city)} placeholder='eg. mumbai' className='form-control' />
              <small className='text-danger'>
              {errors?.city && errors.city.message}
              </small>
              <br/>
              <br/>
              <label htmlFor='st'><b>STATE:</b></label>
              <input type='text' id='st' name='state' {...register('state', registerOptions.state)} placeholder='eg.Maharashtra' className='form-control' />
              <small className='text-danger'>
              {errors?.state && errors.state.message}
              </small>
              <br/>
              <br/>
              <label htmlFor='country'><b>COUNTRY:</b></label>
              <input type='text' id='country' name='country' {...register('country', registerOptions.country)} placeholder='eg.India' className='form-control' />
              <small className='text-danger'>
              {errors?.country && errors.country.message}
              </small>
              <br/>
              <br/>
              <label htmlFor='pin_code'><b>PIN CODE:</b></label>
              <input type='number' id='pin_code' name='pin_code' {...register('pin_code', registerOptions.pin_code)} placeholder='eg.400030' className='form-control' />
              <small className='text-danger'>
              {errors?.pin_code && errors.pin_code.message}
              </small>
              <br/>
              <br/>
              <label htmlFor='mb'><b>MOBILE:</b></label>
              <input type='text' id='mb' name='mobile' {...register('mobile', registerOptions.mobile)} placeholder='eg.8767867655' className='form-control' />
              <small className='text-danger'>
              {errors?.mobile && errors.mobile.message}
              </small>
              <br/>
              <br/>
              <label htmlFor='ph'><b>PHOTO:</b></label>
              <input type='file' id='ph' name='photo' {...register('photo', registerOptions.photo)} className='form-control' />
              <small className='text-danger'>
              {errors?.photo && errors.photo.message}
              </small>
              <br/>
              <br/>
              <label htmlFor='prof'><b>PROFESSION:</b></label>
              <input type='text' id='prof' name='profession'{...register('profession', registerOptions.profession)} className='form-control' />
              <small className='text-danger'>
              {errors?.profession && errors.profession.message}
              </small>
              <br/>
              <br/>
              <label htmlFor='ic'><b>INCOME CERTIFICATE:</b></label>
              <input type='file' id='ic' name='income_certificate' {...register('income_certificate', registerOptions.income_certificate)} className='form-control' />
              <small className='text-danger'>
              {errors?.income_certificate && errors.income_certificate.message}
              </small>
              <br/>
              <br/>
              <label htmlFor='bn'><b>BANK NAME:</b></label>
              <input type='text' id='bn' name='bank_name' {...register('bank_name', registerOptions.bank_name)} placeholder='eg.SBI' className='form-control' />
              <small className='text-danger'>
              {errors?.bank_name && errors.bank_name.message}
              </small>
              <br/>
              <br/>
              <label htmlFor='can'><b>CURRENT ACCOUNT NO:</b></label>
              <input type='text' id='can' name='current_account_no' {...register('current_account_no', registerOptions.current_account_no)} className='form-control' />
              <small className='text-danger'>
              {errors?.current_account_no && errors.current_account_no.message}
              </small>
              <br/>
              <br/>
              <label htmlFor='pb'><b>PASSBOOK COPY:</b></label>
              <input type='file' id='pb' name='passbook_copy' {...register('passbook_copy', registerOptions.passbook_copy)} className='form-control' />
              <small className='text-danger'>
              {errors?.passbook_copy && errors.passbook_copy.message}
              </small>
              <br/>
              <br/>
              <label htmlFor='ifsc'><b>IFSC CODE:</b></label>
              <input type='text' id='ifsc' name='ifsc_code' {...register('ifsc_code', registerOptions.ifsc_code)} className='form-control' />
              <small className='text-danger'>
              {errors?.ifsc_code && errors.ifsc_code.message}
              </small>
              <br/>
              <br/>
              <input type='submit' value='ADD GUARANTOR' className='btn btn-outline-success col-6 btn-lg'/>
              <NavLink><input type='reset' value='RESET GUARANTOR' className='btn btn-outline-warning col-6 btn-lg'/></NavLink>
          </form>
      </div>
      
      </>
    )
  }
  
  export default Guarantor

