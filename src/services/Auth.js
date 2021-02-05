import auth from '@react-native-firebase/auth';
// *** Auth API ***
export const createUserWithEmailAndPassword = (email, password) =>
  auth().createUserWithEmailAndPassword(email, password);

export const signInWithEmailAndPassword = (email, password) =>
  auth().signInWithEmailAndPassword(email, password);

export const createUser = () => {};

export const getUser = () => {};

export const logOut = () => auth().signOut();
