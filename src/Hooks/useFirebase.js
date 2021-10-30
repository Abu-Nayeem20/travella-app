import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        
        .catch((error) => {
            setError(error.message);
        })
        .finally( () => setIsLoading(false));
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
         .then(() => {
            setUser({});
          }).catch((error) => {
           setError(error.message);
          })
          .finally( () => setIsLoading(false));
    };

    useEffect( () => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            } 
            setIsLoading(false);
        });
        return () => unSubscribed;
    }, [])

    return {
        user,
        error,
        signInUsingGoogle,
        logOut,
        isLoading
    }
}

export default useFirebase;