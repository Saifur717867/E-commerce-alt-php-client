import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const UserInput = () => {

    const axiosPublic = useAxiosPublic();
    const { createUser, logOut } = useAuth();

    const navigate = useNavigate();

    // create a user staff 

    const handleSignUp = async (e) => {
        console.log("clicked");
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const password = e.target.password.value;
        const roll = e.target.roll.value;
        console.log(email, name, password, phone, roll);
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...!',
                text: 'Minimum six characters, at least one uppercase letter, one lowercase letter, one number and one special character!',
            })
        } else {
            await createUser(email, password, name)
                .then(result => {
                    console.log(result.user)
                    updateProfile(result.user, {
                        displayName: name,
                        // photoURL: loadedImage,
                    })
                        .then(() => {
                            console.log('profile update')
                            const userInfo = {
                                name: name,
                                email: email,
                                role: 'member'
                            }
                            axiosPublic.post('/users', userInfo)
                                .then(res => {
                                    if (res.data.insertedId) {
                                        // console.log('user added to the database')
                                        window.location.reload();
                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Good job!',
                                            text: 'Created your Account successfully!',
                                        })
                                    }
                                })
                        })
                        .catch()
                    logOut()
                        .then()
                        .catch()

                }).catch(error => {
                    console.log(error)
                })
            // navigate(location?.state ? location.state : '/login');
        }
    }
    return (
        <form onSubmit={handleSignUp}>
            <label className="mt-4 flex">Name <span className="text-red-500">*</span></label>
            <input type="text" name="name" className="w-full px-2 py-1 mb-2 mt-2 border border-slate-300 rounded-sm shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />
            <label className="mt-2 flex">Phone<span className="text-red-500">*</span></label>
            <input type="number" name="phone" className="w-full px-2 py-1 mb-2 mt-2  rounded-sm border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />
            <label className="mt-2 flex">Email<span className="text-red-500">*</span></label>
            <input type="email" name="email" className="w-full px-2 py-1 mb-2 mt-2  rounded-sm border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />
            <label className="mt-2 flex">Password<span className="text-red-500">*</span></label>
            <input type="text" name="password" className="w-full px-2 py-1 mb-2 mt-2  rounded-sm border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />
            <label className="mt-2 flex">Roll<span className="text-red-500">*</span></label>
            <input type="text" name="roll" className="w-full px-2 py-1 mb-2 mt-2  rounded-sm border border-slate-300 shadow-lg shadow-slate-900/10 shadow-b-2 shadow-r-[3px] -shadow-spread-2" />
            <button type="submit" className="btn btn-primary mt-6">Save</button>

        </form>
    );
};

export default UserInput;