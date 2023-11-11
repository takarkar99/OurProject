
import { useForm } from 'react-hook-form'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function ApplicationUpdate() {

    const navigate = useNavigate();

    const {userId} = useParams();

    const [user, setUser] = useState({});

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    const fetchUser = async () => {
        console.log(userId);
        const result = await axios.get(`http://localhost:8000/application/applicationdetail/${userId}/`);
        setUser({...user, ...result.data});
        console.log(result.data);
    }
  
    const onFormSubmit = (data) => {
        axios.put(`http://localhost:8000/application/applicationdetail/${userId}/`, data);
        navigate('/applicationshow');
    }


    const registerOptions = {

        //AADHAR NUMBER Validations

        aadhaar_no: { required: "Aadhar Number is required!",
        minLength: {
            value: 12,
            message: "Aadhar no must have 12 characters!"
          },
          pattern: {
            value: /^[0-9]{12}$/,
            message: "AADHAR NUMBER Number should be in proper rules and regulations"
        }   },

        //PAN CARD Validations

        pan_no: { required: "PAN Number is required!",
        minLength: {
            value: 10,
            message: "Minimum length of PAN CARD is 10!"
        },
        pattern: {
            value: /([A-Z]){5}([0-9]){4}([A-Z]){1}$/,
            message: "PAN CARD Number should be in proper rules and regulations"
        }},

        //TYPE OF EMPLOYEMENT Valaidations

        type_of_employment: {
            required: "Please Select One!"
        },

        //BUSINESS TITLE Validations

        business_title: { 
            required: "Business Title is required!",
        minLength: {
            value:10,
            message: "Minimum lenght of Business Title is 10!"
        }},

        //BUSINESS TYPE VALIDATIONS

        business_type: { 
            required: "Please Select One!"
        },


        //BUSINESS ADDRESS Validations

        business_address: { 
            required: "Business Address is required!",
        minLength: {
            value:50,
            message: "Minimum lenght of Business Title is 50!"
        }},

        //GST NO Validations

        gst_registration_no: { required: "GST Number is required!",
        minLength: {
            value: 15,
            message: "Minimum length of GST Number is 15!"
        },
        pattern: {
            value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
            message: "GST Number should be in proper rules and regulations"
        }},

        //BUSINESS LICENSE Validations

        business_license_no: { 
            required: "Business License is required!",
        minLength: {
            value:21,
            message: "Minimum lenght of Business Title is 21!"
        }},

        //EXPECTED AVERAGE ANNUAL TURNOVER Validations

        expected_average_annual_turnover: { 
            required: "Expected Average Annual Turnover is required!"
        },

        //YEARS IN CURRENT BUSINESS Validations

        years_in_current_business: {
            required: "Years In Current Business is required!"
        },

        //COLLATERAL Validations

        collateral: {
            required: "Collateral is required!"
        },

        //APPLICATION STATUS VALIDATIONS

        status: {
            required: "Please Select One!"
        },


        //APPLICATION TIME STAMP Validations

        application_timestamp: {
            required: "Application Time Stamp is required!"
        },

        //REMARK Validations

        remark: {
            required: "Remark is required!"
        }
        };
    useEffect(()=>{
        fetchUser();
    },[])
  return (
    <>
    <div className='container'>
        <center><h1><u>UPDATE APPLICATION FORM</u></h1></center>
        <button type='button' onClick={() => { setValue("user", user.user);
                                                    setValue("aadhaar_no", user.aadhaar_no);
                                                    setValue("pan_no", user.pan_no);
                                                    setValue("type_of_employment", user.type_of_employment);
                                                    setValue("business_title", user.business_title);
                                                    setValue("business_type", user.business_type);
                                                    setValue("business_address", user.business_address);
                                                    setValue("gst_registration_no", user.gst_registration_no);
                                                    setValue("business_license_no", user.business_license_no);
                                                    setValue("expected_average_annual_turnover", user.expected_average_annual_turnover);
                                                    setValue("years_in_current_business", user.years_in_current_business);
                                                    setValue("collateral", user.collateral);
                                                    setValue("status", user.status);
                                                    setValue("application_timestamp", user.application_timestamp);
                                                    setValue("remark", user.remark);  
                                                    }}>
                                                    GET Values for {user.user}
                                                    </button>
        <form method='post' onSubmit={handleSubmit(onFormSubmit)}>
            <label htmlFor='uid'><b>USER ID:</b></label>
            <input type='number' id='uid' name='user'
            {...register('user', registerOptions.user)} 
            placeholder='eg.1' className='form-control'/>
            <small className='text-danger'>
            {errors?.user && errors.user.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='an'><b>AADHAR NUMBER:</b></label>
            <input type='number' id='an' name='aadhaar_no' {...register('aadhaar_no', registerOptions.aadhaar_no)} placeholder='eg.3445 4578 4587' className='form-control'/>
            <small className='text-danger'>
            {errors?.aadhaar_no && errors.aadhaar_no.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='pn'><b>PAN CARD NUMBER:</b></label>
            <input type='text' id='pn' name='pan_no' {...register('pan_no', registerOptions.pan_no)} placeholder='eg.CRF2B43' className='form-control' />
            <small className='text-danger'>
            {errors?.pan_no && errors.pan_no.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='toe'><b>TYPE OF EMPLOYEMENT:</b></label>
            <select name='type_of_employment' {...register('type_of_employment', registerOptions.type_of_employment)} id='toe' className='form-control'>
                <option value=''>SELECT</option>
                <option value='SELF_EMPLOYED'>SELF_EMPLOYED</option>
                <option value='SALARIED'>SALARIED</option>
            </select>
            <small className='text-danger'>
            {errors?.type_of_employment && errors.type_of_employment.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='bt'><b>BUSINESS TITLE:</b></label>
            <input type='text' id='bt' name='business_title' {...register('business_title', registerOptions.business_title)} placeholder='eg.Food Industry' className='form-control'/>
            <small className='text-danger'>
            {errors?.business_title && errors.business_title.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='btype'><b>BUSINESS TYPE:</b></label>
            <select name='business_type' {...register('business_type', registerOptions.business_type)} id='btype' className='form-control'>
                <option value=''>SELECT</option>
                <option value='MANUFACTURING'>MANUFACTURING</option>
                <option value='SERVICE'>SERVICE</option>
                <option value='TRADING'>TRADING</option>
            </select>
            <small className='text-danger'>
            {errors?.business_type && errors.business_type.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='baddr'><b>BUSINESS ADDRESS:</b></label>
            <input type='text' id='baddr' name='business_address' {...register('business_address', registerOptions.business_address)} placeholder='eg.Chakan, pune' className='form-control' />
            <small className='text-danger'>
            {errors?.business_address && errors.business_address.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='grn'><b>GTS REGISTRATION NUMBER:</b></label>
            <input type='text' id='grn' name='gst_registration_no' {...register('gst_registration_no', registerOptions.gst_registration_no)} placeholder='eg.18AABCU9603R1ZM.' className='form-control' />
            <small className='text-danger'>
            {errors?.gst_registration_no && errors.gst_registration_no.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='bln'><b>BUSINESS LICENSE NUMBER:</b></label>
            <input type='text' id='bln' name='business_license_no' {...register('business_license_no', registerOptions.business_license_no)} placeholder='eg.U72200MH2009PLC123456' className='form-control' />
            <small className='text-danger'>
            {errors?.business_license_no && errors.business_license_no.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='eaat'><b>EXPECTED AVERAGE ANNUAL TURNOVER:</b></label>
            <input type='text' id='eaat' name='expected_average_annual_turnover' {...register('expected_average_annual_turnover', registerOptions.expected_average_annual_turnover)} placeholder='eg.3cr' className='form-control' />
            <small className='text-danger'>
            {errors?.expected_average_annual_turnover && errors.expected_average_annual_turnover.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='yicb'><b>YEARS IN CURRENT BUSINESS:</b></label>
            <input type='number' id='yicb' name='years_in_current_business' {...register('years_in_current_business', registerOptions.years_in_current_business)} placeholder='eg.3' className='form-control' />
            <small className='text-danger'>
            {errors?.years_in_current_business && errors.years_in_current_business.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='c'><b>COLLATERAL:</b></label>
            <input type='text' id='c' name='collateral' {...register('collateral', registerOptions.collateral)} placeholder='eg.20LAC' className='form-control' />
            <small className='text-danger'>
            {errors?.collateral && errors.collateral.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='at'><b>APPLICATION STATUS:</b></label>
            <select name='status' {...register('status', registerOptions.status)} id='at' className='form-control'>
                <option value=''>SELECT</option>
                <option value='GENERATED'>GENERATED</option>
                <option value='DOCUMENT_VERIFIED'>DOCUMENT VERIFIED</option>
                <option value='SANCTIONED'>SANCTIONED</option>
                <option value='DISBURST'>DISBURST</option>
                <option value='REJECTED'>REJECTED</option>
            </select>
            <small className='text-danger'>
            {errors?.status && errors.status.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='ats'><b>APPLICATION TIME STAMP:</b></label>
            <input type='date' id='ats' name='application_timestamp' {...register('application_timestamp', registerOptions.application_timestamp)} placeholder='eg.' className='form-control' />
            <small className='text-danger'>
            {errors?.application_timestamp && errors.application_timestamp.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='r'><b>REMARK:</b></label>
            <input type='text' id='r' name='remark' {...register('remark', registerOptions.remark)} placeholder='eg.' className='form-control' />
            <small className='text-danger'>
            {errors?.remark && errors.remark.message}
            </small>
            <br/>
            <br/>
            <input type='submit' value='ADD APPLICATION' className='btn btn-outline-success col-6 btn-lg'/>
            <input type='reset' value='RESET APPLICATION' className='btn btn-outline-warning col-6 btn-lg'/>
        </form>
    </div>
    
    </>
  )
}

export default ApplicationUpdate