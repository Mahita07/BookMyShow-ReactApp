import "./App.css";
import Header from "./components/Header/Header";
import SliderImages from "./components/SliderImages";
import Recmovies from "./components/Recmovies";
import Premiere from "./components/Premiere";
import Onlineevents from "./components/Onlineevents";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Header />
      <SliderImages />
      <Recmovies />
      <Premiere />
      <Onlineevents />
      <Footer />
    </div>
  );
}

export default App;
