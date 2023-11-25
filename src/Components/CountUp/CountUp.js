import React, { useRef } from "react";
import "./countUp.scss";
import { useCountUp } from "react-countup";

const CountUp = () => {
  useCountUp({
    ref: "counter",
    end: "1246",
    duration: "10",
    enableScrollSpy: "true",
  });
  useCountUp({
    ref: "counter1",
    end: "19",
    duration: "10",
    enableScrollSpy: "true",
  });
  useCountUp({
    ref: "counter2",
    end: "685",
    duration: "10",
    enableScrollSpy: "true",
  });
  useCountUp({
    ref: "counter3",
    end: "788",
    duration: "10",
    enableScrollSpy: "true",
  });

  return (
    // <span id="counter" />

    <div className="middle">
      <div className="counting-sec">
        <div className="inner-width">
          <div className="col">
            <div className="flex flex-col justify-center items-center">
              <div>
                <img
                  className="w-20 h-20"
                  src="https://demo2.cybersoft.edu.vn/static/media/003-students.e1a7c67b.png"
                  alt="https://demo2.cybersoft.edu.vn/static/media/003-students.e1a7c67b.png"
                />
              </div>
              <div id="counter" className="num">
                1246
              </div>
              <p className="font-bold text-[#252525]">Học viên</p>
            </div>
          </div>
          <div className="col">
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-20 h-20"
                src="https://demo2.cybersoft.edu.vn/static/media/001-timetable.0e009173.png"
                alt="https://demo2.cybersoft.edu.vn/static/media/001-timetable.0e009173.png"
              />
            </div>
            <div id="counter1" className="num">
              19
            </div>
            <p className="font-bold text-[#252525]">Khoá học</p>
          </div>
          <div className="col">
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-20 h-20"
                src="https://demo2.cybersoft.edu.vn/static/media/002-hourglass.548810be.png"
                alt="https://demo2.cybersoft.edu.vn/static/media/002-hourglass.548810be.png"
              />
            </div>
            <div id="counter2" className="num">
              685
            </div>
            <p className="font-bold text-[#252525]">Giờ học</p>
          </div>
          <div className="col">
            <div className="flex flex-col justify-center items-center">
              <img
                className="w-20 h-20"
                src="https://demo2.cybersoft.edu.vn/static/media/004-teacher.5bbd6eec.png"
                alt="https://demo2.cybersoft.edu.vn/static/media/004-teacher.5bbd6eec.png"
              />
            </div>
            <div id="counter3" className="num">
              788
            </div>
            <p className="font-bold text-[#252525]">Giảng viên</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountUp;
