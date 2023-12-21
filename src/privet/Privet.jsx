import { useContext } from "react";
import { UserContext } from "../provider/UserProvider";
import { useNavigate } from "react-router-dom";

const Privet = ({children}) => {
    const navigate = useNavigate()
    const {user} = useContext(UserContext)
    console.log(user?.email);
    // abc.abc@gmail.com

    if (user?.email=='abc.abc@gmail.com') {
       return children
    }

    return navigate('/login')
};

export default Privet;