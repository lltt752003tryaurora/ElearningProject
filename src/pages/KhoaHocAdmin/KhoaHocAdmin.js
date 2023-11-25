import React, { useEffect } from "react";
import TableKhoaHoc from "../../Components/TableKhoaHoc/TableKhoaHoc";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachKhoaHocApi } from "../../redux/slice/quanLyKhoaHocSlice";
import Loading from "../../Components/Loading/Loading";

const KhoaHocAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachKhoaHocApi());
  }, []);
  const { isLoading } = useSelector((state) => state.loadingSlice);
  return (
    <>
      {isLoading ? <Loading /> : <></>}
      <div className="bg-white p-10 space-y-5">
        <h2 className="font-medium text-3xl text-red-500">Quản lý khoá học</h2>
        <TableKhoaHoc />
      </div>
    </>
  );
};

export default KhoaHocAdmin;
