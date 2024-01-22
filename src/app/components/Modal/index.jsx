import React from "react";
import PropTypes from "prop-types";

const Modal = (props) => {
  const {
    id,
    handleModal,
    children,
    customClassName,
  } = props;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4 bg-black-100/80 h-full overflow-auto">
      <div
        className={`relative bg-white-100 rounded-3xl drop-shadow-sm p-4 lg:mt-24 ${customClassName}`}
      >
        <button
          type="button"
          className="absolute top-4 right-4 text-black-200 fill-black-100 mr-10"
          onClick={handleModal}
        >
          X<span className="sr-only">Close modal</span>
        </button>
        <div className="text-center">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  handleModal: PropTypes.func.isRequired,
  handleAction: PropTypes.func,
  modalType: PropTypes.string,
  actionMessage: PropTypes.string,
  children: PropTypes.any.isRequired,
  customClassName: PropTypes.string,
  isButtonDisabled: PropTypes.bool,
};

Modal.defaultProps = {
  id: "",
  customClassName: "",
  isButtonDisabled: false,
  modalType: "",
  handleAction: null,
  actionMessage: "",
};

export default Modal;
