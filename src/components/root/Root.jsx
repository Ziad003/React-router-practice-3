import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Outlet, useNavigation } from "react-router";
import Sidebar from "../sidebar/Sidebar";
import './root.css'

const Root = () => {
   const navigation = useNavigation();
   const isNavigating=Boolean(navigation.location);
  return (
    <div>
      <Header></Header>
      <div className="body">
        <Sidebar></Sidebar>
        {isNavigating && <span></span>}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
