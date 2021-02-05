import {authState, Logout} from '../types';
import * as Auth from '../../services/Auth';

export const Login = (email, password) => {
  return async (dispatch) => {
    dispatch({type: authState, payload: {loading: true}});
    try {
      const {user} = await Auth.signInWithEmailAndPassword(email, password);
      if (user?.uid) {
        const userData = await Auth.getUser(uid);
        console.log('userData', userData);
        dispatch({
          type: authState,
          payload: {isLogin: true, loading: false, user: userData},
        });
      }
    } catch (error) {
      console.log('error---> ', error);
      dispatch({type: authState, payload: {loading: false}});
    }
  };
};
export const Register = (email, password) => {
  return async (dispatch) => {
    dispatch({type: authState, payload: {loading: true}});
    try {
      const {user} = await Auth.createUserWithEmailAndPassword(email, password);
      if (user?.uid) {
        const data = {name: 'Ali', email, Address: '14525'};
        const userData = await Auth.createUser(user.uid, data);
        console.log('userData', userData);
        dispatch({type: authState, payload: {login: true, loading: false}});
      }

      console.log(email, password, 'response---> ', user);
    } catch (error) {
      console.log('error---> ', error);
      dispatch({type: authState, payload: {loading: false}});
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

export const getUsers = () => {
  return async (dispatch) => {
    dispatch({type: authState, payload: {loading: true}});
    try {
      const response = await Auth.getUsers();
      console.log('response', response);
      if (response) {
        dispatch({type: authState, payload: {loading: false, users: response}});
      }
    } catch (error) {
      console.log('error---> ', error);
      dispatch({type: authState, payload: {loading: false}});
    }
  };
};

export const getCurrentUser = (uid) => {
  return async (dispatch) => {
    dispatch({type: authState, payload: {loading: true}});
    try {
      const userData = await Auth.getUser(uid);
      console.log('userData', userData);
      dispatch({
        type: authState,
        payload: {isLogin: true, loading: false, user: userData},
      });
    } catch (error) {
      console.log('error---> ', error);
      dispatch({type: authState, payload: {loading: false}});
    }
  };
};
