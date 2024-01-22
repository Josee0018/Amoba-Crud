import React from "react";
import { HiOutlineBellAlert, HiMagnifyingGlass } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="w-full h-28 bg-white rounded flex justify-between p-4">
      <div className="w-5/12 hidden lg:block bg-gray-100 rounded-3xl relative p-4">
        <div className="flex h-full items-center cursor-no-drop">
          <HiMagnifyingGlass className="text-gray-300 w-20 h-full" />
          <div className="rounded-full text-lg text-gray-300">Search</div>
        </div>
      </div>
      <div className="lg:w-5/12 w-full bg-white rounded relative p-2 flex flex-row justify-around">
        <div>
          <HiOutlineBellAlert className="text-sky-300 w-20 h-16 sm:block hidden" />
        </div>
        <div className="bg-swhite w-52 flex justify-stretch space-x-2">
          <div className="w-8/12 rounded-full text-right">
            <div className="rounded-full text-lg">Pepito Perez</div>
            <div className="rounded-full text-gray-500 text-sm">
              Pepito Perez
            </div>
          </div>
          <div className="bg-white w-4/12 rounded-full">
            <img
              src="https://img2.migalhas.com.br/_MEDPROC_/autor.jpg._PROC_AC1331307AT1AP14SNSS30SNSBP1V5.png"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
