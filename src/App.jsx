import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

//importing the layout
import Layout from "./layouts/Layout";

//importing pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About";
import Programs from "./pages/Programs/Programs";
import Partners from "./pages/Partners/Partners";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Error500 from "./pages/Errors/500/500";
import Error404 from "./pages/Errors/404/404"

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="Programs" element={<Programs />} />
          <Route path="Partners" element={<Partners />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
        <Route path="Error500" element={<Error500 />} />
        <Route path="Error404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="Error404" replace />} />
      </Routes>
    </div>
  );
}

export default App;
