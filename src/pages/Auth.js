import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth } from "../data/firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import useContext from "../data/useContext";
import { Navigate } from "react-router-dom";
function Auth() {
  const uiConfig = {
    signInFlow: "popup",
    signinsuccessUrl: "/store",
    signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  };
  const { authUser } = useContext();
  useEffect(() => {
    console.log(authUser);
  }, []);
  return (
 authUser ? <Navigate to="/store" /> : <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
  );
}

export default Auth;
