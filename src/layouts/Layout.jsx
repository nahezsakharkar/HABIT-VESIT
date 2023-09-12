import { Outlet } from "react-router-dom";

// components ------------------------------------
import Header from "../components/LayoutComponents/Header/Header";
// import Footer from "../components/LayoutComponents/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
        <div>
          <main>
            <div>
              <Outlet />
            </div>
            {/* <Footer /> */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
