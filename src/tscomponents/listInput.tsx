import React from 'react';

interface ListInputProps{
    label: string;
    name: string;
    value: string | number;
    onChange:(e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[] | number[];

}

const ListInput = ({label, name,value,onChange,options}:ListInputProps) => {
    return ( 
      <div className="form-group">
        <label style={{ color: '#3e88f7', fontSize: 14, fontWeight: 'bold' }}>{label}</label>
        <div className="col-sm-8">
          <select className="form-control" name={name} value={value} onChange={onChange}>
            <option value={options[0]}>{options[0]}</option>
            <option value={options[1]}>{options[1]}</option>
            <option value={options[2]}>{options[2]}</option>
          </select>
        </div>
      </div>
     );
}
 
export default ListInput;