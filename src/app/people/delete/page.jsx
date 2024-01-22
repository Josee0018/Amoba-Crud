"use client";
import PropTypes from "prop-types";

import axios from "axios";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import { API_ROUTES } from "@/app/utils/constants";

const DeletePeople = (props) => {
  const { item } = props;

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!item.id) {
      alert("Please fill all mandatory paramters");
      return;
    }
    try {
      const response = await axios.delete(`${API_ROUTES.PEOPLE}/${item.id}`);
      if (response.status === 200) {
        window.location.assign("/people");
        router.push("/people");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded px-16 pt-8 pb-12 mb-4">
        <h1 className="text-3xl mb-4 text-center">
          ¿Desea Borrar a {item?.name}?
        </h1>
        <Button
          isSubmit
          text="Borrar"
          onClick={(e) => onSubmit(e)}
          customClassName="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-full"
        />
      </div>
    </div>
  );
};

DeletePeople.propTypes = {
  item: PropTypes.object,
};

DeletePeople.defaultProps = {
  item: {},
};

export default DeletePeople;
