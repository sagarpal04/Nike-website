import Nav from "./components/Nav";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <div>
        <Nav />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
