import axios from "axios";
import { useEffect } from "react";

const User = () => {
    useEffect(()=>{
        axios.get('http://localhost:5000/getuser',{
            withCredentials:true
        })
        .then(res=>console.log(res.data))
        .catch(err=>{
            console.log(err);
        })
    },[])
    


    return (
        <div>
            user page
        </div>
    );
};

export default User;