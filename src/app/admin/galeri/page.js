"use client";
import Btn from "@/components/galeri/addGaleri";
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
    const querySnapshot = await getDocs(collection(db, "galeri"));
    const result = querySnapshot.docs.map((doc) => {
      return {
        key: doc.id,
        id: doc.data().id,
        image: doc.data().gambar,
        actions: (
          <div className="space-x-1 flex flex-wrap">
            <ModalHapus
              id={doc.id}
              reload={fetchData}
              linkImage={doc.data().gambar}
            />
          </div>
        ),
      };
    });
    setData(result);
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
                <TableColumn key="actions" width="400" className="text-center">
                Actions
                </TableColumn>
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
                    <TableCell><div className="flex justify-center">{item.actions}</div></TableCell>
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
