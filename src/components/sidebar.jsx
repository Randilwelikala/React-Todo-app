import {Link,useLocation} from "react-router-dom";

function Sidebar(){
    const location = useLocation();
    const item = ["dashboard","Users","Settings"];

    return(
        <div>
            {items.map((item) =>(
            <Link
            key={item}
            to={item.toLowerCase() === "dashboard" ? "/" : "/" + item.toLowerCase()}>
                {item}
            </Link>))}
            
            
        </div>
    )
}

export default  Sidebar;