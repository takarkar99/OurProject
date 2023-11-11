import React, {useState, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function VendorUpdate() {
  

    const navigate = useNavigate();

    const {userId} = useParams();

    const [user, setUser] = useState({});

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const fetchUser = async () => {
        console.log(userId);
        const result = await axios.get(`http://localhost:5000/users/${userId}`);
        setUser({...user, ...result.data});
        console.log(result.data);
      }

    const onFormSubmit = (data) => {
        console.log(data)
        axios.post('http://localhost:5000/users', data);
        navigate('/vendorshow');
    }

    const registerOptions = {
    //Application ID Validations
        ap: { 
            required: "Application ID is required!",
        minLength: {
            value:1,
            message: "Minimum lenght of Application ID is 1!"
        }},
  
    //NAME VALIDATIONS

        name: { 
            required: "Name is required!",
    
        minLength: {
            value:3,
            message: "Minimum length of Name is 3 Character!"
        }},

  //vendor type validations

        vendor_type: { 
            required: "Vendor type is required!",
  
        minLength: {
            value:3,
        message: "Minimum length of Vendor type  is 3 !"
        }},
  
  //ADDRESS VALIDATION

        address: { 
            required: " Address is required!",
        minLength: {
            value:5,
            message: "Minimum lenght of address is 5!"
        }},
  //CITY VALIDATION
        city: { 
            required: "City is required!",

        minLength: {
            value:3,
            message: "Minimum length of city is 3 Character!"
        }},

  //STATE VALIDATION
        state: { 
            required: "State is required!",

        minLength: {
            value:3,
            message: "Minimum length of state is 3 Character!"
        }},

   //COUNTRY VALIDATION
        country: { 
            required: "Country is required!",

        minLength: {
            value:3,
            message: "Minimum length of country is 3 Character!"
        }},

  //BANK NAME VALIDATION
        bank_name: { 
            required: "Bank Name is required!",

        minLength: {
            value:3,
            message: "Minimum length of Bank is 3 Character!"
        }},
  //PASSBOOK VALIDATION
        passbook_copy: { 
            required: "Passbook is required!",
        },

        current_account_no: { 
            required: "Current Account No is required!",

        minLength: {
            value:16,
            message: "mininmum length of current account no.is 16" 
        }},

        ifsc_code: { 
            required: "IFSC CODE is required!",
        minLength: {
            value: 10,
            message: "Minimum length of IFSC CODE is 10!"
        },
        pattern: {
            value: /([A-Z]){4}([0-9]){4}([0-9]){4}$/,
            message: "IFSC CODE should be in proper rules and regulations"
        }},

        pin_code: { 
            required: "Pincode is required!",

        minLength: {
            value:6,
            message: "Minimum length of Pincode is 6"
        }},

        mobile: { 
            required: "Mobile no. is required!",

        minLength: {
            value:10,
            message: "Minimum length of mobile no. is 10 digit"
        },
        maxLength: {
            value:10,
            message: "max length of mobile no. is 10 digit"
        }},

        email: { 
            required: "Email Id is required!",
        
        pattern: {
            value: /^[A-Za-z0-9_-]*@[A-Za-z0-9]+\.[A-Za-z.]{2,6}$/,
            message: "Email Id should be in proper rules and regulations"

        }}
    }
    
    useEffect(()=>{
        fetchUser();
    },[])
    
    return (
    <>
    <div className='container'>
        <center><h1><u>VENDOR FORM</u></h1></center>
        <button type='button' onClick={() => { setValue("name", user.name);
                                                    setValue("vendor_type", user.vendor_type);
                                                    setValue("email", user.email);
                                                    setValue("address", user.address);
                                                    setValue("city", user.city);
                                                    setValue("state", user.state);
                                                    setValue("country", user.country);
                                                    setValue("pin_code", user.pin_code);
                                                    setValue("mobile", user.mobile);
                                                    setValue("bank_name", user.bank_name);
                                                    setValue("passbook_copy", user.passbook_copy);
                                                    setValue("current_account_no", user.current_account_no);
                                                    setValue("ifsc_code", user.ifsc_code);  
                                                    }}>
                                                    GET Values for {user.name}
                                                    </button>
        <form method='post' onSubmit={handleSubmit(onFormSubmit)}>
            <label htmlFor='ap'><b>APPLICATION:</b></label>
            <input type='number' id='ap' name='ap' placeholder='eg.1' className='form-control' {...register('ap', registerOptions.ap)}/>
            <small className='text-danger'>
            {errors?.ap && errors.ap.message}
            </small>
            <br/> 
            <br/>
            <label htmlFor='nm'><b>NAME:</b></label>
            <input type='text' id='nm' name='name' placeholder='Kasda manufacturer' className='form-control' {...register('name', registerOptions.name)}/>
            <small className='text-danger'>
            {errors?.name && errors.name.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='vt'><b>VENDOR TYPE :</b></label>
            <input type='text' id='vt' name='vendor_type' placeholder='eg.Manufacturer' className='form-control'{...register('vendor_type', registerOptions.vendor_type)}/>
            <small className='text-danger'>
            {errors?.vendor_type && errors.vendor_type.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='mail'><b>EMAIL:</b></label>
            <input type='email' id='mail' name='email' placeholder='eg.xyz@gmail.com' className='form-control' {...register('email', registerOptions.email)}/>
            <small className='text-danger'>
            {errors?.email && errors.email.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='addr'><b>ADDRESS:</b></label>
            <input type='text' id='addr' name='address' placeholder='eg.At.post Vadgaon,district-pune' className='form-control'{...register('address', registerOptions.address)} />
            <small className='text-danger'>
            {errors?.address && errors.address.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='city'><b>CITY:</b></label>
            <input type='text' id='city' name='city' placeholder='eg.Pune' className='form-control' {...register('city', registerOptions.city)}/>
            <small className='text-danger'>
            {errors?.city && errors.city.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='state'><b>STATE:</b></label>
            <input type='text' id='state' name='state' placeholder='eg.MAHARASHTRA' className='form-control'{...register('state', registerOptions.state)}  />
            <small className='text-danger'>
            {errors?.state && errors.state.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='cn'><b>COUNTRY:</b></label>
            <input type='text' id='cn' name='country' placeholder='eg.India' className='form-control' {...register('country', registerOptions.country)}/>
            <small className='text-danger'>
            {errors?.country && errors.country.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='pco'><b>PIN CODE:</b></label>
            <input type='number' id='pco' name='pin_code' placeholder='eg.411041' className='form-control' {...register('pin_code', registerOptions.pin_code)}/>
            <small className='text-danger'>
            {errors?.pin_code && errors.pin_code.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='mb'><b>MOBILE:</b></label>
            <input type='text' id='mb' name='mobile' placeholder='eg.8000070008' className='form-control' {...register('mobile', registerOptions.mobile)}/>
            <small className='text-danger'>
            {errors?.mobile && errors.mobile.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='bn'><b>BANK NAME:</b></label>
            <input type='text' id='bn' name='bank_name' placeholder='eg.STATE BANK OF INDIA' className='form-control' {...register('bank_name', registerOptions.bank_name)}/>
            <small className='text-danger'>
            {errors?.bank_name && errors.bank_name.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='pc'><b>PASSBOOK COPY:</b></label>
            <input type='file' id='pc' name='passbook_copy' placeholder='eg.' className='form-control' {...register('passbook_copy',registerOptions.passbook_copy)}/>
            <small className='text-danger'>
            {errors?.passbook_copy && errors.passbook_copy.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='can'><b>CURRENT ACCOUNT NO:</b></label>
            <input type='text' id='can' name='current_account_no' placeholder='eg.1234567891234567' className='form-control'{...register('current_account_no', registerOptions.current_account_no)} />
            <small className='text-danger'>
            {errors?.current_account_no && errors.current_account_no.message}
            </small>
            <br/>
            <br/>
            <label htmlFor='ic'><b>IFSC CODE:</b></label>
            <input type='text' id='ic' name='ifsc_code' placeholder='SBIN123456' className='form-control' {...register('ifsc_code', registerOptions.ifsc_code)}/>
            <small className='text-danger'>
            {errors?.ifsc_code && errors.ifsc_code.message}
            </small>
            <br/>
            <br/>
            <input type='submit' value='ADD VENDOR' className='btn btn-outline-success col-6 btn-lg'/>
            <input type='reset' value='RESET VENDOR' className='btn btn-outline-warning col-6 btn-lg'/>
        </form>
    </div>
    
    </>
  )
}


export default VendorUpdate