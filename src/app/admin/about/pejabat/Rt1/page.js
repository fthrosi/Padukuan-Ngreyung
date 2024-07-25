"use client"
import Btn from "@/components/tentangPadukuhan/buttonRt1";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
  Pagination,
  image,
} from "@nextui-org/react";
import { db } from "@/service/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import authCheck from "@/components/auth/authcheck";

const kegiatanPage = () => {
    const [datas, setDatas] = React.useState([]);
    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "rt1"));
        const result = querySnapshot.docs.map((doc) => {
          return {
            key: doc.id,
            id: doc.data().id,
            tanggalPembuatan: doc.data().tanggalPembuatan,
            nama: doc.data().nama,
            jabatan: doc.data().jabatan,
            image: doc.data().gambar,
          };
        });
        setDatas(result);
      };
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 5;
    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return datas.slice(start, end);
    }, [page, datas]);

    const pages = Math.ceil(datas.length / rowsPerPage);
    React.useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className="flex justify-end pl-10 pr-10">
                <Btn /> 
            </div>
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
                    />
                </div>
            }
            classNames={{
                wrapper: "min-h-[222px]",
            }}
        >
            <TableHeader>
                <TableColumn key="Gambar" className="text-center">GAMBAR</TableColumn>
                <TableColumn key="namaKegiatan" className="text-center">Nama</TableColumn>
                <TableColumn key="deskripsi" className="text-center">Jabatan</TableColumn>
            </TableHeader>
            <TableBody items={items}>
                {(item) => (
                    <TableRow key={item.key} className="text-center">
                        <TableCell className="flex justify-center"> 
                            <img
                                src={item.image}
                                className="w-60 h-60 object-cover rounded-lg"
                                alt="Pejabat"
                            />
                        </TableCell>
                        <TableCell><div className="flex justify-center">{item.nama}</div></TableCell>
                        <TableCell><div className="flex justify-center">{item.jabatan}</div></TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
        </div>
    );
};

export default authCheck(kegiatanPage);
