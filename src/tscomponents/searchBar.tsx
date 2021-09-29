import React from 'react';


interface SearchBarProps{
    value: string;
    onChange:(arg0:string) => void;
}
const SearchBar = ({value, onChange}:SearchBarProps) => {
    return ( 
        <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: 25}}>
            <input style={{width:200}} type="search" value={value} onChange={e => onChange(e.currentTarget.value)} className="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" />
        </div>
     );
}
 
export default SearchBar;