import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const UserContext = createContext()
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // console.log(user);

    const userset = (e) => {
        setUser(e)
    }

    const logout = () => {
        // setUser(null)
       const {success} = axios.get('http://localhost:5000/logout',{withCredentials:true})
       console.log(success);
       setUser(null)
       return 
    }

    const authinfo = {
        user, userset, logout
    }

    useEffect(() => {
        (async () => {

            const { data } = await axios.get('http://localhost:5000/asdf', { withCredentials: true })
            // console.log('data ', data);
            if (data) {
                setUser(data?.user?.user || {})
                return
            }
            return
        })()
    }, [])

    return (

        <UserContext.Provider value={authinfo}>
            {children}
        </UserContext.Provider>

    );
};

export default UserProvider;