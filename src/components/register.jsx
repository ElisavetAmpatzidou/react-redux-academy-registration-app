import React, { useState } from 'react';
import TextInput from './textInput';
import Joi from 'joi-browser';
import ErrorMessage from './errorMessage';
import CheckboxInput from './checkboxInput';
import ListInput from './listInput';
import { useDispatch } from "react-redux"; 
import {studentAdded} from '../store/students';


const Register = () => {
  const [errors, setErrors] = useState({});
  
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

  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState);

  const {first_name,last_name,email,address,postCode, city,gender,course,subscription,terms} = formData;

  const genders = ["Male","Female","Other"];
  const courses = ["React", "Angular", "Vue"];
  
  const schema ={
    first_name: Joi.string().required().label('First Name'),
    last_name: Joi.string().required().label('Last Name'),
    email:  Joi.string().required().email().label('Email'),
    gender : Joi.label('Gender'),
    address : Joi.string().allow('').label('Address'),
    postCode : Joi.string().allow('').label('Post Code'),
    city : Joi.string().allow('').label('City'),
    course : Joi.label('Course'),
    subscription : Joi.boolean(),
    terms : Joi.boolean().invalid(false).label('Terms')
  }

  const validate = () =>{
    const options = {abortEarly: false};
    const {error} = Joi.validate(formData, schema, options);
    if (!error) return null;
    const errors ={};
    for(let item of error.details)
        errors[item.path[0]] = item.message;
    return errors;
}

 const handleSubmit = e =>{
  e.preventDefault();
  
  const errors = validate();
  setErrors(errors || {});
  if (errors) return console.log(errors);
  dispatch(studentAdded(formData));
  clearInputs();
}

 const clearInputs = () => {
  setFormData({...initialState});
}

  const updateField = e => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
      });
  };



    return ( 
      <>
        <h1 >Registration Form</h1>
        <form onSubmit={handleSubmit}>
        
        <div className="row">
          <div className="col">
            <TextInput name="first_name" label="First Name" type="text" value={first_name} onChange ={updateField}/>
            {errors.first_name && <ErrorMessage error={errors.first_name}/>}
          </div>
          <div className="col">
            <TextInput name="last_name" label="Last Name" type="text" value={last_name} onChange ={updateField}/>
            {errors.last_name && <ErrorMessage error={errors.last_name}/>}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TextInput name="email" label="Email" type="email" value={email} onChange ={updateField}/>
            {errors.email && <ErrorMessage error={errors.email}/>}
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
            <ListInput label="Gender" name="gender" value= {gender} onChange ={updateField} options={genders}/>
          </div>
          <div className="col">
            <ListInput label="Pick the course you want to learn" name="course" value= {course} onChange ={updateField} options={courses}/>
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