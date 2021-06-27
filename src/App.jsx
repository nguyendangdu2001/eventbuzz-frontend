import "react-toastify/dist/ReactToastify.css";
import Footer from "@components/Footer";
import Header from "@components/Header";

import { ScrollToTop } from "@components/ScrollToTop";
import GetRoutes from "./config/Route/GetRoutes";
import { LazyMotion } from "framer-motion";
import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

const loadFeatures = () =>
  import("./config/framer-motion").then((res) => res.default);
function App() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-[#121212] transition-colors flex flex-col min-h-screen">
        <LazyMotion features={loadFeatures} strict>
          <div style={{ position: "absolute" }} id="back-to-top-anchor" />
          <Header />
          <ToastContainer />
          <GetRoutes />
          <Footer />
          <ScrollToTop />
          {/* <ReactQueryDevtools initialIsOpen /> */}
        </LazyMotion>
      </div>
    </div>
  );
}

export default App;
