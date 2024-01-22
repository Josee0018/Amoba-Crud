import React from "react";

import { MENU_OPTIONS } from "@/app/common/constants";
import NavBarItem from "./components/NavBarItem";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname()
  const menuOptions = MENU_OPTIONS;
  return (
    <div className="flex z-30 lg:h-screen h-full lg:relative fixed lg:w-24 w-8 flex-col items-center border-r border-gray-200 bg-primary lg:rounded-2xl rounded-md lg:p-16 p-1">
      <div className="flex lg:h-20 h-8 lg:w-20 w-7 items-center justify-center border-b border-gray-200 lg:p-6 p-1.5 bg-white rounded-full ">
        <img
          alt="amoma_logo"
          src="https://amobasoftware.com/assets/isoAmoba.510ff07f.svg"
        />
      </div>
      <nav className="flex flex-1 flex-col gap-y-4 pt-10">
        {menuOptions?.map((item) => {
          const { id, icon: Icon, redirect, isSeparated } = item;
          const isActive =
            pathname === redirect ||
            pathname.includes(redirect);
          return (
            <NavBarItem
              key={`${id}-navbar`}
              isActive={isActive}
              icon={Icon}
              id={id}
              redirect={redirect}
              isSeparated={isSeparated}
            />
          );
        })}
      </nav>
    </div>
  );
};

export default NavBar;
