import React from "react";
import "./thongTin.css";

const ThongTin = () => {
  return (
    <>
      <div className="thongTin ">
        <div className="top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 absolute uppercase text-center container mx-auto">
          <p className="font-medium text-xl text-[#6ab5f8]">
            V learning học là vui
          </p>
          <h6 className="text-[40px] font-semibold text-[#F6B935]">
            cùng nhau khám phá những điều mới mẻ
          </h6>
          <p className="text-lg text-white font-semibold">
            học đi đôi với hành
          </p>
        </div>
      </div>
      <div className="p-[50px]">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 thongTinResponsive">
            <div>
              <h6 className="uppercase text-xl font-semibold text-[#6ab5f8]">
                V learning ?
              </h6>
              <h5 className="text-[40px] py-[10px] text-[#012025] font-semibold textReponsive">
                Nơi hội tụ kiến thức
              </h5>
              <p className="textP">
                Đây là nền tảng giảng dạy và học tập trực tuyến được xây dựng để
                hỗ trợ phát triển giáo dục trong thời đại công nghiệp 4.0, được
                xây dựng dựa trên cơ sở quan sát toàn bộ các nhu cầu cần thiết
                của một lớp học offline. Từ đó đáp ứng và đảm bảo cung cấp các
                công cụ toàn diện, dễ sử dụng cho giáo viên và học sinh, giúp
                tạo nên một lớp học trực tuyến thú vị và hấp dẫn.
              </p>
            </div>
            <div className="bgAboutGreen">
              <img
                className="w-full h-[382px] object-contain rounded-[30%]"
                src="https://demo2.cybersoft.edu.vn/static/media/hero-flex.553afb64.png"
                alt="https://demo2.cybersoft.edu.vn/static/media/hero-flex.553afb64.png"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 thongTinResponsive reverseThongTin">
            <div className="bgAboutBlue">
              <img
                className="w-full h-[382px] object-contain rounded-[30%]"
                src="https://demo2.cybersoft.edu.vn/static/media/education-hero.62147e5c.png"
                alt="https://demo2.cybersoft.edu.vn/static/media/education-hero.62147e5c.png"
              />
            </div>
            <div>
              <h6 className="uppercase text-xl font-semibold text-[#6ab5f8]">
                CHƯƠNG TRÌNH HỌC V LEARNING
              </h6>
              <h5 className="text-[40px] py-[10px] text-[#012025] font-semibold textReponsive">
                Hệ thống học hàng đầu
              </h5>
              <p className="textP">
                Giảng viên đều là các chuyên viên thiết kế đồ họa và giảng viên
                của các trường đại học danh tiếng trong thành phố: Đại học CNTT,
                KHTN, Bách Khoa,…Trang thiết bị phục vụ học tập đầy đủ, phòng
                học máy lạnh, màn hình LCD, máy cấu hình mạnh, mỗi học viên thực
                hành trên một máy riêng.100% các buổi học đều là thực hành trên
                máy tính. Đào tạo với tiêu chí: “học để làm được việc”, mang lại
                cho học viên những kiến thức hữu ích nhất, sát với thực tế nhất.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 thongTinResponsive">
            <div>
              <h6 className="uppercase text-xl font-semibold text-[#6ab5f8]">
                TẦM NHÌN V LEARNING
              </h6>
              <h5 className="text-[40px] py-[10px] text-[#012025] font-semibold textReponsive">
                Đào tạo lập trình chuyên sâu
              </h5>
              <p className="textP">
                Trở thành hệ thống đào tạo lập trình chuyên sâu theo nghề hàng
                đầu khu vực, cung cấp nhân lực có tay nghề cao, chuyên môn sâu
                cho sự phát triển công nghiệp phần mềm trong thời đại công nghệ
                số hiện nay, góp phần giúp sự phát triển của xã hội, đưa Việt
                Nam thành cường quốc về phát triển phần mềm.giúp người học phát
                triển cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt
                đời, sẵn sàng đáp ứng mọi nhu cầu của doanh nghiệp.
              </p>
            </div>
            <div className="bgAboutGreen">
              <img
                className="w-full h-[382px] object-contain rounded-[30%]"
                src="https://demo2.cybersoft.edu.vn/static/media/olstudy.96378086.png"
                alt="https://demo2.cybersoft.edu.vn/static/media/olstudy.96378086.png"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 thongTinResponsive reverseThongTin">
            <div className="bgAboutBlue">
              <img
                className="w-full h-[382px] object-contain rounded-[30%]"
                src="https://demo2.cybersoft.edu.vn/static/media/students.fc2d9ab7.png"
                alt="https://demo2.cybersoft.edu.vn/static/media/students.fc2d9ab7.png"
              />
            </div>
            <div>
              <h6 className="uppercase text-xl font-semibold text-[#6ab5f8]">
                SỨ MỆNH V LEARNING
              </h6>
              <h5 className="text-[40px] py-[10px] text-[#012025] font-semibold textReponsive">
                Phương pháp đào tạo hiện đại
              </h5>
              <p className="textP">
                Sử dụng các phương pháp đào tạo tiên tiến và hiện đại trên nền
                tảng công nghệ giáo dục, kết hợp phương pháp truyền thống,
                phương pháp trực tuyến, lớp học đảo ngược và học tập dựa trên dự
                án thực tế, phối hợp giữa đội ngũ training nhiều kinh nghiệm và
                yêu cầu từ các công ty, doanh nghiệp. Qua đó, V learning giúp
                người học phát triển cả tư duy, phân tích, chuyên sâu nghề
                nghiệp, học tập suốt đời, sẵn sàng đáp ứng mọi nhu cầu của doanh
                nghiệp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThongTin;
