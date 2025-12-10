import {useState} from "react";

function Input({lable,placeholder}){
    const [value,setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return(
        <div>
            <label>{lable}</label>

            <input type="text" placeholder={placeholder} value={value} onChange={handleChange}></input>

            <p>you typed: <strong>{value}</strong></p>
        </div>
        
    );

}

export default Input;