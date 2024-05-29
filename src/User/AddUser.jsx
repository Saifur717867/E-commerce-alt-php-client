import AddUserForm from "./AddUserForm";
import { CgCloseR } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";


const AddUser = () => {
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
                                        e.target.reset();
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
        <div className="">
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-4/12 max-w-full my-14">
                    <form onSubmit={handleSignUp}>
                        <div>
                            <AddUserForm></AddUserForm>
                        </div>
                        <div className="flex justify-end items-center gap-6">
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button, it will close the modal */}
                                    <button className="absolute top-4 right-4 text-lg">
                                        <CgCloseR></CgCloseR>
                                    </button>
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                            <div>
                                <button className="btn btn-primary mt-6">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default AddUser;