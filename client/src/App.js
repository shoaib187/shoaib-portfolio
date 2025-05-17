import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CounterProvider } from "./components/context/CounterContext";
import Templates from "./Templates";
import MainLayout from "./MainLayout";
import LandingPage from "./static/landingPage/landingPage";

function App() {
  return (
    <BrowserRouter>
      <CounterProvider>
        <MainLayout>
          <div className="App">
            <Routes>
              <Route path="/*" element={<LandingPage />} />
              <Route path="/templates" element={<Templates />} />
            </Routes>
          </div>
        </MainLayout>
      </CounterProvider>
    </BrowserRouter>
  );
}

export default App;
