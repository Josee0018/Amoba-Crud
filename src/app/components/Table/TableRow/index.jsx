import React from "react";
import PropTypes from "prop-types";
import Button from "../../Button";

const TableRow = (props) => {
  const { item, handleEditModal, handleDeleteModal } = props;
  return (
    <tr className="flex lg:flex-row flex-col justify-between bg-white rounded-full mb-4 p-3 shadow">
      <td className="lg:ml-4 ml-8">{`${item?.name} ${item?.lastname}`}</td>
      <td className="flex flex-row space-x-5 lg:w-5/12 w-4/12 lg:mr-8 ml-8">
        <Button
          text="editar"
          onClick={() => handleEditModal(item?.id)}
          customClassName="bg-sky-400 lg:w-full w-20 text-white font-light"
          roundedClass="rounded-full"
        />
        <Button
          text="borrar"
          onClick={() => handleDeleteModal(item?.id)}
          customClassName="bg-red-500 rounded-full lg:w-full w-20 text-white font-light"
          roundedClass="rounded-full"
        />
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  item: PropTypes.object,
  handleEditModal: PropTypes.func,
  handleDeleteModal: PropTypes.func,
};

TableRow.defaultProps = {
  item: {},
  handleEditModal: null,
  handleDeleteModal: null,
};

export default TableRow;
