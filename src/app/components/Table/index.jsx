import React from "react";
import PropTypes from "prop-types";
import TableRow from "./TableRow";
import Button from "../Button";

const Table = (props) => {
  const { list, handleEditModal, handleDeleteModal } = props;

  return (
    <table className="w-full h-80">
      <thead>
        <tr className="flex flex-row justify-between mb-4">
          <th>
            <div></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <div className="bg-gray-100 p-4 m-4 rounded-2xl">
          {list?.map((item) => (
            <TableRow
              key={item.id}
              item={item}
              handleEditModal={handleEditModal}
              handleDeleteModal={handleDeleteModal}
            />
          ))}
        </div>
      </tbody>
    </table>
  );
};

Table.propTypes = {
  list: PropTypes.array,
  handleEditModal: PropTypes.func,
  handleDeleteModal: PropTypes.func,
};

Table.defaultProps = {
  list: [],
  handleEditModal: null,
  handleDeleteModal: null,
};

export default Table;
