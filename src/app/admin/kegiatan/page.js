"use client"
import Btn from "@/components/kegiatan/addKegiatanButton";
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
import { FaCirclePlus } from "react-icons/fa6";
import { db } from "@/service/firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import ModalHapus from "@/components/kegiatan/modalHapusKegiatan";
import authCheck from "@/components/auth/authcheck";

const kegiatanPage = () => {
    const [datas, setDatas] = React.useState([]);
    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "kegiatan"));
        const result = querySnapshot.docs.map((doc) => {
          return {
            key: doc.id,
            id: doc.data().id,
            tanggalPembuatan: doc.data().tanggalPembuatan,
            tanggal: doc.data().tanggal,
            judul: doc.data().judul,
            image: doc.data().gambar,
            actions: (
              <div className="space-x-1 flex flex-wrap">
                <Button
                  color="warning"
                  as={Link}
                  href={`/admin/kegiatan/editKegiatan/${doc.data().id}`}
                >
                  Ubah
                </Button>
                <ModalHapus
                  id={doc.id}
                  reload={fetchData}
                  linkImage={doc.data().gambar}
                />
              </div>
            ),
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
                <TableColumn key="namaKegiatan" className="text-center">JUDUL</TableColumn>
                <TableColumn key="tanggal" className="text-center">TANGGAL PEMBUATAN</TableColumn>
                <TableColumn key="deskripsi" className="text-center">TANGGAL KEGIATAN</TableColumn>
                <TableColumn key="actions" width="200" className="text-center">
                    Actions
                </TableColumn>
            </TableHeader>
            <TableBody items={items}>
                {(item) => (
                    <TableRow key={item.key} className="text-center">
                        <TableCell className="flex justify-center"> 
                            <img
                                src={item.image}
                                className="w-60 h-60 object-cover rounded-lg"
                            />
                        </TableCell>
                        <TableCell><div className="flex justify-center">{item.judul}</div></TableCell>
                        <TableCell><div className="flex justify-center">{item.tanggalPembuatan}</div></TableCell>
                        <TableCell><div className="flex justify-center">{item.tanggal}</div></TableCell>
                        <TableCell><div className="flex justify-center">{item.actions}</div></TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
        </div>
    );
};

export default authCheck(kegiatanPage);
