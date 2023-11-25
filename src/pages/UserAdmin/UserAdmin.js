import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Components/Loading/Loading";
import TableUser from "../../Components/TableUser/TableUser";
import { layDanhSachNguoiDungApi } from "../../redux/slice/quanLyNguoiDungSlice";

const UserAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachNguoiDungApi());
  }, []);
  const { isLoading } = useSelector((state) => state.loadingSlice);
  return (
    <>
      {isLoading ? <Loading /> : <></>}
      <div className="bg-white p-10 space-y-5">
        <h2 className="font-medium text-3xl text-red-500">
          Quản lý người dùng
        </h2>
        <TableUser />
      </div>
    </>
  );
};

export default UserAdmin;
