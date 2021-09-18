import React from 'react';

const ListGroup = ({label,items,selectedItem, onItemSelect}) => {
    return ( 
        <div>
        <p style={{ marginTop: 20,color: '#3e88f7', fontSize: 14, fontWeight: 'bold', textAlign:'center'}}>{label}</p>
        <ul style={{ textAlign:"center"}} className="list-group">
            {items.map(item => 
                        <li key={item.name} className={item.value === selectedItem ? "list-group-item active" :"list-group-item"} onClick={() => onItemSelect(item.value)}>
                            {item.name}
                        </li>)}
            
        </ul>
        </div>
     );
}
 
export default ListGroup;