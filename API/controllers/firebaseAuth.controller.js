import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

async function createAccount(email,password){
    try {
        const auth = getAuth();
        const user  = await createUserWithEmailAndPassword(auth, email, password);
        return user;
    } catch (error) {
        return error;
    }
}

async function authenticateAccount(email,password){
    try {
        const auth = getAuth();
        const user = await signInWithEmailAndPassword(auth,email,password);
        return user;
    } catch (error) {
        return error;
    }
}

async function getCurrentUser(){
    try {
        const auth = getAuth();
        const user = auth.currentUser;
        if(user){
            return user;
        } else{
            return {user:null};
        }
    } catch (error) {
        return error;
    }
}


export {createAccount,authenticateAccount,getCurrentUser}