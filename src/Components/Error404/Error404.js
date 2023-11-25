import React from "react";
import "./error404.css";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <section className="page_404">
      <div className="page404_container">
        <div className="content404">
          <h1 className="text404">404</h1>
        </div>
        <div className="content_box_404">
          <h3>Có gì đó sai ở đây</h3>
          <button
            onClick={() => {
              navigate("/");
            }}
            className="btnBack"
          >
            Quay về trang chủ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Error404;
