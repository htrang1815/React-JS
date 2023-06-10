import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex  flex-col bg-[#213547] w-[15%] h-[100vh]  text-[#fff] justify-start items-stretch">
      <NavLink
        to="/reverses"
        className={({ isActive }) => {
          return `${
            isActive ? "text-[#fff] bg-[#5080aa]" : ""
          } block text-[#fff] font-[500] hover:bg-[#5080aa]  leading-[40px] p-[15px]`;
        }}
      >
        Reverses
      </NavLink>
      <NavLink
        to="/chunk"
        className={({ isActive }) => {
          return `${
            isActive ? "text-[#fff] bg-[#5080aa]" : ""
          } block text-[#fff] font-[500] hover:bg-[#5080aa]  leading-[40px] p-[15px]`;
        }}
      >
        Chunk
      </NavLink>
      <NavLink
        to="/uniqarr"
        className={({ isActive }) => {
          return `${
            isActive ? "text-[#fff] bg-[#5080aa]" : ""
          } block text-[#fff] font-[500] hover:bg-[#5080aa]  leading-[40px] p-[15px]`;
        }}
      >
        Unique Array
      </NavLink>
      <NavLink
        to="/uniqobj"
        className={({ isActive }) => {
          return `${
            isActive ? "text-[#fff] bg-[#5080aa]" : ""
          } block text-[#fff] font-[500] hover:bg-[#5080aa]  leading-[40px] p-[15px]`;
        }}
      >
        Unique Object
      </NavLink>
      <NavLink
        to="/groupby"
        className={({ isActive }) => {
          return `${
            isActive ? "text-[#fff] bg-[#5080aa]" : ""
          } block text-[#fff] font-[500] hover:bg-[#5080aa]  leading-[40px] p-[15px]`;
        }}
      >
        Group By
      </NavLink>
      <NavLink
        to="/trimall"
        className={({ isActive }) => {
          return `${
            isActive ? "text-[#fff] bg-[#5080aa]" : ""
          } block text-[#fff] font-[500] hover:bg-[#5080aa]  leading-[40px] p-[15px]`;
        }}
      >
        Trim All
      </NavLink>
      <NavLink
        to="/mapkey"
        className={({ isActive }) => {
          return `${
            isActive ? "text-[#fff] bg-[#5080aa]" : ""
          } block text-[#fff] font-[500] hover:bg-[#5080aa]  leading-[40px] p-[15px]`;
        }}
      >
        Map Key
      </NavLink>
      <NavLink
        to="/switchorder"
        className={({ isActive }) => {
          return `${
            isActive ? "text-[#fff] bg-[#5080aa]" : ""
          } block text-[#fff] font-[500] hover:bg-[#5080aa]  leading-[40px] p-[15px]`;
        }}
      >
        Switch Order
      </NavLink>
      <NavLink
        to="/sumall"
        className={({ isActive }) => {
          return `${
            isActive ? "text-[#fff] bg-[#5080aa]" : ""
          } block text-[#fff] font-[500] hover:bg-[#5080aa]  leading-[40px] p-[15px]`;
        }}
      >
        Sum All
      </NavLink>
      <NavLink
        to="/templatestring"
        className={({ isActive }) => {
          return `${
            isActive ? "text-[#fff] bg-[#5080aa]" : ""
          } block text-[#fff] font-[500] hover:bg-[#5080aa]  leading-[40px] p-[15px]`;
        }}
      >
        Template String
      </NavLink>
    </div>
  );
};

export default NavBar;
