import PropTypes from "prop-types";
import NavBar from "../../components/NavBar";
import Header from "@/app/components/Header";

function PrivatePage(props) {
  const { children, customClasses, isForm } = props;
  const formHeaderClasses = isForm ? "mt-2" : "";

  // validacion
  return (
    <div
      className={`bg-white-100 lg:shadow lg:p-8 rounded-lg lg:rounded-2xl text-black-100 ${customClasses} ${formHeaderClasses}`}
    >
      <div className="flex justify-stretch">
        <NavBar />
        <div className="w-full p-4">
          <Header />
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

PrivatePage.propTypes = {
  children: PropTypes.any.isRequired,
  customClasses: PropTypes.string,
  isForm: PropTypes.bool,
};

PrivatePage.defaultProps = {
  customClasses: "",
  isForm: false,
};

export default PrivatePage;
