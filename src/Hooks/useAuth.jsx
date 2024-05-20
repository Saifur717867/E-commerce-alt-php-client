import { useContext } from "react";
import { AuthContext } from "../../src/Authentication/Auth/AuthProvider";


const useAuth = () => {

    const auth = useContext(AuthContext)

    return auth;
};

export default useAuth;