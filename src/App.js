import Login from "./Login";
import Register from "./Register";
import ScrollPage from "./ScrollPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import Nav from "./Nav";
import { useEffect, useState } from "react";
export default function App() {
  const [allUsers, setAllUsers] = useState();

  const firebaseConfig = {
    apiKey: "AIzaSyDsMFhDjRxf7C1MLjBW8wD1RB3kAjcB9aw",
    authDomain: "social-site2.firebaseapp.com",
    projectId: "social-site2",
    storageBucket: "social-site2.appspot.com",
    messagingSenderId: "229013792757",
    appId: "1:229013792757:web:189ca1f612b91b6a7762bc",
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route path="/login" element={<Login firebaseConfig={firebaseConfig} />}></Route>
          <Route path="/register" element={<Register firebaseConfig={firebaseConfig} allUsers={allUsers} />}></Route>
          <Route path="/scroll-page" element={<ScrollPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
