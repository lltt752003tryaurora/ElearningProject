import React, { useEffect } from "react";
import "./chiTietKhoaHoc.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import {
  dangKyKhoaHocApi,
  layDanhSachKhoaHocApi,
  layThongTinKhoaHocApi,
} from "../../redux/slice/quanLyKhoaHocSlice";
import { Rate } from "antd";
import {
  setLoadingEnd,
  setLoadingStarted,
} from "../../redux/slice/loadingSlice";

const ChiTietKhoaHoc = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { user } = useSelector((state) => state.quanLyNguoiDungSlice);
  const navigate = useNavigate();
  const { detailKhoaHoc, listKhoaHoc } = useSelector(
    (state) => state.quanLyKhoaHocSlice
  );
  // console.log(detailKhoaHoc);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoadingStarted());
      try {
        await dispatch(layThongTinKhoaHocApi(params.id));
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setLoadingEnd());
      }
    };
    fetchData();
  }, [params.id]);
  useEffect(() => {
    dispatch(layDanhSachKhoaHocApi());
  }, []);

  class ThongTinDatKhoaHoc {
    maKhoaHoc = "";
    taiKhoan = "";
  }
  return (
    <>
      {contextHolder}
      <div className="backGroundDetail shine">
        <img
          className="bgDetail"
          src="https://img.freepik.com/premium-vector/elearning-vector-background-design-elearning-text-with-key-board-phone-headphones-technology_572293-2228.jpg?w=2000"
          alt=""
        />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4 responsiveChiTiet">
          <div className="detailLeft col-span-7">
            <h1 className="pt-2 font-bold text-2xl uppercase">
              {detailKhoaHoc.tenKhoaHoc}
            </h1>
            <div className="giangVienLeft grid grid-cols-3 my-3 items-center">
              <div className="flex items-center gap-2 responsiveGiangVienLeft">
                <img
                  style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                  src="https://picsum.photos/300/300"
                  alt="123"
                />
                <div>
                  <p className="text-gray-400">Giảng viên</p>
                  <p className="font-bold">Robert Ngô Ngọc</p>
                </div>
              </div>
              <div className="flex items-center gap-2 responsiveGiangVienLeft">
                <i className="fa-solid fa-graduation-cap text-3xl text-blue-500"></i>
                <div>
                  <p className="text-gray-400">Lĩnh vực</p>
                  <p className="font-bold">Lập trình Backend</p>
                </div>
              </div>
              <div className="responsiveGiangVienLeft">
                <Rate allowHalf defaultValue={2.5} />{" "}
                <span className="font-bold ml-2">3.5</span>
                <p className="ml-[76px] text-gray-400">100 đánh giá</p>
              </div>
            </div>
            <p className="text-gray-400 italic">
              React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử
              dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện
              đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu, từ
              cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản cốt
              lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các khái
              niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví dụ và
              bản trình diễn, bài tập và bài tập cũng như vô số kiến ​​thức quan
              trọng bị hầu hết các nguồn khác bỏ qua - sau cùng, có một lý do
              tại sao khóa học này lại rất lớn! Và trong trường hợp bạn thậm chí
              không biết tại sao bạn lại muốn học React và bạn chỉ ở đây vì một
              số quảng cáo hoặc "thuật toán" - đừng lo lắng: ReactJS là một công
              nghệ quan trọng với tư cách là một nhà phát triển web và trong
              khóa học này, tôi sẽ cũng giải thích TẠI SAO điều đó lại quan
              trọng!
            </p>
            <hr className="my-2" />
            <div className="seHoc">
              <h3 className="font-bold text-xl">Những gì bạn sẽ học :</h3>
              <div className="">
                <ul className="grid grid-cols-2 gap-2">
                  <li>
                    <i className="fa-solid fa-check text-orange-500 ml-2"></i>
                    <span className="pl-1">
                      Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện
                      với người dùng và phản ứng nhanh
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-orange-500 ml-2"></i>
                    <span className="pl-1">
                      Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp
                      Javascript NPM, Webpack, Babel và ES6 / ES2015
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-orange-500"></i>
                    <span className="pl-1">
                      Đăng ký công việc được trả lương cao hoặc làm freelancer
                      trong một trong những lĩnh vực được yêu cầu nhiều nhất mà
                      bạn có thể tìm thấy trong web dev ngay bây giờ
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-orange-500"></i>
                    <span className="pl-1">
                      Nhận ra sức mạnh của việc xây dựng các thành phần có thể
                      kết hợp
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-orange-500"></i>
                    <span className="pl-1">
                      Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận
                      dụng sức mạnh của JavaScript một cách dễ dàng
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-orange-500"></i>
                    <span className="pl-1">
                      Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi
                      người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-orange-500"></i>
                    <span className="pl-1">
                      Tìm hiểu tất cả về React Hooks và React Components
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check text-orange-500"></i>
                    <span className="pl-1">
                      Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các
                      ứng dụng Redux
                    </span>
                  </li>
                </ul>
                <h3 className="font-bold text-xl py-2">Nội dung khoá học</h3>
              </div>
              <div className="flex items-center bg-slate-100 p-2">
                <h3 className="font-semibold">MỤC 1 : GIỚI THIỆU</h3>
                <button className="text-blue-500 font-bold bg-white border-solid border-2 border-blue-500 px-1 py-2 hover:bg-blue-500 hover:text-white duration-500 ml-2">
                  XEM TRƯỚC
                </button>
              </div>
              <h4 className="my-2 font-medium">Bài học</h4>
              <div className="flex justify-between items-center border py-3 px-1 border-b-0">
                <div>
                  <i className="fa-regular fa-circle-play text-blue-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    Các khái niệm về React Component
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex justify-between items-center border py-3 px-1 border-b-0">
                <div>
                  <i className="fa-regular fa-circle-play text-blue-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    Thiết lập môi trường cho Windows
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex justify-between items-center border py-3 px-1 border-b-0">
                <div>
                  <i className="fa-regular fa-circle-play text-blue-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    Tạo ứng dụng React - React-Scripts
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex justify-between items-center border py-3 px-1">
                <div>
                  <i className="fa-regular fa-circle-play text-blue-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    Ghi chú nhanh về dấu ngoặc kép cho string interpolation
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex items-center bg-slate-100 p-2">
                <h3 className="font-semibold">MỤC 2 : KIẾN THỨC CĂN BẢN</h3>
                <button className="text-blue-500 font-bold bg-white border-solid border-2 border-blue-500 px-1 py-2 hover:bg-blue-500 hover:text-white duration-500 ml-2">
                  XEM TRƯỚC
                </button>
              </div>
              <h4 className="my-2 font-medium">Bài học</h4>
              <div className="flex justify-between items-center border py-3 px-1 border-b-0">
                <div>
                  <i className="fa-regular fa-circle-play text-blue-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    Trang chủ và thành phần thư mục
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex justify-between items-center border py-3 px-1 border-b-0">
                <div>
                  <i className="fa-regular fa-circle-play text-blue-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    Hướng dẫn khóa học + Liên kết Github
                  </span>
                </div>
                <div>
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex justify-between items-center border py-3 px-1 border-b-0">
                <div>
                  <i className="fa-regular fa-circle-play text-blue-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    Trang chủ thương mại điện tử + thiết lập SASS
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex justify-between items-center border py-3 px-1 border-b-0">
                <div>
                  <i className="fa-regular fa-circle-play text-blue-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">Tệp CSS và SCSS</span>
                </div>
                <div>
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex justify-between items-center border py-3 px-1">
                <div>
                  <i className="fa-regular fa-circle-play text-blue-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    React 17: Cập nhật các gói + Phiên bản React mới nhất
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex items-center bg-slate-100 p-2">
                <h3 className="font-semibold">MỤC 3 : KIẾN THỨC CHUYÊN SÂU</h3>
                <button className="text-blue-500 font-bold bg-white border-solid border-2 border-blue-500 px-1 py-2 hover:bg-blue-500 hover:text-white duration-500 ml-2">
                  XEM TRƯỚC
                </button>
              </div>
              <h4 className="my-2 font-medium">Bài học</h4>
              <div className="flex justify-between items-center border py-3 px-1 border-b-0">
                <div>
                  <i className="fa-regular fa-circle-play text-blue-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    connect() and mapStateToProps
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex justify-between items-center border py-3 px-1 border-b-0">
                <div>
                  <i className="fa-regular fa-circle-play text-blue-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    Trạng thái thư mục vào Redux
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
              <div className="flex justify-between items-center border py-3 px-1 ">
                <div>
                  <i className="fa-regular fa-circle-play text-blue-500 text-[14px]"></i>
                  <span className="text-gray-500 ml-1">
                    Thành phần Tổng quan về Bộ sưu tập
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fa-regular fa-clock text-green-500 text-[14px]"></i>
                  <span className="ml-2 text-gray-500">14:35</span>
                </div>
              </div>
            </div>
          </div>
          <div className="detailRight col-span-5 pt-5">
            <div className="card shadowBorder">
              <div
                className="p-5 h-1/2 w-full"
                style={{
                  backgroundImage: `url('${detailKhoaHoc.hinhAnh}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="text-right mr-5 text-2xl my-2">
                <i className="fa-solid fa-bolt text-yellow-500"></i>
                <span className="font-semibold ml-2">
                  500.000<sup>đ</sup>
                </span>
              </div>
              <div className="text-center my-2 px-5">
                <button
                  onClick={() => {
                    let thongTinDatKhoaHoc = new ThongTinDatKhoaHoc();
                    thongTinDatKhoaHoc.maKhoaHoc = params.id;
                    thongTinDatKhoaHoc.taiKhoan = user.taiKhoan;
                    dispatch(dangKyKhoaHocApi(thongTinDatKhoaHoc));
                    messageApi.success("Đăng ký khoá học thành công");
                  }}
                  className="border-blue-500 font-bold border py-2 w-full text-white bg-blue-500 hover:bg-blue-600 duration-500"
                >
                  ĐĂNG KÝ
                </button>
                <div className="flex justify-between items-center my-3">
                  <p className="text-gray-500">
                    Ghi danh : <span className="text-black ">10 học viên</span>
                  </p>
                  <i className="fa-solid fa-user-graduate text-yellow-500 text-[20px]"></i>
                </div>
                <hr />
                <div className="flex justify-between items-center my-3">
                  <p className="text-gray-500">
                    Thời gian : <span className="text-black ">18 giờ</span>
                  </p>
                  <i className="fa-regular fa-clock text-yellow-500 text-[20px]"></i>
                </div>
                <hr />
                <div className="flex justify-between items-center my-3">
                  <p className="text-gray-500">
                    Bài học : <span className="text-black ">10</span>
                  </p>
                  <i className="fa-solid fa-book text-yellow-500 text-[20px]"></i>
                </div>
                <hr />
                <div className="flex justify-between items-center my-3">
                  <p className="text-gray-500">
                    Video : <span className="text-black ">14</span>
                  </p>
                  <i className="fa-solid fa-photo-film text-yellow-500 text-[20px]"></i>
                </div>
                <hr />
                <div className="flex justify-between items-center my-3">
                  <p className="text-gray-500">
                    Trình độ :
                    <span className="text-black ">Người mới bắt đầu</span>
                  </p>
                  <i class="fa-solid fa-database text-yellow-500 text-[20px]"></i>
                </div>
                <hr />
                <div className="my-3">
                  <input
                    type="text"
                    id="nhapMa"
                    className="w-full py-2 pl-[14px] focus:outline-none"
                    placeholder="Nhập mã"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-6">
          <h3 className="font-bold mb-12 text-xl text-center">
            Khoá học tham khảo
          </h3>
          <div className="cardDetails  flex gap-4">
            {listKhoaHoc.slice(0, 4)?.map((item, index) => {
              // console.log(item);
              return (
                <>
                  <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border responsiveCard">
                    <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                      <img
                        className="h-full w-full object-cover"
                        src={item.hinhAnh}
                        alt={item.tenKhoaHoc}
                        layout="fill"
                      />
                    </div>
                    <div className="p-6">
                      <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {item.tenKhoaHoc}
                      </h5>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eligendi impedit quibusdam odio, obcaecati rerum minima
                        ipsam, dicta unde maiores tenetur quo porro et, totam
                        quae ad beatae voluptate ullam voluptates.
                      </p>
                    </div>
                    <div className="p-6 pt-0">
                      <button
                        onClick={() => {
                          navigate(`/chi-tiet/${item.maKhoaHoc}`);
                        }}
                        className="text-white font-bold border-blue-500 border w-full rounded py-2 bg-blue-500 hover:bg-blue-600  duration-500"
                      >
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChiTietKhoaHoc;
