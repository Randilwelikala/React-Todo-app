import {useState} from 'react';

function Navbar ({items}){
    const [active,setActive] = useState(items[0]);

    return(
        <nav>
            {items.map((item)=>(
                <p key={item} onClick={()=>setActive(item)}>{item}</p>
            ))}
        </nav>
    )


}
export default Navbar;