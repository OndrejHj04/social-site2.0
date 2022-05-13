import Login from "./Login";
import Register from "./Register";
import ScrollPage from "./ScrollPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Nav";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Navigate to="/login" />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/scroll-page" element={<ScrollPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
