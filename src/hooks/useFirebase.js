import { useState } from "react"
import app from '../firebase.init'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
const auth = getAuth(app)
const providerGoogle = new GoogleAuthProvider()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const signInWithGoogle = () => {
        signInWithPopup(auth, providerGoogle)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user)
            })
            .catch(error => {

            })
        console.log('Okay')
    }
    return {
        user,
        signInWithGoogle
    }
}
export default useFirebase;