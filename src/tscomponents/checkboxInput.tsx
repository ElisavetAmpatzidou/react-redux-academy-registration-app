import React from 'react';

interface CheckboxInputProps{
    name:string;
    text:string;
    checked:boolean;
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxInput = ({name,text,checked,onChange} : CheckboxInputProps) => {
    return ( 
        <label>
        <input
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange} />
          {text}
      </label>
    
     );


    
}
 
export default CheckboxInput;