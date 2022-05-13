import { useNavigate } from "react-router-dom";
import Title from "./Title";
export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto my-5">
      <div className="flex flex-col sm:flex-row mx-2">
        <div className="bg-blue p-2 flex flex-col rounded-t-3xl sm:rounded-l-3xl sm:rounded-r-none">
          <Title />
          <p className="text-white sm:mt-auto text-xl text-center mt-2">Place for all Bligumakers!</p>
        </div>
        <form className="bg-slate-200 p-2 flex flex-col flex-1 rounded-b-3xl sm:rounded-r-3xl sm:rounded-l-none  text-xl">
          <label>Username</label>
          <input type="text" className="rounded-lg" />

          <label>Password</label>
          <input type="text" className="rounded-lg" />
        </form>
      </div>
      <div className="flex justify-center m-4">
        <div className="bg-red-500 px-3 py-2 rounded-2xl text-white text-2xl hover:scale-105 transition-all cursor-pointer">Login</div>
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
