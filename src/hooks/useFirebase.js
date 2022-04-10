import { useEffect, useState } from "react"
import app from '../firebase.init'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'


const auth = getAuth(app)
const providerGoogle = new GoogleAuthProvider()


const useFirebase = () => {
    const [user, setUser] = useState({})

    // Sign in with Google 
    const signInWithGoogle = () => {
        signInWithPopup(auth, providerGoogle)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch(error => {

            })
    }

    // Handeling Sign Out 
    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])


    return {
        user,
        handleSignOut,
        signInWithGoogle
    }
}
export default useFirebase;