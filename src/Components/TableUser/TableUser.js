import React, { useState } from "react";
import { Popconfirm, Space, Table, message, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./tableUser.css";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDungServ";
import { layDanhSachNguoiDungApi } from "../../redux/slice/quanLyNguoiDungSlice";
import { useNavigate } from "react-router-dom";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const TableUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const { danhSachNguoiDung } = useSelector(
    (state) => state.quanLyNguoiDungSlice
  );
  const [searchText, setSearchText] = useState("");

  const handleSearch = (selectedKeys, confirm) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <button
          type="button"
          onClick={() => handleSearch(selectedKeys, confirm)}
          style={{ marginRight: 8 }}
        >
          Search
        </button>
        <button type="button" onClick={() => handleReset(clearFilters)}>
          Reset
        </button>
      </div>
    ),
    filterIcon: (filtered) => (
      <i className={`fa-solid fa-search${filtered ? "-minus" : ""}`} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    render: (text) => <span>{text}</span>,
  });
  //   console.log(danhSachNguoiDung);
  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      sorter: (a, b) => {
        return a.index - b.index;
      },
      render: (text, record, index) => {
        return <span className="text-center">{index + 1}</span>;
      },
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      ...getColumnSearchProps("taiKhoan"),
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      ...getColumnSearchProps("hoTen"),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      filters: [
        { text: "GV", value: "GV" },
        { text: "HV", value: "HV" },
      ],
      onFilter: (value, record) => {
        return record.maLoaiNguoiDung === value;
      },
    },
    {
      title: "Hành dộng",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            onClick={() => {
              navigate(`/admin/ghi-danh-khoa-hoc/${record.taiKhoan}`);
            }}
            className="text-xl text-green-500"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
          <button
            onClick={() => {
              navigate(`/admin/chinh-sua-user/${record.taiKhoan}`);
            }}
            className="text-xl text-blue-500 "
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <Popconfirm
            title="Xoá Người dùng"
            description="Bạn có muốn xoá người dùng không?"
            // onCancel={cancel}
            okText="Có"
            cancelText="Không"
            okButtonProps={{
              className: "bg-red-500 hover:bg-red-600 duration:500",
            }}
            onConfirm={() => {
              quanLyNguoiDungServ
                .xoaNguoiDung(record.taiKhoan)
                .then((result) => {
                  console.log(result);
                  messageApi.success(result.data);
                  dispatch(layDanhSachNguoiDungApi());
                })
                .catch((error) => {
                  console.log(error);
                  messageApi.error(error.response.data);
                });
            }}
          >
            <button className="text-xl text-red-500">
              <i className="fa-regular fa-trash-can"></i>
            </button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const filteredData = danhSachNguoiDung.filter(
    (item) =>
      item.taiKhoan.toLowerCase().includes(searchText.toLowerCase()) ||
      item.hoTen.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <>
      {contextHolder}
      <Input.Search
        placeholder="Nhập tên người dùng hoặc tài khoản"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Table
        columns={columns}
        dataSource={filteredData}
        onChange={onChange}
        scroll={{ x: 1024 }}
      />
    </>
  );
};

export default TableUser;
