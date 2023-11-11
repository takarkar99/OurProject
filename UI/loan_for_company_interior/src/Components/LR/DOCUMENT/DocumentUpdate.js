
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const schema = yup.object().shape({
  
  //AADHAR CARD FILE VALIDATIONS
  aadhaar_card: yup.mixed()
    .test('required', "You need to provide a file", (value) =>{
      return value && value.length
    } )
    .test("fileSize", "The file is too large!! please give size in between 0 to 2MB", (value, context) => {
      return value && value[0] && value[0].size <= 2000000;
    }),

    //PAN CARD FILE VALIDATIONS

    pan_card: yup.mixed()
    .test('required', "You need to provide a file", (value) =>{
      return value && value.length
    } )
    .test("fileSize", "The file is too large!! please give size in between 0 to 2MB", (value, context) => {
      return value && value[0] && value[0].size <= 2000000;
    }),

    //BUSINESS ADDRESS PROOF OR COPY OF RENT AGREEMENT VALIDATIONS

    business_address_proof_or_copy_of_rent_agreement: yup.mixed()
    .test('required', "You need to provide a file", (value) =>{
      return value && value.length
    } )
    .test("fileSize", "The file is too large!! please give size in between 0 to 2MB", (value, context) => {
      return value && value[0] && value[0].size <= 2000000;
    }),

    //ELECTRICITY BILL VALIDATIONS

    electricity_bill: yup.mixed()
    .test('required', "You need to provide a file", (value) =>{
      return value && value.length
    } )
    .test("fileSize", "The file is too large!! please give size in between 0 to 2MB", (value, context) => {
      return value && value[0] && value[0].size <= 2000000;
    }),

    //MSME CERTIFICATE VALIDATION

    msme_certificate: yup.mixed()
    .test('required', "You need to provide a file", (value) =>{
      return value && value.length
    } )
    .test("fileSize", "The file is too large!! please give size in between 0 to 2MB", (value, context) => {
      return value && value[0] && value[0].size <= 2000000;
    }),

    //GST CERTIFICATE VALIDATIONS

    gst_certificate: yup.mixed()
    .test('required', "You need to provide a file", (value) =>{
      return value && value.length
    } )
    .test("fileSize", "The file is too large!! please give size in between 0 to 2MB", (value, context) => {
      return value && value[0] && value[0].size <= 2000000;
    }),

    //UDYOG AADHAR REGISTRATION VALIDATIONS

    udyog_aadhaar_registration: yup.mixed()
    .test('required', "You need to provide a file", (value) =>{
      return value && value.length
    } )
    .test("fileSize", "The file is too large!! please give size in between 0 to 2MB", (value, context) => {
      return value && value[0] && value[0].size <= 2000000;
    }),

    //BUSINESS LICENSE VALIDATIONS

    business_license: yup.mixed()
    .test('required', "You need to provide a file", (value) =>{
      return value && value.length
    } )
    .test("fileSize", "The file is too large!! please give size in between 0 to 2MB", (value, context) => {
      return value && value[0] && value[0].size <= 2000000;
    }),

    //BUSINESS PLAN OR PROPOSAL VALIDATIONS

    business_plan_or_proposal: yup.mixed()
    .test('required', "You need to provide a file", (value) =>{
      return value && value.length
    } )
    .test("fileSize", "The file is too large!! please give size in between 0 to 2MB", (value, context) => {
      return value && value[0] && value[0].size <= 2000000;
    }),

    //THREE YEAR ITR WITH BALANCE SHEET VALIDATIONS

    three_year_itr_with_balance_sheet: yup.mixed()
    .test('required', "You need to provide a file", (value) =>{
      return value && value.length
    } )
    .test("fileSize", "The file is too large!! please give size in between 0 to 2MB", (value, context) => {
      return value && value[0] && value[0].size <= 2000000;
    }),

    //COLLATERAL DOCUMENT VALIDATIONS

    collateral_document: yup.mixed()
    .test('required', "You need to provide a file", (value) =>{
      return value && value.length
    } )
    .test("fileSize", "The file is too large!! please give size in between 0 to 2MB", (value, context) => {
      return value && value[0] && value[0].size <= 2000000;
    }),

    //STAMP DUTY VALIDATIONS

    stamp_duty: yup.mixed()
    .test('required', "You need to provide a file", (value) =>{
      return value && value.length
    } )
    .test("fileSize", "The file is too large!! please give size in between 0 to 2MB", (value, context) => {
      return value && value[0] && value[0].size <= 2000000;
    })
    // .test("type", "We only support jpeg", function (value) {
    //   return value && value[0] && value[0].type === "image/jpeg/txt/pdf";
    // }),
});



function DocumentUpdate() {

    const navigate = useNavigate();

    const {userId} = useParams();

    const [user, setUser] = useState({});

    const { register, handleSubmit, setValue, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });

    const fetchUser = async () => {
        const result = await axios.get(`http://localhost:5000/users/${userId}`);
        setUser(result.data);
        console.log(user);
      }


    const onFormSubmit = (data) => {
        axios.post('http://127.0.0.1:8000/application/documentcreate/', data);
        navigate('documentshow');
    }

    useEffect(()=>{
        fetchUser();
    },[])

    return  (
     <>
    <div className='container'>
        <center><h1><u>DOCUMENT FORM</u></h1></center>

        <label htmlFor='aid'>Application ID</label>
            <input type='number' id='aid' name='application' value={userId} className='form-control' 
            {...register('application', { required: "First name is required" })} />

        <form method='post' onSubmit={handleSubmit(onFormSubmit)}>
        <button type='button' onClick={() => { setValue("aadhaar_card", user.aadhaar_card);
                                                    setValue("pan_card", user.pan_card);
                                                    setValue("business_address_proof_or_copy_of_rent_agreement", user.business_address_proof_or_copy_of_rent_agreement);
                                                    setValue("electricity_bill", user.electricity_bill);
                                                    setValue("msme_certificate", user.msme_certificate);
                                                    setValue("gst_certificate", user.gst_certificate);
                                                    setValue("udyog_aadhaar_registration", user.udyog_aadhaar_registration);
                                                    setValue("business_license", user.business_license);
                                                    setValue("business_plan_or_proposal", user.business_plan_or_proposal);
                                                    setValue("three_year_itr_with_balance_sheet", user.three_year_itr_with_balance_sheet);
                                                    setValue("collateral_document", user.collateral_document);
                                                    setValue("stamp_duty", user.stamp_duty);
                                                    setValue("status", user.status);
                                                    setValue("application_timestamp", user.application_timestamp);
                                                    setValue("remark", user.remark);  
                                                    }}>
                                                    GET Values for {user.aadhaar_card}
                                                    </button>
            <label htmlFor='ac'><b>AADHAR CARD:</b></label>
            <input type='file' id='ac' name='aadhaar_card' {...register("aadhaar_card")}  className='form-control' />
            <small className='text-danger'>
            {errors.aadhaar_card && errors.aadhaar_card.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='pc'><b>PAN CARD:</b></label>
            <input type='file' id='pc' name='pan_card' {...register("pan_card")} className='form-control' />
            <small className='text-danger'>
            {errors.pan_card && errors.pan_card.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='bap'><b>BUSINESS ADDRESS PROOF OR COPY OF RENT AGREEMENT :</b></label>
            <input type='file' id='bap' name='business_address_proof_or_copy_of_rent_agreement' {...register("business_address_proof_or_copy_of_rent_agreement")} className='form-control' />
            <small className='text-danger'>
            {errors.business_address_proof_or_copy_of_rent_agreement && errors.business_address_proof_or_copy_of_rent_agreement.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='eb'><b>ELECTRICITY BILL:</b></label>
            <input type='file' id='eb' name='electricity_bill' {...register("electricity_bill")} className='form-control' />
            <small className='text-danger'>
            {errors.electricity_bill && errors.electricity_bill.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='mc'><b>MSME CERTIFICATE:</b></label>
            <input type='file' id='mc' name='msme_certificate' {...register("msme_certificate")} className='form-control' />
            <small className='text-danger'>
            {errors.msme_certificate && errors.msme_certificate.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='gc'><b>GST CERTIFICATE:</b></label>
            <input type='file' id='gc' name='gst_certificate' {...register("gst_certificate")} className='form-control' />
            <small className='text-danger'>
            {errors.gst_certificate && errors.gst_certificate.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='uar'><b>UDYOG AADHAR REGISTRATION:</b></label>
            <input type='file' id='uar' name='udyog_aadhaar_registration' {...register("udyog_aadhaar_registration")}  className='form-control' />
            <small className='text-danger'>
            {errors.udyog_aadhaar_registration && errors.udyog_aadhaar_registration.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='bl'><b>BUSINESS LICENSE:</b></label>
            <input type='file' id='bl' name='business_license' {...register("business_license")}  className='form-control' />
            <small className='text-danger'>
            {errors.business_license && errors.business_license.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='bpp'><b>BUSINESS PLAN OR PROPOSAL:</b></label>
            <input type='file' id='bpp' name='business_plan_or_proposal' {...register("business_plan_or_proposal")}  className='form-control' />
            <small className='text-danger'>
            {errors.business_plan_or_proposal && errors.business_plan_or_proposal.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='ts'><b>THREE YEAR ITR WITH BALANCE SHEET:</b></label>
            <input type='file' id='ts' name='three_year_itr_with_balance_sheet' {...register("three_year_itr_with_balance_sheet")} className='form-control' />
            <small className='text-danger'>
            {errors.three_year_itr_with_balance_sheet && errors.three_year_itr_with_balance_sheet.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='cd'><b>COLLATERAL DOCUMENT:</b></label>
            <input type='file' id='cd' name='collateral_document' {...register("collateral_document")}  className='form-control' />
            <small className='text-danger'>
            {errors.collateral_document && errors.collateral_document.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='sd'><b>STAMP DUTY:</b></label>
            <input type='file' id='sd' name='stamp_duty' {...register("stamp_duty")}  className='form-control' />
            <small className='text-danger'>
            {errors.stamp_duty && errors.stamp_duty.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='st'><b>STATUS OF DOCUMENT:</b></label>
            <select name='status' id='st' className='form-control' required>
                <option value=''>SELECT</option>
                <option value='pending'>PENDING</option>
                <option value='done'>DONE</option>
                <option value='rejected'>REJECTED</option>
            </select >
            <br/>
            <br/>
            <label htmlFor='rt'><b>RESPONSE TIMESTAMP:</b></label>
            <input type='date' id='rt' name='response_timestamp' className='form-control' required/>
            <br/>
            <br/>
            <label htmlFor='rm'><b>REMARK:</b></label>
            <input type='text' id='rm' name='remark' className='form-control' required/>
            <br/>
            <br/>
            <input type='submit' value='UPDATE DOCUMENT' className='btn btn-outline-success col-6 btn-lg'/>
            <input type='reset' value='RESET DOCUMENT' className='btn btn-outline-warning col-6 btn-lg'/>
        </form>
    </div>

    </>
  )
}

export default DocumentUpdate