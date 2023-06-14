import { Outlet, Link } from "react-router-dom";
import { Navbar } from '../../components';

//This is the default layout of the page, importing the navbar and the footer and surrounding
//  the main body, which is imported using Outlet
const Layout = () => {
  return (
    <>
      <div>
          <Navbar />
      </div>
      <Outlet />

    </>
  )
};

export default Layout;
