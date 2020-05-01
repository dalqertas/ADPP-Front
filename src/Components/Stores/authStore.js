import { decorate, observable, computed} from "mobx";
import jwt_decode from "jwt-decode";
import React from 'react';
import authInstance from "./authInstance";
import { Link , withRouter, Redirect} from "react-router-dom";

class AuthStore {
    user = null;
    login = async (userData, history) => {
      try {
        const res = await authInstance.post("login/", userData);
        const user = res.data;
        this.setCurrentUser(user.refresh);
        console.log("logged in");
        if (jwt_decode(user.refresh).user_id.includes(".")){
        history.replace("/head");
        }
        else {
            history.replace("/student");
        }
      } catch (error) {
        console.error(error.response);
      }
    };
   
    setCurrentUser = token => {
      let user;
      if (token) {
        localStorage.setItem("token", token);
        authInstance.defaults.headers.common.Authorization = `jwt ${token}`;
        user = jwt_decode(token);
      } else {
        localStorage.removeItem("token");
        delete authInstance.defaults.headers.common.Authorization;
        user = null;
      }
      this.user = user;
    };
     
    checkForExpiredToken = () => {
      const token = localStorage.getItem("token");
      let user;
      if (token) {
        const currentTimeInSeconds = Date.now() / 1000;
        user = jwt_decode(token);
        if (user.exp >= currentTimeInSeconds) {
          return this.setCurrentUser(token);
        }
      }
      this.logout();
    };
    logout = () => {
      this.setCurrentUser();
      return <Redirect to='/'/>
          
    };
     get username(){
       return jwt_decode(this.user).username;
     }
  }
 
  decorate(AuthStore, {
    user: observable,
    username:computed
  });
  const authStore = new AuthStore();
  authStore.checkForExpiredToken();
  export default withRouter(authStore);