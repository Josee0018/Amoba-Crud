import { useEffect, useState } from "react";
import { API_ROUTES } from "../utils/constants";
import axios from "axios";

export const usePeopleHook = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterList, setFilterList] = useState(null);
  const [originalList, setOriginalList] = useState(null);
  const [rotate, setRotate] = useState("▼");
  const [showCreateModal, setCreateShowModal] = useState(false);
  const [showEditModal, setEditShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDeleteModal, setDeleteShowModal] = useState(false);

  const getPeople = async () => {
    try {
      const response = await axios.get(API_ROUTES.PEOPLE);
      setFilterList(response?.data?.data);
      setOriginalList(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filterList) {
      getPeople();
    }
  }, [filterList]);

  const handleInput = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const searchTermLower = searchTerm.toLowerCase();
    const filteredPeople = filterList?.filter((person) => {
      const fullName = `${person?.name} ${person?.lastname}`.toLowerCase();
      return (
        person?.name.toLowerCase().includes(searchTermLower) ||
        person?.lastname.toLowerCase().includes(searchTermLower) ||
        fullName.includes(searchTermLower)
      );
    });

    setFilterList(searchTerm ? filteredPeople : originalList);
  };

  const handleFilterByName = () => {
    if (rotate === "▼") {
      setFilterList(originalList?.sort((a, b) => (a.name > b.name ? 1 : -1)));
      setRotate("▲");
    } else {
      setFilterList(originalList?.sort((a, b) => (a.name < b.name ? 1 : -1)));
      setRotate("▼");
    }
  };

  const handleEditModal = (e) => {
    setSelectedItem(originalList?.find((person) => person?.id === e));
    setEditShowModal(!showEditModal);
  };

  const handleCreateModal = () => {
    setCreateShowModal(!showCreateModal);
  };

  const handleDeleteModal = (e) => {
    setSelectedItem(originalList?.find((person) => person?.id === e));
    setDeleteShowModal(!showDeleteModal);
  };

  return {
    people: filterList,
    searchTerm,
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
    showDeleteModal
  };
};
