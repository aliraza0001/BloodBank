import auth from '@react-native-firebase/auth';

export class Auth {
  constructor() {
    this.auth = auth();
  }

  register = async (email, password) => {
    return await this.auth.createUserWithEmailAndPassword(email, password);
  };
}
