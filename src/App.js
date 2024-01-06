import "./App.css";
import Nav from "./component/Nav";
import MovieList from "./component/MovieList";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "./component/Pagination";
import MovieDetails from "./component/MovieDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [movies, setMovies] = useState("");
  const getAllMovies = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=16437c59e8adcee097f1b3b1b623e1b6"
      )
      .then((res) => setMovies(res.data.results))
      .catch((error) => {
        console.error("Error fetching movies:", error);
        // You might want to set some default or error state in case of failure
        setMovies([]);
      });
  };
  useEffect(() => {
    getAllMovies();
  }, []);
  // search in api
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=16437c59e8adcee097f1b3b1b623e1b6&query=${word}&language=ar`
      );
      setMovies(res.data.results);
    }
  };
  const getCurrentPage = (page) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=16437c59e8adcee097f1b3b1b623e1b6&page=${page}`
      )
      .then((data) => setMovies(data.data.results));
  };
  return (
    <BrowserRouter>
      <div>
        <Nav search={search}></Nav>
        <Routes>
          <Route
            path="/"
            element={<MovieList movies={movies}></MovieList>}
          ></Route>
          <Route
            path="/movie/:id"
            element={<MovieDetails></MovieDetails>}
          ></Route>
        </Routes>
        {movies.length >= 1 ? (
          <Pagination getCurrentPage={getCurrentPage}></Pagination>
        ) : null}
      </div>
    </BrowserRouter>
  );
}

export default App;
