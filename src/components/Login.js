import { useState ,   Redirect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import './Login.css'
import { auth } from "./firebase-config";
import { Link } from 'react-router-dom'
const Login = ({ handleSignup }) => { 
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  
	const handleSubmit = (event) => {
		event.preventDefault();
		handleSignup({ loginEmail});
	};

  const login = async () => {
    try {
  
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      localStorage.setItem("user","autentificat");
      localStorage.setItem("name",user.user.email)
     console.log(localStorage.getItem('name'))

      console.log(" afisam" ,user);

    } catch (error) {
        alert("Aceasta  adresa nu exista , va rugam incercati din nou!")
        localStorage.setItem("user","")
        console.log("hei", localStorage.getItem("user"))
    }
  };

  const logout = async () => {
      try{
    await signOut(auth);
     localStorage.setItem("user","")}
    catch(er){
      alert("nu a mers delogare!")
    }
  };

  return (
    <div className="containerProfil">
                   

                    <div>
                        <h3 className="titleRegister"> Login </h3>
                        <form onSubmit={handleSubmit}>
                                <input
                                placeholder="Email..."
                                onChange={(event) => {
                                    setLoginEmail(event.target.value);
                                }}
                                />
                                <input type="password"
                                placeholder="Password..."
                                onChange={(event) => {
                                    setLoginPassword(event.target.value);
                                }}
                                />
                          
                                <div  className="buttonLogin"><button onClick={login}> Login</button> </div>
                                </form>
                        </div>
                      
                    <h4 className="userName"> User Logged In:   {user?.email}</h4>
                 

                  <div className="buttonLogOut"><button  onClick={logout} > Sign Out </button> </div>


                   <p  className="userName"><Link to="/register">Nu ai cont? Inregistreaza-te aici!</Link> </p> 
                   <p  className="userName"><Link to="/profil">Profil Page</Link> </p> 

    </div>
  );
}

export default Login;