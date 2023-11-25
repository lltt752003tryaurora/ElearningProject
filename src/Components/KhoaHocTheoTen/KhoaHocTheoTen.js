import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  setLoadingEnd,
  setLoadingStarted,
} from "../../redux/slice/loadingSlice";
import { quanLyKhoaHocServ } from "../../services/quanLyKhoaHocServ";
import "./khoaHocTheoTen.css";

const KhoaHocTheoTen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tenKhoaHoc, setTenKhoaHoc] = useState([]);
  const params = useParams();
  // console.log(params);
  useEffect(() => {
    dispatch(setLoadingStarted());
    quanLyKhoaHocServ
      .layKhoaHocTheoMaDanhMuc(params.id)
      .then((result) => {
        // console.log(result.data);
        setTenKhoaHoc(result.data);
        dispatch(setLoadingEnd());
      })
      .catch((error) => {
        console.log(error);
        dispatch(setLoadingEnd());
      });
  }, [params.id]);

  //todo : lấy ra tên danh mục khoá học
  const tenDanhMucKhoaHoc = tenKhoaHoc
    .splice(0, 1)
    ?.map((item) => item.danhMucKhoaHoc.tenDanhMucKhoaHoc);

  const renderKhoaHoc = () => {
    return tenKhoaHoc?.map((item, index) => {
      // console.log(item);
      const { hinhAnh, tenKhoaHoc, maKhoaHoc } = item;
      return (
        <div
          key={index}
          className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border w-full"
        >
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
            <img
              className="h-full w-full"
              src={hinhAnh}
              layout="fill"
              alt={hinhAnh}
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {tenKhoaHoc}
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              onClick={() => {
                navigate(`/chi-tiet/${maKhoaHoc}`);
              }}
              className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="bg-[#edfbfa]">
      <div className="bg-[#c8a5ff] p-[50px] text-white">
        <h3 className="font-bold text-3xl">KHOÁ HỌC THEO DANH MỤC</h3>
        <p className="text-xs mt-2">HÃY CHỌN KHOÁ HỌC MONG MUÔN !!!</p>
      </div>
      <div className="container mx-auto p-12">
        <div className="topKH">
          <div className="btnTenMaKH">
            <i className="fas fa-desktop text-yellow-500"></i>
            <span className="ml-2">{tenDanhMucKhoaHoc}</span>
          </div>
        </div>
        <div className="bottomKH grid grid-cols-3 mt-16 gap-12 ">
          {renderKhoaHoc()}
        </div>
      </div>
    </div>
  );
};

export default KhoaHocTheoTen;
