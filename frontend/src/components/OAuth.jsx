import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { signInSuccess } from "../redux/user/userSlice";

function OAuth() {
    const auth = getAuth(app)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleGoogleClick = async () => {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: 'select_account' })
        try {
            const resultFromGoogle = await signInWithPopup(auth, provider)
            console.log(resultFromGoogle)
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: resultFromGoogle.user.displayName,
                    email: resultFromGoogle.user.email,
                    googlePhotoUrl: resultFromGoogle.user.photoURL,
                })
            })
            const data = await res.json();
            toast.success("Login successful!");
            if (res.ok) {
                dispatch(signInSuccess(data));
                navigate('/');
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Button className="w-full mt-4 border-green-900 bg-gradient-to-l from-green-200 to-blue-200  text-black hover:bg-gradient-to-l hover:text-white hover:from-green-500 hover:to-cyan-500 hover:border-green-500 border " onClick={handleGoogleClick}>
            <AiFillGoogleCircle className="w-6 h-6 mr-2" />
            Continue with Google
        </Button>
    );
}

export default OAuth;
