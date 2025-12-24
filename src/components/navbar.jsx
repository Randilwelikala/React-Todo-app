import {useState} from 'react';
import {Link,useLocation} from "react-router-dom";

function Navbar (){
    const location = useState();
    const navItems = [
        {name:"Dashboard", path:"/"},
        {name: "Users", path:"/users"},
        {name:"Settings", path:"/settings"},
    ];

    return(
        <nav>
            {navItems.map((item) =>(
                <Link
                    key={item.pathy}
                    to={item.path}
                    >
                        {item.name}
                    </Link>
            ))}
        </nav>
    );


}
export default Navbar;