import React from "react";

const KhoaHocChoXacThucNguoiDung = () => {
  return (
    <div>
      <h2 className="font-semibold text-red-500 text-xl">
        Khoá học chờ xác thực
      </h2>
      <div class="container p-2 mx-auto sm:p-4 text-gray-800">
        <div class="overflow-x-auto">
          <table class="w-full p-6 text-xs text-left whitespace-nowrap">
            <thead>
              <tr class="bg-gray-300">
                <th class="p-3">STT</th>
                <th class="p-3">Tên khoá học</th>
                <th class="p-3">Chờ Xác nhận</th>
              </tr>
            </thead>
            <tbody class="border-b bg-gray-50 border-gray-300"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default KhoaHocChoXacThucNguoiDung;
