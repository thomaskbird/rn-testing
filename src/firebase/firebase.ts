import { getApp, getApps, initializeApp } from "@firebase/app";
import { Auth, initializeAuth } from '@firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { query } from "@firebase/database";
import { Firestore, collection, getFirestore, orderBy } from "@firebase/firestore";
import { FirebaseStorage, getStorage } from '@firebase/storage';
import Config from 'react-native-config';

const firebaseConfig = {
  apiKey: Config.REACT_APP_API_KEY,
  authDomain: Config.REACT_APP_AUTH_DOMAIN,
  projectId: Config.REACT_APP_DATABASE_URL,
  storageBucket: Config.REACT_APP_PROJECT_ID,
  messagingSenderId: Config.REACT_APP_MESSAGE_SENDER_ID,
  appId: Config.REACT_APP_MESSAGE_APP_ID,
};

let workoutApp = null;
let firestoreDb: Firestore | null = null;
let firebaseAuth: null | Auth = null;
let firebaseStorage: FirebaseStorage | null = null;

try {
  if (!getApps().length) {
    workoutApp = initializeApp(firebaseConfig);
  } else {
    workoutApp = getApp();
  }

  firestoreDb = getFirestore(workoutApp);
  // firebaseAuth = getAuth(workoutApp);

  firebaseAuth = initializeAuth(workoutApp, {
    persistence: AsyncStorage,
  });

  // todo: may need this `gs://workout-43f00.appspot.com/` as second param
  firebaseStorage = getStorage(workoutApp);
} catch (e) {
  console.error('e', e);
}

const collectionExercises = collection(firestoreDb!, 'exercises');
const collectionWorkouts = collection(firestoreDb!, 'workouts');
const collectionUsers = collection(firestoreDb!, 'users');
const collectionTags = collection(firestoreDb!, 'tags');

const queryAllExercisesOrdered = query(collectionExercises);
const queryAllWorkoutsOrdered = query(collectionWorkouts);
const queryAllTagsOrdered = query(collectionTags, orderBy('slug', 'desc'));

export {
  collectionExercises,
  collectionTags,
  collectionUsers,
  collectionWorkouts,
  firebaseAuth,
  firebaseStorage,
  firestoreDb,
  queryAllExercisesOrdered,
  queryAllTagsOrdered,
  queryAllWorkoutsOrdered,
  workoutApp,
};
