import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/common/footer/footer";
import Headers from "./components/common/header/header";
function MainLayout({ children }) {
  return (
    <div className="App">
      <Headers />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
