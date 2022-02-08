import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import './Login.css'
import { auth } from "./firebase-config";
import { Link } from 'react-router-dom'
function Login() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [name, setLoginName] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
    
      );
      console.log("user", user);
      alert("Bun venit, "+ name)
    } catch (error) {
      alert("Aceasta adresa  este deja  inregistrata!")
    }
  };


  return (
    <div className="containerProfil">
                    <div>
                        <h3 className="titleRegister"> Register User </h3>
                        <input
                        placeholder="Name..."
                        onChange={(event) => {
                            setLoginName(event.target.value);
                        }}
                        />
                        <input
                        placeholder="Email..."
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                        />
                        <input type="password"
                        placeholder="Password..."
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                        />

                        <button onClick={register} className="buttonRegister"> Create User</button>
                    </div>
                    
                  
                   <p className="userName"> <Link to="/login" >Ai deja un cont? Autentifica-te</Link> </p>
                   

    </div>
  );
}

export default Login;