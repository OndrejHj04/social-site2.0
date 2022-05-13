import { Outlet } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <div className="bg-blue p-3 flex">
        <h1 className="font-chalk text-5xl text-white">Blig</h1>
      </div>
      <Outlet />
    </>
  );
}
