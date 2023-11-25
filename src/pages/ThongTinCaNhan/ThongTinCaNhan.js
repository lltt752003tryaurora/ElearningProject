import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { quayLaiTab } from "../../redux/slice/tabAntdSlice";
import { Tabs } from "antd";
import TaiKhoan from "./TaiKhoan/TaiKhoan";
import KhoaHoc from "./KhoaHoc/KhoaHoc";

const ThongTinCaNhan = () => {
  const { tabActive } = useSelector((state) => state.tabAntdSlice);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="p-[50px] uppercase bg-[#ffd60a] text-white">
        <h3 className="font-medium text-2xl">thông tin cá nhân</h3>
        <p className="text-[13px]">Thông tin học viên</p>
      </div>
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-12 thongTinResponsive">
          <div className="col-span-3 flex flex-col items-center p-5">
            <img
              className="w-[150px] h-[150px] rounded-[50%] object-cover"
              src="https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600"
              alt="https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600"
            />
            <h6 className="mb-[10px] font-semibold">Robert Nguyễn</h6>
            <p className="mb-[10px] infoText">Lập trình viên Front-end</p>
            <button className="p-[10px] rounded-[20px] text-white bg-[#6ab5f9] border-none">
              Hồ sơ cá nhân
            </button>
          </div>
          <div className="col-span-9 px-5">
            <Tabs
              defaultActiveKey={tabActive}
              activeKey={tabActive}
              tabPosition={"top"}
              onChange={(key) => {
                dispatch(quayLaiTab(key));
              }}
              items={[
                {
                  label: (
                    <h3 className="text-sm md:text-lg">Thông Tin Tài Khoản</h3>
                  ),
                  key: "1",
                  children: <TaiKhoan />,
                },
                {
                  label: <h3 className="text-sm md:text-lg">Khoá học</h3>,
                  key: "2",
                  children: <KhoaHoc />,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThongTinCaNhan;
