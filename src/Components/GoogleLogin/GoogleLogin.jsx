import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";


const GoogleLogin = () => {
    const {googleLogin} = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
            console.log(result.data)
            const userInfo = {
                email : result.user?.email,
                name : result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res =>{
                console.log(res.data)
            })

        })
        navigate('/')
    }
    return (
        <div className='flex gap-2  bg-sky-900 text-white'>
            <button onClick={handleGoogleLogin} className='btn  bg-sky-900 text-white w-full flex items-center gap-2'> <FcGoogle />Continue with Google</button>
        </div>
    );
};

export default GoogleLogin;