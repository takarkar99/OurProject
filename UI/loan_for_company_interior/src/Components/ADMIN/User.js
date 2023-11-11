// import React, {useState} from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';


function User() {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }}  = useForm();

    // const [user, setUser] = useState({});

    const onSubmit = (data) => {
        console.log(data)
        const response = axios.post('http://127.0.0.1:8000/signup/', data)
        navigate('/home');
        console.log(response.data)
    }

  return (
    <>
        <div className='container jumbotron' style={{'background-color':'AntiqueWhite'}}>
            <center>
                <h1><u>User Registration Form</u></h1>
            </center>
            <form method='post' onSubmit={handleSubmit(onSubmit)}> 
                <br />
                <label htmlFor='first_name'>Enter First Name : </label>
                <input type='text' id='first_name' name='first_name' className='form-control' 
                {...register('first_name', { required: "First name is required" })} />
                {errors.fname && <span className="text-danger">{errors.fname.message}</span>}
                <br />

                <label htmlFor='last_name'>Enter Last Name : </label>
                <input type='text' id='last_name' name='last_name' className='form-control' 
                {...register('last_name', { required: "Last Name is required" })} />
                {errors.lname && <span className="text-danger">{errors.lname.message}</span>}
                <br />

                <label htmlFor='dob'>Date OF Birth : </label>
                <input type='date' id='dob' name='dob' className='form-control' 
                {...register('dob', { required: "Select Your Date of Birth" })} />
                {errors.dob && <span className="text-danger">{errors.dob.message}</span>}
                <br />

                <p>Gender : </p>
                <input type="radio" id="male" name="gender" value="MALE" 
                {...register('gender', { required: "Select Your Gender" })}/>
                <label htmlFor="male">Male</label><br />

                <input type="radio" id="female" name="gender" value="FEMALE" 
                {...register('gender', { required: "Select Your Gender" })}/>
                <label htmlFor="female">Female</label><br />

                <input type="radio" id="other" name="gender" value="TRANSGENDER" 
                {...register('gender', { required: "Select Your Gender" })}/>
                <label htmlFor="other">TRANSGENDER</label><br />
                {errors.gender && <span className="text-danger">{errors.gender.message}</span>}
                <br />
                <br />

                <label htmlFor='mail'>Email : </label>
                <input id='mail' type='email' name='email' className='form-control' placeholder='example@mail.com'
                {...register('email', { required: "Enter Your Email ID" })} />
                {errors.email && <span className="text-danger">{errors.email.message}</span>}
                <br />

                <label htmlFor='addr'>Address : </label>
                <textarea type='text' id='addr' name='address' className='form-control'
                {...register('address', { required: "You've to fill your Address" })} />
                {errors.address && <span className="text-danger">{errors.address.message}</span>}
                <br />

                <label htmlFor='city'>City : </label>
                <input type='text' id='city' name='city' className='form-control'
                {...register('city', { required: "Mention Your City" })} />
                {errors.city && <span className="text-danger">{errors.city.message}</span>}
                <br />

                <label htmlFor='state'>State : </label>
                <input type='text' id='state' name='state' className='form-control'
                {...register('state', { required: "Mention Your Home-State" })} />
                {errors.state && <span className="text-danger">{errors.state.message}</span>}
                <br />
                
                <label htmlFor='country'>Country : </label>
                <input type='text' id='country' name='country' className='form-control'
                {...register('country', { required: "Contry Is Not Specified" })} />
                {errors.country && <span className="text-danger">{errors.country.message}</span>}
                <br />
                
                <label htmlFor='pin'>Pin-Code : </label>
                <input type='number' id='pin' name='pin_code' className='form-control' placeholder='400-001'
                {...register('pin_code', { required: "You have to provide your Pin-Code" })} />
                {errors.pin && <span className="text-danger">{errors.pin.message}</span>}<br />
                
                <label htmlFor='mobile'>Mobile : </label>
                <input type='text' id='mobile' name='mobile' className='form-control'
                {...register('mobile', { required: true})} />
                {errors.mobile && <span className="text-danger">{errors?.mobile.message}</span>}<br />
                
                <label htmlFor='photo'>Photo : </label>
                <input type='file' id='photo' name='photo' className='form-control'/><br />
                
                <label htmlFor='sign'>Signature : </label>
                <input type='file' id='sign' name='signature' className='form-control'/><br />
                
                <label htmlFor='role'>Choose a Role : </label>
                    <select name="role" id="role" className='form-control' {...register('role',{required: 'Select Your Role'})}>
                    <option value=""></option>
                    <option value="CS">Customer</option>
                    <option value="LR">Loan Representative</option>
                    <option value="OH">Operational Head</option>
                    <option value="LO">Loan Sanctioning</option>                    
                    <option value="AD">ADMIN</option>                    
                    <option value="AH">ACCOUNT HEAD</option>                    
                    </select>
                    {errors.role && <span className='text-danger'>{errors.role.message}</span>}
                <br />

                <label htmlFor='pw'>Make Password</label>
                <input type='password' id='pw' name='password' className='form-control'
                    {...register('password')}
                ></input>

                <center>
                    <input type='submit' value='Submit' className='btn btn-outline-success btn-lg col-3' />
                        &nbsp;
                        &nbsp;
                    <input type='reset' value='Clear' className='btn btn-outline-danger btn-lg col-3' />
                </center><br /><br />
            </form>
        </div>
    </>
  )
}

export default User


