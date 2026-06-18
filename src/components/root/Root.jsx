import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Outlet } from "react-router";
import Sidebar from "../sidebar/Sidebar";
import './root.css'

const Root = () => {

  return (
    <div>
      <Header></Header>
      <div className="body">
        <Sidebar></Sidebar>

        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
