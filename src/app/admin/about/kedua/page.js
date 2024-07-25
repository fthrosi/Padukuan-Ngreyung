"use client";
import Btn from "@/components/tentangPadukuhan/button2";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Pagination,
} from "@nextui-org/react";
import { db } from "@/service/firebase";
import { collection, getDocs } from "firebase/firestore";
import ModalHapus from "@/components/galeri/modalHapusGaleri";
import authCheck from "@/components/auth/authcheck";

const galeriPage = () => {
  const [data, setData] = React.useState([]);
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "kedua"));
    const result = querySnapshot.docs.map((doc) => {
      return {
        key: doc.id,
        id: doc.data().id,
        tanggalPembuatan: doc.data().tanggalPembuatan,
        image: doc.data().gambar,
      };
    });
    const sortedResult = result.sort(
      (a, b) => new Date(b.tanggalPembuatan) - new Date(a.tanggalPembuatan)
    );
    setData(sortedResult);
  };

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return data.slice(start, end);
  }, [page, data]);

  const pages = Math.ceil(data.length / rowsPerPage);
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-end pl-10 pr-10">
        <Btn />
      </div>
      <div className="flex justify-center">
        <div className="w-[800px] rounded-xl p-2">
            <Table
            aria-label="Example table with client side pagination"
            bottomContent={
                <div className="flex w-full justify-center">
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="secondary"
                    page={page}
                    total={pages}
                    onChange={(page) => setPage(page)}
                    className="flex justify-center items-center"
                />
                </div>
            }
            classNames={{
                wrapper: "min-h-[222px]",
            }}
            >
            <TableHeader>
                <TableColumn key="image" className="text-center">GAMBAR</TableColumn>
            </TableHeader>
            <TableBody items={items}>
                {(item) => (
                <TableRow key={item.key} className="text-center">
                    <TableCell className="flex justify-center">
                    <img
                        src={item.image}
                        alt="Gambar"
                        className="w-80 h-52 object-cover rounded-lg"
                    />
                    </TableCell>
                </TableRow>
                )}
            </TableBody>
            </Table>
        </div>
      </div>
    </div>
  );
};

export default authCheck(galeriPage);
