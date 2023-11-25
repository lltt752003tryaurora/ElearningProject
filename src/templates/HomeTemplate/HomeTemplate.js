import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Loading from "../../Components/Loading/Loading";

const HomeTemplate = () => {
  const { isLoading } = useSelector((state) => state.loadingSlice);
  return (
    <>
      {isLoading ? <Loading /> : <></>}
      <div>
        {/* header */}
        <Header />
        <Outlet />
        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default HomeTemplate;
