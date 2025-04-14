import React, { useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useUserContext } from "@/context/AuthContext";
import { sidebarLinks } from "@/constants";
import { INavLink } from "@/types";
const LeftSidebar = () => {
  const { pathname } = useLocation();
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { mutate: signOut, isSuccess } = useSignOutAccount();

  useEffect(() => {
    if (isSuccess) {
      console.log("success");

      localStorage.removeItem("cookieFallback");
      navigate(0);
    }
  }, [isSuccess]);

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={170}
            height={36}
          />
        </Link>
        {/* user profile  */}
        <Link to={`/profile/${user?.id}`} className="flex items-center gap-3">
          <img
            src={user.imageUrl || "/profile/images/profile.png"}
            alt="profile"
            className="w-14 h-14 rounded-full"
          />

          <div className="flex flex-col ">
            <p className="body-bold">{user.name}</p>
            <p className="small-regular text-light-3">@{user.username}</p>
          </div>
        </Link>

        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((link: INavLink, index) => {
            const isActive = pathname === link.route;
            return (
              <li
                key={link.label}
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}
              >
                <NavLink
                  to={link.route}
                  key={index}
                  className="flex items-center gap-4 p-4"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white w-6 h-6 ${
                      isActive && "invert-white"
                    }`}
                  />
                  <p className="body-medium">{link.label}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <Button
        variant="ghost"
        className="shad_button_ghost flex-start"
        onClick={() => signOut()}
      >
        <img
          src="/assets/icons/logout.svg"
          alt="logout"
          className="w-7 h-7 rounded-full"
        />
        <p className="small-medium lg:base-medium">Logout</p>
      </Button>
    </nav>
  );
};

export default LeftSidebar;
