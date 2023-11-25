import React, { useEffect, useState } from "react";
import { Dropdown } from "antd";
import { quanLyKhoaHocServ } from "../../services/quanLyKhoaHocServ";
import { Link, useNavigate } from "react-router-dom";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { setDataUser } from "../../redux/slice/quanLyNguoiDungSlice";

const Header = () => {
  const [timKiem, setTimKiem] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.quanLyNguoiDungSlice);
  // console.log(user);
  useEffect(() => {
    const userLocal = JSON.parse(localStorage.getItem("user"));
    if (userLocal) {
      dispatch(setDataUser(userLocal));
    }
  }, []);
  const [danhMucKhoaHoc, setDanhMucKhoaHoc] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  //todo : lấy danh mục các khoá học
  useEffect(() => {
    quanLyKhoaHocServ
      .layDanhMucKhoaHoc()
      .then((result) => {
        // console.log(result);
        setDanhMucKhoaHoc(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //todo : mở khoá toggle hamberger
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //todo : hàm lấy ra các tên danh mục khoá học
  const items = danhMucKhoaHoc?.map((item, index) => {
    // console.log(item);
    return {
      key: index,
      label: (
        <Link to={`/danh-muc-khoa-hoc/${item.maDanhMuc}`}>
          <p className="font-medium hover:text-orange-500 duration-500">
            {item.tenDanhMuc}
          </p>
        </Link>
      ),
    };
  });

  //todo : lấy ra mã danh mục
  const keywords = danhMucKhoaHoc?.map((item) => item.maDanhMuc);
  // console.log(keywords);
  //todo : sử lý chức năng search
  const handleSearch = () => {
    const formatSearch = timKiem.trim();
    // console.log(formatSearch);
    if (keywords.some((keyword) => formatSearch.includes(keyword))) {
      navigate(`/tim-kiem-khoa-hoc/${formatSearch}`);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(setDataUser(null));
  };
  //todo : xử lý đăng nhập
  const handleBtnLogin = () => {
    if (user) {
      // console.log(user.maLoaiNguoiDung);
      return (
        <div className="flex items-center relative">
          {user.maLoaiNguoiDung === "GV" ? (
            <span>
              <Link to={"/admin"}>
                <i className="fas fa-cog text-[#f6ba35] text-xl mr-2"></i>
              </Link>
            </span>
          ) : (
            <></>
          )}
          <Link
            to={"/thong-tin-ca-nhan"}
            className="text-white flex items-center infoHeader"
          >
            <img
              className="w-[50px] h-[50px] rounded-[50%] object-cover z-10"
              src="https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600"
              alt="https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600"
            />
            <span
              className="absolute logout"
              onClick={() => {
                handleLogout();
              }}
            >
              <Link to={"/"}>
                <i className="fas fa-power-off text-[#f6ba35] text-xl"></i>
              </Link>
            </span>
          </Link>
        </div>
      );
    } else {
      return (
        <Link
          to={"/dang-nhap"}
          className="hidden px-6 py-2 font-semibold rounded lg:block bg-[#B86BF8] text-gray-50 hover:bg-[#B87BF9] duration-500"
        >
          Đăng nhập
        </Link>
      );
    }
  };
  const setHeaderFixed = () => {
    const headerFixed = document.querySelector(".header");
    if (headerFixed) {
      if (window.scrollY >= 200) {
        headerFixed.classList.add("headerFixed");
      } else {
        headerFixed.classList.remove("headerFixed");
      }
    } else {
      return null;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", setHeaderFixed);
    return () => {
      window.addEventListener("scroll", setHeaderFixed);
    };
  }, []);
  return (
    <header className="p-4 bg-[#6BB5F8] text-neutral-800 dark:text-neutral-200 z-[999] header">
      <div className="container flex justify-between h-16 mx-auto gap-2">
        <ul
          className={`items-stretch space-x-1 lg:flex font-medium gap-2 ${
            isOpen ? "mobile-menu" : "hidden"
          } `}
          id="mobile-menu"
        >
          <li className="flex">
            <Dropdown menu={{ items }}>
              <a
                onClick={(e) => e.preventDefault()}
                className="flex items-center -mb-1 border-b-2 border-transparent cursor-pointer"
              >
                <i className="fa-solid fa-bars"></i>
                <span className="ml-1">DANH MỤC</span>
              </a>
            </Dropdown>
          </li>
          <li className="flex">
            <Link
              to={"/khoa-hoc"}
              rel="noopener noreferrer"
              className="flex items-center -mb-1 border-b-2 border-transparent"
            >
              KHOÁ HỌC
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to={"/blog"}
              className="flex items-center  -mb-1 border-b-2 border-transparent"
            >
              BLOGS
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to={"/su-kien"}
              className="flex items-center -mb-1 border-b-2 border-transparent"
            >
              SỰ KIỆN
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to={"/thong-tin"}
              className="flex items-center -mb-1 border-b-2 border-transparent"
            >
              THÔNG TIN
            </Link>
          </li>
        </ul>
        <Link
          rel="noopener noreferrer"
          to={"/"}
          aria-label="Back to homepage"
          className="flex items-center"
        >
          <img
            src="https://cybersoft.edu.vn/wp-content/uploads/2022/10/cyberlogo-white.png"
            alt="https://cybersoft.edu.vn/wp-content/uploads/2022/10/cyberlogo-white.png"
            width={250}
            className="imgHeader"
          />
        </Link>
        <div className="flex items-center md:space-x-4 headerInput">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                onClick={() => {
                  handleSearch();
                }}
                type="submit"
                title="Search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z" />
                </svg>
              </button>
            </span>
            <input
              onKeyDown={handleKeyDown}
              value={timKiem}
              onChange={(event) => {
                setTimKiem(event.target.value);
              }}
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50"
            />
          </div>
          {handleBtnLogin()}
        </div>
        <button
          onClick={toggleMenu}
          title="Open menu"
          type="button"
          className="p-4 xl:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
