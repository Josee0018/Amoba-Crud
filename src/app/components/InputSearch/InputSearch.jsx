import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { HiMagnifyingGlass } from "react-icons/hi2";

const InputSearch = (props) => {
  const { placeholder, onClick, handleInputSearch } = props;

  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e) => {
    handleInputSearch(e);
    setSearchValue(e.target.value);
  };

  return (
    <div className="w-4 h-full relative">
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent text-white outline-0 border-b"
        value={searchValue}
        onChange={(event) => handleInputChange(event)}
      />
      <div className="flex absolute inset-y-0 items-center lg:ml-36 ml-28">
        <Button
          icon={<HiMagnifyingGlass />}
          onClick={onClick}
          isSubmit
          customClassName="text-white absolute border-none"
        />
      </div>
    </div>
  );
};

InputSearch.propTypes = {
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
  handleInputSearch: PropTypes.func,
};

InputSearch.defaultProps = {
  placeholder: "",
  onClick: null,
  handleInputSearch: null,
};

export default InputSearch;
