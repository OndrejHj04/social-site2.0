import { Outlet, useNavigate } from "react-router-dom";
export default function Nav({ url, activeUser, changeActiveUser }) {

  const navigate = useNavigate()

  const logOut = () => {
    changeActiveUser()
    navigate("/login")
  }

  return (
    <>
      <div className="bg-blue p-3 flex">
        <h1 className="font-chalk text-5xl text-white">Blig</h1>
        {url.includes("scroll-page") && activeUser && activeUser.username && (
          <>
            <h1 className="my-auto mx-2">{activeUser.username}</h1>
            <h1 className="cursor-pointer my-auto mx-2" onClick={logOut}>Log out</h1>
          </>
        )}
      </div>
      <Outlet />
    </>
  );
}
