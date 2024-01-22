import PropTypes from "prop-types";

function PublicPage(props) {
  const { children, customClasses, isForm } = props;
  const formHeaderClasses = isForm ? "mt-2" : "";
  return (
    <div
      className={`bg-white-100 lg:shadow lg:p-8 rounded-lg lg:rounded-2xl text-black-100 ${customClasses} ${formHeaderClasses}`}
    >
      <div className="flex justify-stretch">
        <div className="w-full p-4">
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

PublicPage.propTypes = {
  children: PropTypes.any.isRequired,
  customClasses: PropTypes.string,
  isForm: PropTypes.bool,
};

PublicPage.defaultProps = {
  customClasses: "",
  isForm: false,
};

export default PublicPage;
