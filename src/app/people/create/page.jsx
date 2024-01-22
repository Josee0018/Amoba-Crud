"use client";
import Input from "../../components/Input/Input";
import { useState } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import { API_ROUTES } from "@/app/utils/constants";

const defaultData = { name: "", lastname: "", email: "" };

const CreatePeople = () => {

  const [data, setData] = useState(defaultData);

  const router = useRouter();

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!data.lastname || !data.name || !data.email) {
      alert("Please fill all mandatory paramters");
      return;
    }
    try {
      const response = await axios.post(API_ROUTES.PEOPLE, data);
      setData(defaultData);
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
        <h1 className="text-3xl mb-4 text-center">Crear persona</h1>
        <form className="space-y-4">
          <Input
            label="Email"
            id="email"
            type="text"
            value={data.email}
            onChange={onValueChange}
          />
          <Input
            label="Name"
            id="name"
            type="text"
            value={data.name}
            onChange={onValueChange}
          />
          <Input
            label="LastName"
            id="lastname"
            type="text"
            value={data.lastname}
            onChange={onValueChange}
          />
          <Button
            isSubmit
            text="Crear"
            onClick={(e) => onSubmit(e)}
            customClassName="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default CreatePeople;
