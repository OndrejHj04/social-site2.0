import Login from "./Login";
import Register from "./Register";
import ScrollPage from "./ScrollPage";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import Nav from "./Nav";
import { useEffect, useState } from "react";
export default function App() {
  const data = window.localStorage.getItem("user");
  const [allUsers, setAllUsers] = useState();
  const [activeUser, setActiveUser] = useState(JSON.parse(data));
  const [url, setUrl] = useState(window.location.href);
  const [height, setHeight] = useState()

  useEffect(()=>{
    setHeight(window.innerHeight)
  },[window.onresize])

  const location = useLocation();

  const firebaseConfig = {
    apiKey: "AIzaSyDsMFhDjRxf7C1MLjBW8wD1RB3kAjcB9aw",
    authDomain: "social-site2.firebaseapp.com",
    projectId: "social-site2",
    storageBucket: "social-site2.appspot.com",
    messagingSenderId: "229013792757",
    appId: "1:229013792757:web:189ca1f612b91b6a7762bc",
  };

  const changeActiveUser = (p) => {
    setActiveUser(p);
  };

  initializeApp(firebaseConfig);

  const db = getFirestore();

  useEffect(() => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      let users = [];
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      setAllUsers(users);
    });
  }, [db]);

  useEffect(() => {
    setUrl(window.location.href);
  }, [location]);

  return (
    <div className="flex flex-col" style={{height: height}}>
      <Routes>
        <Route path="/" element={<Nav activeUser={activeUser} url={url} changeActiveUser={changeActiveUser} />}>
          <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route path="/login" element={<Login firebaseConfig={firebaseConfig} changeActiveUser={changeActiveUser} activeUser={activeUser} />}></Route>
          <Route path="/register" element={<Register firebaseConfig={firebaseConfig} allUsers={allUsers} changeActiveUser={changeActiveUser} activeUser={activeUser} />}></Route>
          <Route path="/scroll-page" element={<ScrollPage activeUser={activeUser} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
