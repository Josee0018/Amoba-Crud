
import axios from "axios";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

function NavBarItem(props) {
  const { icon: Icon, redirect, isSeparated, isActive, id } = props;
  const router = useRouter();
  const handleLogout = async () => {
    window.location.assign("/login");
    const response = await axios.get("/api/users/logout");
    if (response.status === 200) {
      router.push("/login");
    }
  };
  return (
    <div
      className={`${
        isSeparated ? "mt-32" : "mt-0"
      } rounded-full z-20 h-10 mb-2 hover:cursor-pointer hover:bg-white`}
      onClick={
        id === "logout"
          ? () => handleLogout()
          : () => window.location.assign(redirect)
      }
      onKeyUp={
        id === "logout"
          ? () => handleLogout()
          : () => window.location.assign(redirect)
      }
      role="button"
      tabIndex={0}
    >
      <div
        className={
          isActive
            ? "bg-white lg:w-24 w-8 h-12 absolute rounded-l-lg -z-10"
            : ""
        }
      />
      <Icon
        className={`lg:w-16 w-8 h-10 p-1 hover:text-sky-600 ${
          isActive ? "text-sky-300" : "text-white"
        }`}
      />
    </div>
  );
}

NavBarItem.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  redirect: PropTypes.string,
  isActive: PropTypes.bool,
  isSeparated: PropTypes.bool,
};

NavBarItem.defaultProps = {
  redirect: "",
  isActive: false,
  isSeparated: false,
};

export default NavBarItem;
