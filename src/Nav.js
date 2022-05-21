import { Outlet, useNavigate } from "react-router-dom";
export default function Nav({ url, activeUser, changeActiveUser }) {

  const navigate = useNavigate()

  const logOut = () => {
    changeActiveUser()
    navigate("/login")
  }
  
  return (
    <>
      <div className="bg-blue p-3 flex justify-between">
        <h1 className="font-chalk text-5xl text-white">Blig</h1>
        {url.includes("scroll-page") && activeUser && activeUser.username && (
          <>
            <h1 className="my-auto mx-2 text-2xl text-white flex-1 text-center" style={{fontSize: "min(5vw, 60px)"}}>{activeUser.username}</h1>
            <img alt="" width="25" src={require("./img/exit.png")} className="cursor-pointer my-auto text-xl" onClick={logOut} />
          </>
        )}
      </div>
      <Outlet />
    </>
  );
}
