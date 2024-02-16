import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { getMethod, postMethod } from "@/service/auth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export const DataSiswa = () => {
  const [regis, setRegis] = useState({
    fullname: "",
    password: "",
    email: "",
    gender: "0",
    role: "siswa",
    image: "",
  });
  const [refresh, setRefresh] = useState(false);
  const handleRegister = (data) => {
    Swal.fire({
      title: `tambah siswa dengan nama:${regis.fullname} ?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Tambah!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `data berhasil ditambah`,
          icon: "success",
          confirmButtonText: "Tutup",
        }).then((_) => {
          postMethod.Register(data).then((res) => {
            setRefresh((v) => !v);
          });
        });
      }
    });
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    getMethod.GetUsers("siswa").then((res) => {
      setData(res.data.data);
    });
  }, [refresh]);
  return (
    <CardBody className="px-0 pb-2">
      <Card className="h-full w-full">
        <div className="flex flex-col gap-8 py-8 pl-8">
          <p className="font-medium text-red-400">
            Anda diwajibkan untuk menjaga kerahasiaan data siswa agar tidak
            terjadi penyalahgunaan !
          </p>
          <p className="text-lg font-medium text-gray-600">
            Data Siswa yang terdaftar di website ini.
          </p>
        </div>
        {data.length < 1 ? (
          <p className="font-medium text-red-400">Data tidak ditemukan !</p>
        ) : (
          <p className="font-medium text-red-400"></p>
        )}
        <div className="flex flex-col">
          <div className="inline-block w-full min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-auto">
              <table className="dark:border-neutral-500 min-w-full table-fixed border text-left text-sm font-light">
                <thead className="dark:border-neutral-500 border-b font-medium">
                  <tr>
                    {[
                      "No.",
                      "Nama",
                      "Email",
                      "Password",
                      "Tanggal Registrasi",
                      "Aksi",
                    ].map((head) => (
                      <th
                        key={head}
                        className="dark:border-neutral-500 border-r px-6 py-4 text-sm font-medium uppercase"
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map(
                    ({ _id, email, fullname, password, createdAt }, i) => {
                      return (
                        <tr
                          key={i}
                          className="dark:border-neutral-500 border-b"
                        >
                          <td className="dark:border-neutral-500 whitespace-nowrap border-r px-6 py-4 font-medium">
                            {i + 1}
                          </td>
                          <td className="dark:border-neutral-500 whitespace-nowrap border-r px-6 py-4">
                            {fullname}
                          </td>
                          <td className="dark:border-neutral-500 whitespace-nowrap border-r px-6 py-4">
                            {email}
                          </td>
                          <td className="dark:border-neutral-500 whitespace-nowrap border-r px-6 py-4">
                            {password}
                          </td>
                          <td className="dark:border-neutral-500 whitespace-nowrap border-r px-6 py-4">
                            {createdAt}
                          </td>
                          <td className="dark:border-neutral-500 whitespace-nowrap border-r px-6 py-4">
                            <div className="w-fit rounded-lg border-2 border-green-200 p-2 text-blue-500 hover:cursor-pointer hover:text-green-300">
                              <Link to={`/admin/edit-user/${_id}`} className="">
                                <BorderColorIcon /> <span>Edit</span>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Card className="flex w-full items-center justify-center">
          <CardBody className="mb-4 flex w-full flex-col items-center justify-center gap-4">
            <Typography
              as="span"
              variant="small"
              className=" text-left font-bold"
            >
              NAMA LENGKAP
            </Typography>
            <Input
              color="red"
              type="text"
              label="Masukkan nama siswa"
              size="lg"
              className={`form-control`}
              onChange={(e) =>
                setRegis({
                  ...regis,
                  fullname: e.target.value,
                })
              }
            />
            <Typography
              as="span"
              variant="small"
              className=" text-left font-bold"
            >
              EMAIL
            </Typography>
            <Input
              color="red"
              type="text"
              label="Masukkan email"
              size="lg"
              className={`form-control`}
              onChange={(e) =>
                setRegis({
                  ...regis,
                  email: e.target.value,
                })
              }
            />
            <Typography
              as="span"
              variant="small"
              className="text-left font-bold"
            >
              PASSWORD
            </Typography>
            <Input
              color="red"
              type={"password"}
              label="Masukkan Kata Sandi"
              size="lg"
              className={`form-control `}
              onChange={(e) =>
                setRegis({
                  ...regis,
                  password: e.target.value,
                })
              }
            />
            <Button
              color="red"
              variant="gradient"
              fullWidth
              onClick={() => handleRegister(regis)}
            >
              Daftar
            </Button>
          </CardBody>
        </Card>
      </Card>
    </CardBody>
  );
};

export default DataSiswa;
