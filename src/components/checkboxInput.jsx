import React from 'react';

const CheckboxInput = ({name,text,checked,onChange}) => {
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