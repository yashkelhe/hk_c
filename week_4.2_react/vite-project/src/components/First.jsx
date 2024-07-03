import { Link, NavLink, Outlet } from "react-router-dom";

function First() {
  return (
    <>
      <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
        <Outlet />
        <NavLink to="/">Click here</NavLink>
      </div>
    </>
  );
}

export default First;
