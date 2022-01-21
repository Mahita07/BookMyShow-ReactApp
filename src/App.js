import "./App.css";
import Header from "./components/Header/Header";
import SliderImages from "./components/SliderImages";
import Recmovies from "./components/Recmovies";
import Premiere from "./components/Premiere";
import Onlineevents from "./components/Onlineevents";
import Registration from "./components/Registration";
import Footer from "./components/Footer/Footer";
//import AllMovies from './components/AllMovies';
import AllMoviesFetch from "./components/AllMoviesFetch";
//import SingleMovie from './components/SingleMovie';
import SingleMovieFetch from "./components/SingleMovie";
//to install switch: npm install react-router-dom@5
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/movies">
            <AllMoviesFetch />
          </Route>
          <Route exact path="/movie/:movid">
            <SingleMovieFetch />
          </Route>
          <Route exact path="/user-register">
            <Registration />
          </Route>
          <Route exact path="/">
            <SliderImages />
            <Recmovies />
            <Premiere />
            <Onlineevents />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
