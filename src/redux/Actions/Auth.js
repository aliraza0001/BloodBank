import {authState, Logout} from '../types';
import * as Auth from '../../services/Auth';

export const Login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await Auth.signInWithEmailAndPassword(email, password);

      console.log('response---> ', response);
    } catch (error) {
      console.log('error---> ', error);
    }
  };
};
export const Register = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await Auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log('response---> ', response);
    } catch (error) {
      console.log('error---> ', error);
    }
  };
};
export const SignOut = () => {
  return async (dispatch) => {
    try {
      const response = await Auth.logOut();
      console.log('response---> ', response);
      dispatch({type: Logout});
    } catch (error) {
      console.log('error---> ', error);
      dispatch({type: Logout});
    }
  };
};
