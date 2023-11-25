import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./paginationPage.css";
import { quanLyKhoaHocServ } from "../../services/quanLyKhoaHocServ";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setLoadingEnd,
  setLoadingStarted,
} from "../../redux/slice/loadingSlice";

const PaginationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    dispatch(setLoadingStarted());
    quanLyKhoaHocServ
      .layDanhSachKhoaHocPhanTrang(currentPage)
      .then((result) => {
        // console.log(result);
        const { items, totalPages } = result.data;
        setData(items);
        setTotalPages(totalPages);
        dispatch(setLoadingEnd());
      })
      .catch((error) => {
        console.log(error);
        dispatch(setLoadingEnd);
      });
  }, [currentPage]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  const handleRender = () => {
    return data?.map((item, index) => {
      // console.log(item);
      return (
        <div
          key={index}
          className="relative flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border w-full"
        >
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
            <img
              className="h-full w-full object-cover"
              src={item.hinhAnh}
              layout="fill"
              alt=""
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {item.tenKhoaHoc}
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              reiciendis ad velit amet commodi tenetur fugit autem voluptatibus
              natus deserunt?
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              onClick={() => {
                navigate(`/chi-tiet/${item.maKhoaHoc}`);
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
    <div>
      <div className="p-[50px] bg-slate-200">
        <h6 className="text-xl">
          <i className="fa fa-bookmark text-[#ed85ab] mr-1"></i>
          Danh sách khoá học
        </h6>
        <div className="container mx-auto ">
          <div className="grid grid-cols-3 mt-16 gap-12 pageResponsive">
            {handleRender()}
          </div>
          <ReactPaginate
            nextLabel="Sau >"
            pageRangeDisplayed={3}
            pageCount={totalPages}
            previousLabel="< Trước"
            pageClassName="page-item"
            pageLinkClassName="pageLinkPages"
            previousClassName="page-item"
            previousLinkClassName="pageLinkPages"
            nextClassName="page-item"
            nextLinkClassName="pageLinkPages"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="pageLinkPages"
            containerClassName="paginationPages"
            activeClassName="active"
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PaginationPage;
