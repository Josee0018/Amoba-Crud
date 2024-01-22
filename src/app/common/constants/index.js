import { HiOutlineHome, HiOutlineUser, HiChevronLeft } from "react-icons/hi2";

export const MENU_OPTIONS = [
  {
    id: "home",
    text: "Home",
    icon: HiOutlineHome,
    redirect: "/home",
  },
  {
    id: "people",
    text: "People",
    icon: HiOutlineUser,
    redirect: "/people",
  },
  {
    id: "logout",
    text: "Cerrar sesión",
    icon: HiChevronLeft,
    isSeparated: true,
  },
];
