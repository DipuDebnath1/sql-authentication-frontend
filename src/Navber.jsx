import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./provider/UserProvider";


function Navbar() {
    const { user, logout } = useContext(UserContext)
    // console.log(user.email);
    const handlelogout = () => {

        logout()
    }
    return (
        <div className="max-w-7xl mx-auto flex justify-between items-center my-5">
            <div className="text-5xl font-semibold capitalize">
                <Link to={'/'}>logo</Link>
            </div>
            <ul className="flex gap-5">
                <li>
                    {
                        user && <span>{user.name}</span>
                    }
                </li>
                {
                    user ? <li onClick={handlelogout} className="font-semibold text-xl">
                        Logout
                    </li>

                        : <li className="font-semibold text-xl">
                            <Link to='/login'>Login</Link>
                        </li>
                }



            </ul>
        </div>
    );
}

export default Navbar