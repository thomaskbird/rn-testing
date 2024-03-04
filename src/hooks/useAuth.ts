import { collectionUsers, firebaseAuth, firestoreDb, workoutApp } from "../firebase/firebase.ts";
import { query } from '@firebase/database';
import { addDoc, collection, getDocs, where } from '@firebase/firestore';
import {
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';

const provider = new GoogleAuthProvider(workoutApp);

const fieldsInitialState = {
  email: '',
  password: '',
  cPassword: '',
};

// todo: https://rnfirebase.io/auth/social-auth#google
const useAuth = () => {
  const [action, setAction] = useState<'login' | 'signup'>('login');
  const [fields, setFields] = useState(fieldsInitialState);

  const [errors, setErrors] = useState<string[]>([]);

  const findUserByEmail = async (email: string) => {
    let data;

    const usersSnap = await getDocs(
      query(
        collection(firestoreDb, 'users'),
        where('email', '==', email),
      )
    );

    // usersSnap.forEach(user => {
    //   const userInfo: Partial<UserType> = user.data();
    //
    //   data = {
    //     ...userInfo,
    //     id: user.id
    //   }
    // });

    return data;
  }

  const handleSetUser = async (authData: UserCredential) => {
    const user = authData.user;

    const data = await findUserByEmail(user.email as string);

    // setUser({
    //   ...authData.user,
    //   ...(data as any)
    // });
  }

  const createFirestoreUser = async (user: UserCredential) => {
    const email = user.user.email as string;
    const existingFirestoreUser = await findUserByEmail(email);

    if(!existingFirestoreUser) {
      return await addDoc(collectionUsers, {
        email: email,
        uid: user.user.uid
      });
    }
  }

  const signInWithGoogle = async () => {
    try {
      console.log('signInWithPopup', signInWithPopup);
      const googleAuth = await signInWithPopup(firebaseAuth!, provider);
      const createdFirestoreUser = await createFirestoreUser(googleAuth);
      await handleSetUser(googleAuth);

      return createdFirestoreUser;
    } catch (e) {
      console.warn('Error:', e);
    } finally {
      // setIsLoading(false);
    }
  }

  const signout = async () => {
    setUser(null);
    await signOut(firebaseAuth);
    return router.push('/account');
  }

  return {
    action,
    errors,
    setAction,
    fields,
    signInWithGoogle,
    signout,
  };
};

export default useAuth;
