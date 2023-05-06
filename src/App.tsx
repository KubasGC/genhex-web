import { FunctionComponent } from "react";
import NavBar from "./components/NavBar";
import DiscoverPage from "./pages/Discover";
import Footer from "./components/Footer";

const App: FunctionComponent = () => {
  return (
    <>
      <NavBar />

      <div className="max-w-[1000px] w-full mx-auto text-white mt-4">
        <DiscoverPage />
      </div>

      <Footer />
    </>
  );
};

export default App;
