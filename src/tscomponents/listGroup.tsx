import React from 'react';
interface Item{
    name: string;
    value:string;
}

interface ListGroupProps{
    label: string;
    items: Item[];
    selectedItem : string;
    onItemSelect : (arg0: string) => void;
}
const ListGroup = ({label,items,selectedItem, onItemSelect}:ListGroupProps) => {
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