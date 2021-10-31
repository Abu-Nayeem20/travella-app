import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();

    
    const  createAccountWithGoogle = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmailAndPassword =( email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserInfo = (name, photo) => {
        updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
        .then( result => { })
        .catch(error => {
          setError(error.message)
        })
      } 

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
        setUser,
        error,
        setError,
        signInUsingGoogle,
        logOut,
        isLoading,
        setIsLoading,
        createAccountWithGoogle,
        loginWithEmailAndPassword,
        updateUserInfo
    }
}

export default useFirebase;