import React, { useEffect, useState } from "react";
import "./timKiemKhoaHoc.css";
import { useNavigate, useParams } from "react-router-dom";
import { quanLyKhoaHocServ } from "../../services/quanLyKhoaHocServ";
import { useDispatch } from "react-redux";
import {
  setLoadingEnd,
  setLoadingStarted,
} from "../../redux/slice/loadingSlice";

const TimKiemKhoaHoc = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {
    dispatch(setLoadingStarted());
    quanLyKhoaHocServ
      .layKhoaHocTheoMaDanhMuc(params.id)
      .then((result) => {
        console.log(result);
        setData(result.data);
        dispatch(setLoadingEnd());
      })
      .catch((error) => {
        console.log(error);
        dispatch(setLoadingEnd());
      });
  }, [params.id]);
  const renderData = () => {
    return data.splice(0, 3)?.map((item, index) => {
      // console.log(item);
      return (
        <>
          <div
            className="grid grid-cols-12 gap-3 bg-gray-100 timKiemResponsive"
            key={index}
          >
            <img
              src={item.hinhAnh}
              alt={item.hinhAnh}
              className="object-cover col-span-4 h-full w-full"
            />
            <div className="col-span-8 p-5 ">
              <h3 className="my-1 font-bold">{item.tenKhoaHoc}</h3>
              <p className="mb-1 text-gray-400">
                ES6 là một chuẩn Javascript mới được đưa ra vào năm 2015 với
                nhiều quy tắc và cách sử dụng khác nhau...
              </p>
              <div className="mb-1 space-x-2">
                <span>
                  <i className="fa-regular fa-clock text-[#f5c002] mr-2"></i>8
                  giờ
                </span>
                <span>
                  <i className="fa-regular fa-calendar text-[#f06f68] mr-2"></i>
                  23 giờ
                </span>
                <span>
                  <i className="fas fa-signal text-[#65c9ff] mr-2"></i>
                  All level
                </span>
              </div>
              <div className="text-yellow-500 my-2">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="w-10 h-10 rounded-[50%] object-cover"
                  src="https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg"
                  alt="https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg"
                />
                <span>Nguyễn Nam</span>
              </div>
              <div className="text-right mb-4">
                <button
                  onClick={() => {
                    navigate(`/chi-tiet/${item.maKhoaHoc}`);
                  }}
                  className="btnKhoaHoc"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        </>
      );
    });
  };
  return (
    <>
      <div>
        <div className="p-[50px] uppercase bg-[#ffd60a] text-white">
          <h3 className="font-bold text-2xl">Tìm Kiếm</h3>
          <p className="text-[13px]">kết quả tìm kiếm khoá học !!!</p>
        </div>
        <div className="searchPage">
          <div className="grid grid-cols-12 searchPageResponsive">
            <div className="col-span-2">
              <div className="">
                <h6 className="font-bold">
                  <i className="fas fa-book-open text-yellow-500 mr-3"></i>Lọc
                </h6>
                <div className="filterContainer">
                  <div className="filterItem">
                    <h6>Khóa học</h6>
                    <ul>
                      <li>
                        <label className="boxSearch">
                          Tất cả
                          <input type="checkbox" />
                          <span className="checkMark">
                            <i className="fas fa-check"></i>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="boxSearch">
                          Front End
                          <input type="checkbox" />
                          <span className="checkMark">
                            <i className="fas fa-check"></i>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="boxSearch">
                          Back End
                          <input type="checkbox" />
                          <span className="checkMark">
                            <i className="fas fa-check"></i>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="boxSearch">
                          HTML / CSS
                          <input type="checkbox" />
                          <span className="checkMark">
                            <i className="fas fa-check"></i>
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="filterItem">
                    <h6>Cấp độ</h6>
                    <ul>
                      <li>
                        <label className="boxSearch">
                          Tất cả
                          <input type="checkbox" />
                          <span className="checkMark">
                            <i className="fas fa-check"></i>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="boxSearch">
                          Mới bắt đầu
                          <input type="checkbox" />
                          <span className="checkMark">
                            <i className="fas fa-check"></i>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="boxSearch">
                          Trung cấp
                          <input type="checkbox" />
                          <span className="checkMark">
                            <i className="fas fa-check"></i>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="boxSearch">
                          Cao cấp
                          <input type="checkbox" />
                          <span className="checkMark">
                            <i className="fas fa-check"></i>
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="filterItem">
                    <h6>Đánh giá</h6>
                    <ul>
                      <li>
                        <label className="boxSearch">
                          <i className="fas fa-star"></i>

                          <input type="checkbox" />
                          <span className="checkMark">
                            <i className="fas fa-check"></i>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="boxSearch">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <input type="checkbox" />
                          <span className="checkMark">
                            <i className="fas fa-check"></i>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="boxSearch">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <input type="checkbox" />
                          <span className="checkMark">
                            <i className="fas fa-check"></i>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="boxSearch">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <input type="checkbox" />
                          <span className="checkMark">
                            <i className="fas fa-check"></i>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="boxSearch">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>

                          <input type="checkbox" />
                          <span className="checkMark">
                            <i className="fas fa-check"></i>
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-10 space-y-4">
              <p className="my-3 font-bold text-2xl">Hiển thị 3 kết quả</p>
              {renderData()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimKiemKhoaHoc;
