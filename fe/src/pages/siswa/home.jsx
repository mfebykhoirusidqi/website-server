import { Card, CardBody } from "@material-tailwind/react";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { getMethod } from "@/service/auth";
import { Link } from "react-router-dom";

export const HomeSiswa = () => {
  const [fullname, setFullname] = React.useState("");
  React.useEffect(() => {
    getMethod.GetUser().then((res) => {
      setFullname(res.data.data.fullname);
    });
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <Card className="">
        <CardBody className="flex flex-row gap-4">
          <SearchIcon />
          <div>mencari sesuatu....</div>
        </CardBody>
      </Card>
      <Card className="">
        <CardBody className="flex flex-col gap-4">
          <p className="text-2xl font-extrabold text-blue-400">
            Selamat datang, {fullname}
          </p>
          <p className="font-bold">
            kamu memiliki 1 tugas latihan yang baru.{" "}
            <span className="font-extrabold text-light-green-300 hover:opacity-50">
              <Link to="/siswa/Latihan-Tugas">Kerjakan sekarang!</Link>
            </span>
          </p>
          <p className="font-bold">
            Keterangan absen kamu kemaren adalah Hadir , jangan lupa absen hari
            ini ya.
          </p>
        </CardBody>
        <CardBody>
          <div className="flex flex-col gap-4 ">
            <p className="w-auto text-2xl font-extrabold text-blue-400">
              Di Website Ini kamu akan belajar mengenai Gerak Lurus dalam Fisika
            </p>
            <p className="font-bold">
              kamu memiliki 1 tugas latihan yang baru.{" "}
              <Link to="/siswa/Latihan-Tugas">
                <span className="font-extrabold text-light-green-300 hover:opacity-50">
                  Kerjakan sekarang!
                </span>
              </Link>
            </p>
            <p className="font-bold">
              Keterangan absen kamu kemaren adalah Hadir , jangan lupa absen
              hari ini ya.
            </p>{" "}
            <Link to="/siswa/Nilai-Siswa">
              <div className="flex h-auto w-32 items-center justify-center rounded-lg border-2 border-gray-400 text-blue-400  hover:border-green-500 hover:text-green-500 hover:shadow-2xl">
                <p className="p-1 font-extrabold">lihat nilaimu</p>
              </div>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default HomeSiswa;
