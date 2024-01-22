"use client";
import Button from "@/app/components/Button";
import InputSearch from "@/app/components/InputSearch/InputSearch";
import Modal from "@/app/components/Modal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import PropTypes from "prop-types";
import { usePeopleHook } from "./page.hook";
import PrivatePage from "../layouts/PrivateLayout";
import EditPeople from "./edit/page";
import CreatePeople from "./create/page";
import DeletePeople from "./delete/page";

function PeopleView(props) {
  const hookData = usePeopleHook(props);
  const {
    people,
    rotate,
    handleInput,
    handleSearch,
    handleFilterByName,
    showCreateModal,
    handleCreateModal,
    showEditModal,
    handleEditModal,
    selectedItem,
    handleDeleteModal,
    showDeleteModal,
  } = hookData;

  return (
    <PrivatePage>
      <div className="flex flex-col w-full mx-auto align-center">
        <form
          className="bg-primary lg:w-full rounded-3xl lg:p-5 p-4 lg:ml-0 ml-8"
          onSubmit={handleInput}
        >
          <div className="flex lg:flex-row flex-row-reverse justify-between">
            <div className="flex flex-row w-8/12 justify-around text-white ">
              <div className="cursor-no-drop lg:block hidden">Fecha ▼</div>
              <div className="cursor-no-drop lg:block hidden">Sexo ▼</div>
              <div className="cursor-no-drop lg:block hidden">
                Nacionalidad ▼
              </div>
              <div className="cursor-no-drop lg:block hidden">
                Personalizar ▼
              </div>
            </div>
            <div className="lg:w-4/12 md:w-5/12 w-full">
              <InputSearch
                placeholder="Search by name"
                onClick={handleSearch}
                handleInputSearch={handleInput}
              />
            </div>
          </div>
        </form>
        <div className="flex flex-row lg:w-full justify-between text-gray-200 space-x-2 lg:mx-0 mx-8 my-4">
          <div className="lg:shadow rounded-full flex flex-row space-x-2 items-center w-96">
            <div className="cursor-no-drop lg:block hidden bg-primary rounded-full p-5 text-white w-full text-center">
              Todos ▼
            </div>
            <div className="cursor-no-drop lg:block hidden w-full text-center">
              Nuevos ▼
            </div>
            <div className="cursor-no-drop lg:block hidden w-full text-center">
              Antiguo ▼
            </div>
          </div>
          <div className="flex flex-row space-x-2 w-7/12 text-center">
            <Button
              text="Agregar nuevo"
              onClick={handleCreateModal}
              customClassName="bg-primary rounded-full w-full h-16"
              roundedClass="rounded-full"
            />
            <div className="cursor-no-drop lg:block hidden bg-white rounded-full py-5 text-gray-200 shadow w-full text-center">
              Editar Vista
            </div>
            <div className="cursor-no-drop lg:block hidden bg-white rounded-full py-5 text-gray-200 shadow w-full text-center">
              Descargar
            </div>
          </div>
        </div>
        <div className="bg-white rounded w-full p-0 lg:ml-0 ml-4">
          <Button
            text="Nombre A-Z"
            icon={rotate}
            onClick={handleFilterByName}
            isSubmit
            customClassName="text-black h-2 w-40 relative border-none font-bold "
          />
          <Table
            list={people}
            handleEditModal={handleEditModal}
            handleDeleteModal={handleDeleteModal}
          />
        </div>
        {showCreateModal && (
          <Modal
            handleModal={handleCreateModal}
            customClassName="lg:w-2/4 w-3/4 h-1/4 m-auto"
          >
            <CreatePeople />
          </Modal>
        )}
        {showEditModal && (
          <Modal
            handleModal={(e) => handleEditModal(e)}
            customClassName="lg:w-2/4 w-3/4 h-1/4 m-auto"
          >
            <EditPeople item={selectedItem} />
          </Modal>
        )}
        {showDeleteModal && (
          <Modal
            handleModal={(e) => handleDeleteModal(e)}
            customClassName="w-2/4 h-1/4 m-auto"
          >
            <DeletePeople item={selectedItem} />
          </Modal>
        )}
        <Pagination />
      </div>
    </PrivatePage>
  );
}

PeopleView.propTypes = {
  people: PropTypes.object,
  rotate: PropTypes.number,
  handleInput: PropTypes.func,
  handleSearch: PropTypes.func,
  handleFilterByName: PropTypes.func,
  showCreateModal: PropTypes.bool,
  handleCreateModal: PropTypes.func,
  handleActionCreate: PropTypes.func,
  showEditModal: PropTypes.bool,
  handleEditModal: PropTypes.func,
  handleDeleteModal: PropTypes.func,
  selectedItem: PropTypes.string,
  showDeleteModal: PropTypes.bool,
  isLoading: PropTypes.bool,
};

PeopleView.defaultProps = {
  people: [],
  rotate: 0,
  handleInput: null,
  handleSearch: null,
  handleFilterByName: null,
  showCreateModal: false,
  handleCreateModal: null,
  handleActionCreate: null,
  showEditModal: false,
  handleEditModal: null,
  handleDeleteModal: null,
  selectedItem: null,
  showDeleteModal: false,
  isLoading: false,
};

export default PeopleView;
