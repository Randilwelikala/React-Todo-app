import {useEffect,useState} from 'react';

function User(){
    const [users,setUsers]= useState([]);
    const [loading,setLoading] = useState(true);
    const[error,setError] = useState("");

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=> res.json())
        .then((data)=>{
            setUsers(data);
            setLoading(false);
        })
        .catch(()=>{
            setError("Failed to load user");
            setLoading(false);
        });
    },[]);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>{error}</p>;

    return(
        <div>
            <h2>users List</h2>
            {users.map((user)=>(
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}

export default User;