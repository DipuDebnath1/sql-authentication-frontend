import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "./provider/UserProvider";
import { useContext } from "react";

const Login = () => {

    const navigate = useNavigate()
    // const {user, setUser} = UserContext()
    const { user, userset } = useContext(UserContext)

    const handleSubmit = (e) => {

        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userData = { email, password }
        // console.log(userData);
        axios.post('http://localhost:5000/login', userData, { withCredentials: true })
            .then(res => {

                if (res.data.signup == false) {
                    return Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: res.data.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                userset(res.data.data)
                 Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
                return navigate('/')

            })
            .catch(err => {
                console.log(err);
            })


    }

    return (
        <div>
            <div className="w-4/12 m-auto mt-5">
                <form onSubmit={handleSubmit} action="" className="border p-10 bg-purple-200">
                    <label htmlFor="" className="block mb-4">
                        <span>your email</span> <br />
                        <input className="border w-full p-2 mt-2" name="email" type="email" placeholder="your email" />
                    </label>
                    <label htmlFor="" className="block mb-4">
                        <span>your password</span> <br />
                        <input className="border w-full p-2 mt-2" name="password" type="password" placeholder="your password" />
                    </label>
                    <button className="py-2 w-full block bg-purple-500 text-white" type="submit">Submit</button>
                    <p>don't have a accuout please<Link to='/signup' className="font-semibold"> Login </Link> </p>
                </form>

            </div>
        </div>
    );
};
 
export default Login;