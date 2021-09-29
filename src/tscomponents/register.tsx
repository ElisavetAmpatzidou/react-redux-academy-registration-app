import React, { useState } from 'react';
import TextInput from './textInput';
import * as yup from 'yup';
import ErrorMessage from './errorMessage';
import CheckboxInput from './checkboxInput';
import ListInput from './listInput';
import { useDispatch } from "react-redux"; 
import {studentAdded} from '../store/students';


const Register = () => {
    interface Errors{
       [key : string] : string
    }
  
  
  const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    postCode:'',
    city: '',
    gender: 'Male',
    course: 'React',
    subscription : false,
    terms : false
  };

  const initialErrors : Errors = {
    first_name: '',
    last_name: '',
    email: '',
    terms: ''
  }

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<Errors>(initialErrors);
  const {first_name,last_name,email,address,postCode, city,gender,course,subscription,terms} = formData;

  const genders = ["Male","Female","Other"];
  const courses = ["React", "Angular", "Vue"];
  
  const schema = yup.object({
    first_name: yup.string().required('First Name is required'),
    last_name: yup.string().required('Last Name is required'),
    email:  yup.string().required('Email is required').email(),
    gender : yup.string(),
    address : yup.string().min(0),
    postCode : yup.string().min(0),
    city : yup.string().min(0),
    course : yup.string(),
    subscription : yup.boolean(),
    terms : yup.boolean().required("The terms and conditions must be accepted.").oneOf([true], "The terms and conditions must be accepted.")
  });

  const validate = async() =>{
    const errors:Errors = {first_name: '',
    last_name: '',
    email: '',
    terms : ''};
    await schema.validate(formData, { abortEarly: false }).then()
    .catch(err => {
      const validationErrors = err.inner.map((error: any) => ({path: error.path,  message : error.message}))

      for(let item of validationErrors)
        errors[item.path] = item.message;
    });
    return errors;
  
}

 const handleSubmit = async(e : React.FormEvent<HTMLFormElement>) =>{
  e.preventDefault();

  const errors = await validate();
  setErrors(errors);
  if (errors.first_name !== initialErrors.first_name || 
      errors.last_name !== initialErrors.last_name || 
      errors.email !== initialErrors.email ||
      errors.terms !== initialErrors.terms) 
      return console.log(errors);
  dispatch(studentAdded(formData));
  clearInputs();
}

 const clearInputs = () => {
  setFormData({...initialState});
}

  const updateField = (e: React.ChangeEvent<HTMLInputElement>  )=> {
      setFormData({
        ...formData, 
        [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
      });
  };

  const updateSelField = (e: React.ChangeEvent<HTMLSelectElement>  )=> {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    });
};
  



    return ( 
      <>
        <h1 >Registration Form</h1>
        <form onSubmit={handleSubmit}>
        
        <div className="row">
          <div className="col">
            <TextInput name="first_name" label="First Name" type="text" value={first_name} onChange ={updateField}/>
            {errors.first_name !== '' && <ErrorMessage error={errors.first_name}/>}
          </div>
          <div className="col">
            <TextInput name="last_name" label="Last Name" type="text" value={last_name} onChange ={updateField}/>
            {errors.last_name !== '' && <ErrorMessage error={errors.last_name}/>}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TextInput name="email" label="Email" type="email" value={email} onChange ={updateField}/>
            {errors.email !== '' && <ErrorMessage error={errors.email}/>}
          </div>
          <div className="col">
           <TextInput name="address" label="Address" type="text" value={address}  onChange ={updateField}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TextInput name="city" label="City" type="text" value={city}  onChange ={updateField}/>
          </div>
          <div className="col">
           <TextInput name="postCode" label="Post Code" type="text" value={postCode}  onChange ={updateField}/>
          </div>
        </div>  
        <div className="row">
          <div className="col">
            <ListInput label="Gender" name="gender" value= {gender} onChange ={updateSelField} options={genders}/>
          </div>
          <div className="col">
            <ListInput label="Pick the course you want to learn" name="course" value= {course} onChange ={updateSelField} options={courses}/>
          </div>
        </div>
        <br/><br/>
        <div className="row justify-content-md-center">
          <div className="col col-lg-4">
          <CheckboxInput name="subscription" text="Subscribe to our newsletter" checked={subscription} onChange={updateField}/>
          </div>
        </div>  
        <div className="row justify-content-md-center">
          <div className="col col-lg-4">
            <CheckboxInput name="terms" text="Agree to terms and conditions" checked={terms} onChange={updateField}/>
            {errors.terms && <ErrorMessage error={errors.terms}/>}
          </div>
        </div>
        <br/>
        <div className="row justify-content-md-center">
          <div className="col col-lg-4">

        <input className="btn btn-primary col-lg-5" type="submit" value="Submit" />
        </div>
        </div>
        </form>
        </>
     );
}
 
export default Register;