import React from 'react';

const TextInput = ({name,label, type,value, onChange}) => {
    return ( 
        <div className="form-group ">
            <label style={{ color: '#3e88f7', fontSize: 14, fontWeight: 'bold' }} className="col-sm-5 col-form-label">{label}</label>
            <div className="col-sm-8">
                <input name= {name} type={type} className="form-control" 
                       placeholder={"Enter your " + label} value={value} 
                       onChange={onChange}
                />
            </div>
        </div>
     );
}
 
export default TextInput;