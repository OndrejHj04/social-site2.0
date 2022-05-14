import { collection, getFirestore, getDocs } from "firebase/firestore";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";
import Title from "./Title";
export default function Login({ firebaseConfig, changeActiveUser }) {
  const navigate = useNavigate();
  initializeApp(firebaseConfig);

  const db = getFirestore();
  const [input, setInput] = useState({ username: "", password: "" });

  const changeInput = (e) => {
    setInput((oldVal) => {
      return {
        ...oldVal,
        [e.target.name]: e.target.value,
      };
    });
  };

  const makeRegister = () => {
    getDocs(collection(db, "users")).then((snapshot) => {
      let users = [];
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      checkRegister(users);
    });

    function checkRegister(arr) {
      const user = arr.filter((item) => input.username === item.username && input.password === item.password1);
      if (user.length === 1) {
        changeActiveUser(user[0]);
        window.localStorage.setItem("user", JSON.stringify(user[0]));
        navigate("/scroll-page");
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-5">
      <div className="flex flex-col sm:flex-row mx-2">
        <div className="bg-blue p-2 flex flex-col rounded-t-3xl sm:rounded-l-3xl sm:rounded-r-none">
          <Title />
          <p className="text-white sm:mt-auto text-xl text-center mt-2">Place for all Bligumakers!</p>
        </div>
        <form className="bg-slate-200 p-2 flex flex-col flex-1 rounded-b-3xl sm:rounded-r-3xl sm:rounded-l-none  text-xl">
          <label>Username</label>
          <input type="text" className="rounded-lg" onChange={changeInput} name="username" value={input.username} />

          <label>Password</label>
          <input type="text" className="rounded-lg" onChange={changeInput} name="password" value={input.password} />
        </form>
      </div>
      <div className="flex justify-center m-4">
        <div className="bg-red-500 px-3 py-2 rounded-2xl text-white text-2xl hover:scale-105 transition-all cursor-pointer" onClick={makeRegister}>
          Login
        </div>
      </div>
      <p className="text-lg text-center">
        Dont have an account?{" "}
        <span className="text-sky-600 font-semibold cursor-pointer" onClick={() => navigate("/register")}>
          Register now!
        </span>
      </p>
    </div>
  );
}
