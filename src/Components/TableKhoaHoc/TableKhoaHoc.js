import React, { useEffect, useState } from "react";
import { Popconfirm, Space, Table, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { quanLyKhoaHocServ } from "../../services/quanLyKhoaHocServ";
import { layDanhSachKhoaHocApi } from "../../redux/slice/quanLyKhoaHocSlice";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const TableKhoaHoc = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachKhoaHocApi());
  }, []);
  const { listKhoaHoc } = useSelector((state) => state.quanLyKhoaHocSlice);
  // console.log(listKhoaHoc);
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
      title: "Mã khoá học",
      dataIndex: "maKhoaHoc",
    },
    {
      title: "Tên khoá học",
      dataIndex: "tenKhoaHoc",
      ...getColumnSearchProps("tenKhoaHoc"),
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, record, index) => {
        return (
          <img
            className="w-20 h-20"
            src={record.hinhAnh}
            alt={record.hinhAnh}
          />
        );
      },
    },
    {
      title: "Lượt xem",
      dataIndex: "luotXem",
    },
    {
      title: "Người tạo",
      dataIndex: "nguoiTao",
      render: (text, record, index) => {
        return <span>{record.nguoiTao.hoTen}</span>;
      },
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            onClick={() => {
              navigate(`/admin/ghi-danh-khoa-hoc-theo-ten/${record.maKhoaHoc}`);
            }}
            className="text-xl text-green-500"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
          <button
            onClick={() => {
              navigate(`/admin/chinh-sua-khoa-hoc/${record.maKhoaHoc}`);
            }}
            className="text-xl text-blue-500 "
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <Popconfirm
            title="Xoá khoá hoc"
            description="Bạn có muốn xoá khoá học không?"
            // onCancel={cancel}
            okText="Có"
            cancelText="Không"
            okButtonProps={{
              className: "bg-red-500 hover:bg-red-600 duration:500",
            }}
            onConfirm={() => {
              quanLyKhoaHocServ
                .xoaKhoaHoc(record.maKhoaHoc)
                .then((result) => {
                  //   console.log(result);
                  messageApi.success(result.data);
                  dispatch(layDanhSachKhoaHocApi());
                })
                .catch((error) => {
                  //   console.log(error.response.data);
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
  const filteredData = listKhoaHoc.filter((item) =>
    item.tenKhoaHoc.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <>
      {contextHolder}
      <Input
        placeholder="Nhập vào khoá học cần tìm"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: 16 }}
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

export default TableKhoaHoc;
