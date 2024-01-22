import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const {
    text,
    onClick,
    isDisabled,
    customClassName,
    textCustomClass,
    isSubmit,
    roundedClass,
    icon,
    iconClassName,
  } = props;

  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={`${customClassName} border p-2 lg:px-10 px-2 lg:text-base text-sm lg:py-1 py-2 justify-center ${
        roundedClass ? roundedClass : "rounded-lg"
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      <div className="flex flex-row space-x-4 items-center">
        <span className={`${textCustomClass} w-full`}>{text}</span>
        {icon && (
          <span className={`${textCustomClass} ${iconClassName} w-full`}>
            {icon}
          </span>
        )}
      </div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
  isSubmit: PropTypes.bool,
  customClassName: PropTypes.string,
  textCustomClass: PropTypes.string,
  iconClassName: PropTypes.string,
  roundedClass: PropTypes.string,
  icon: PropTypes.element,
};

Button.defaultProps = {
  text: "",
  onClick: null,
  isDisabled: false,
  isSubmit: false,
  customClassName: "",
  textCustomClass: "",
  iconClassName: "",
  roundedClass: "",
  icon: null,
};

export default Button;
