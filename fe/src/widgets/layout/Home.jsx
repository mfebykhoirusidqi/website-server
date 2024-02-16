import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { Card, Typography, Button, IconButton } from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const customText = (e, i) => {
  return (
    <p key={i} className="p-2 text-blue-300">
      {e}
    </p>
  );
};

export function Home() {
  const split = `1. masukkan nama lengkap - 2.masukkan email - 3.masukkan password - 4.konfirmasi password sebelumnya - 5.pilih role optional`;
  const nav = useNavigate();
  useEffect(() => {
    nav("/auth/home", { replace: true });
  }, []);
  return (
    <div className=" container mx-auto">
      <Card className="w-full max-w-full p-4 text-light-blue-400">
        <Typography variant="lead" className="py-4 text-start font-bold">
          Tata Cara Register siswa
        </Typography>
        {split
          .split("-")
          .slice(0, 4)
          .map((e, i) => {
            return customText(e, i);
          })}
        <p className="p-2">5.pilih gender</p>
        <Link to="/auth/register/siswa">
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 px-4"
          >
            <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
            Register Siswa
          </Button>
        </Link>
        <Typography variant="lead" className="py-4 text-start font-bold">
          Tata Cara Register guru
        </Typography>
        {split.split("-").map((e, i) => {
          return customText(e, i);
        })}
        <Link to="/auth/register/guru">
          <Button
            variant="text"
            color="blue-gray"
            className=" flex items-center gap-1 px-4"
          >
            <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
            Register Guru
          </Button>
        </Link>
        <Typography variant="lead" className="py-4 text-start font-bold">
          Tata Cara Register admin
        </Typography>
        {split.split("-").map((e, i) => {
          return customText(e, i);
        })}
        <Link to="/auth/register/admin">
          <Button
            variant="text"
            color="blue-gray"
            className=" flex items-center gap-1 px-4"
          >
            <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
            Register Admin
          </Button>
        </Link>
        <Typography variant="lead" className="py-4 text-start font-bold">
          Tata Cara Login admin/siswa/guru
        </Typography>
        {split
          .split("-")
          .slice(0, 3)
          .map((e, i) => {
            return customText(e, i);
          })}
        <Link to="/auth/sign-in">
          <Button
            variant="text"
            color="blue-gray"
            className=" flex items-center gap-1 px-4"
          >
            <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
            Login
          </Button>
        </Link>
      </Card>
    </div>
  );
}

export default Home;
