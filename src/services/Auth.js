import auth from '@react-native-firebase/auth';

class Auth {
  constructor() {
    this.auth = auth();
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
}
export default Auth;
