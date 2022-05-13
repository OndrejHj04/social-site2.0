import { useNavigate } from "react-router-dom";
import Title from "./Title";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { nanoid } from "nanoid";
export default function Register() {
  const navigate = useNavigate();

  const firebaseConfig = {
    apiKey: "AIzaSyDsMFhDjRxf7C1MLjBW8wD1RB3kAjcB9aw",
    authDomain: "social-site2.firebaseapp.com",
    projectId: "social-site2",
    storageBucket: "social-site2.appspot.com",
    messagingSenderId: "229013792757",
    appId: "1:229013792757:web:189ca1f612b91b6a7762bc",
  };

  const [input, setInput] = useState({ username: "", email: "", password1: "", password2: "" });

  initializeApp(firebaseConfig);

  const db = getFirestore();

  const changeInput = (e) => {
    setInput((oldVal) => {
      return {
        ...oldVal,
        [e.target.name]: e.target.value,
      };
    });
  };


  const validateInput = () => {
    return input.password1 === input.password2 && input.username.length > 3 && input.email.length > 3 && input.password1.length > 3 && input.password2.length > 3 && input.email.split("@").length === 2 && (input.email.split("@")[1].includes(".cz") || input.email.split("@")[1].includes(".com"))
  };

  const makeLogin = () => {
    if(validateInput()){
      const id = nanoid()
      setDoc(doc(db, "users", id), {
        username: input.username,
        email: input.email,
        password1: input.password1,
        password2: input.password2,
      })
      setInput({ username: "", email: "", password1: "", password2: "" })
    }else{
      
    }
  };
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row m-2 ">
        <div className="bg-blue p-2 flex flex-col rounded-t-3xl sm:rounded-l-3xl sm:rounded-r-none text-white">
          <Title />
          <div className="mt-2">
            <p className="text-center">By creating an account you agree with</p>
            <ul>
              <li>....</li>
              <li>....</li>
              <li>....</li>
              <li>....</li>
            </ul>
          </div>
          <p className="sm:mt-auto text-xl text-center mt-2">Place for all Bligumakers!</p>
        </div>
        <form className="bg-slate-200 p-2 flex flex-col flex-1 rounded-b-3xl sm:rounded-r-3xl sm:rounded-l-none  text-xl">
          <label>Username</label>
          <input type="text" className="rounded-lg" onChange={changeInput} name="username" value={input.name} />

          <label>Email</label>
          <input type="text" className="rounded-lg" onChange={changeInput} name="email" value={input.email} />

          <label>Password</label>
          <input type="text" className="rounded-lg" onChange={changeInput} name="password1" value={input.password1} />

          <label>Password again</label>
          <input type="text" className="rounded-lg" onChange={changeInput} name="password2" value={input.password2} />
        </form>
      </div>
      <div className="flex justify-center m-4">
        <div className="bg-red-500 px-3 py-2 rounded-2xl text-white text-2xl hover:scale-105 transition-all cursor-pointer" onClick={makeLogin}>
          Login
        </div>
      </div>
      <p className="text-lg text-center">
        Already have an account?{" "}
        <span className="text-sky-600 font-semibold cursor-pointer" onClick={() => navigate("/login")}>
          Login now!
        </span>
      </p>
    </div>
  );
}
