import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo-dark.png";
import { AuthContext } from "../../Provider/AuthProvider";
import avatar from "../../assets/images/avatar-image.png";
import { toast } from "react-toastify";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import logoDark from '../../assets/images/logo.png'

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Logged Out");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container mx-auto px-6">
        <div className="navbar py-6 ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-green-600 font-semibold "
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/create-assignment"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-green-600 font-semibold  "
                        : ""
                    }
                  >
                    Create Assignment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/assignments"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-green-600 font-semibold  "
                        : ""
                    }
                  >
                    All Assignments
                  </NavLink>
                </li>
                <li>
                {user?.email ? <><NavLink
                to="/submitted-assignments"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-600 font-semibold  "
                    : ""
                }
              >
                Submitted Assignments
              </NavLink></>: ''}
                </li>
              </ul>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-40">
                {theme === 'light'? <img className=" md:block" src={logo} alt="" />: <img className=" md:block" src={logoDark} alt="" />}
                
              </div>
              {/* dark mode button */}

              <div>
                <div className="flex-none">
                  {/* Toggle button here */}
                  <button className="btn btn-square btn-ghost">
                    <label className="swap swap-rotate w-12 h-12">
                      <input
                        type="checkbox"
                        onChange={handleToggle}
                        // show toggle image based on localstorage theme
                        checked={theme === "light" ? false : true}
                      />
                      {/* show sun or moon icon */}
                      {theme === "light" ? (
                        <BsFillSunFill size={20} />
                      ) : (
                        <BsFillMoonStarsFill size={20} />
                      )}
                    </label>
                  </button>
                </div>
              </div>
              {/* dark mode button end */}
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg font-normal space-x-8">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-600 font-semibold "
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/create-assignment"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-600 font-semibold  "
                    : ""
                }
              >
                Create Assignment
              </NavLink>
              <NavLink
                to="/assignments"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-600 font-semibold  "
                    : ""
                }
              >
                All Assignments
              </NavLink>
              {user?.email ? <><NavLink
                to="/submitted-assignments"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-600 font-semibold  "
                    : ""
                }
              >
                Submitted Assignments
              </NavLink></>: ''}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img src={user?.photoURL} alt="" />
                  ) : (
                    <img src={avatar} alt="" />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
              >
                <li className="py-3">
                  <a className="justify-between">{user?.displayName}</a>
                </li>
                <li>
                  <Link to={'/posted-assignments'} >Posted Assignments</Link>
                </li>
                <li className="pb-3">
                  <Link to={'/mysubmit-assignments'} >My Submit Assignments</Link>
                </li>
              </ul>
            </div>
            <div className="ml-6">
              {user?.email ? (
                <>
                  {" "}
                  <button
                    onClick={handleLogOut}
                    type="button"
                    className="text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <Link to={"/login"}>
                    <button
                      type="button"
                      className="text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Login
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
