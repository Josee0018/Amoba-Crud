"use client";
import Button from "../components/Button";
import { NextResponse } from "next/server";
import PrivatePage from "../layouts/PrivateLayout";

const onLogout = async (e) => {
  e.preventDefault();
  try {
    const response = NextResponse.json({
      message: "Logout Sucessful",
      success: true,
    });
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    console.log(process.env.API_URL);
    window.location.assign("/login");
  } catch (error) {
    console.log(error);
  }
};

function Home() {
  return (
    <PrivatePage>
      <div>Bienvenido esta es la pagina principal WIP: En Construccion</div>
      <Button
        isSubmit
        text="Log out"
        onClick={(e) => onLogout(e)}
        customClassName="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
      />
    </PrivatePage>
  );
}

export default Home;
