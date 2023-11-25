import React from "react";
import { Carousel } from "antd";
import { useSelector } from "react-redux";
import "./listKhoaHoc.scss";
import { useNavigate } from "react-router-dom";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-right"></i>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-left"></i>
    </div>
  );
}

const ListKhoaHoc = () => {
  const navigate = useNavigate();
  const { listKhoaHoc } = useSelector((state) => state.quanLyKhoaHocSlice);
  //   console.log(listKhoaHoc);

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-center font-bold text-3xl mb-10 text-orange-500">
        Danh sách khoá học
      </h2>
      <Carousel
        id="carouselSlice"
        slidesToShow={3}
        rows={2}
        dots="false"
        arrows={true}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
        ]}
      >
        {listKhoaHoc.slice(0, 40)?.map((item, index) => {
          // console.log(item);
          const { hinhAnh, biDanh, tenKhoaHoc, moTa, maKhoaHoc } = item;
          return (
            <div key={index} className="p-7 shadowCarousel">
              <div className=" p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <img
                  src={hinhAnh}
                  alt={biDanh}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl h-14 font-semibold">{tenKhoaHoc}</h2>
                  <p className="text-gray-600 h-10 line-clamp-3">{moTa}</p>
                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={() => {
                        navigate(`/chi-tiet/${maKhoaHoc}`);
                      }}
                      className="buttonKhoaHoc"
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ListKhoaHoc;
