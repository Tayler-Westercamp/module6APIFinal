import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";

const Main = ({ searchTerm }) => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchTerm !== "") {
      setInputValue(searchTerm);
      mainPageSearchUpdate(searchTerm);
    }
  }, []);

  const mainPageSearchUpdate = async (searchTerm) => {
    setIsLoading(true)
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${searchTerm || inputValue}&apikey=a91ed9b`
    );
    const { Search } = data;
    setMovies(Search);
    setIsLoading(false)
  };

  const executeSearch = () => {
    mainPageSearchUpdate();
  };

  const goToDetails = (Id) => {
    navigate(`/movie/${Id}`);
  };

  return (
    <>
      <div className="search__container">
        <h1 className="search__title">Click a Movie For More Details!</h1>
        <div className="search__bar--container">
          <input
            type="text"
            className="search__bar"
            value={inputValue}
            placeholder="search by title"
            onChange={(event) => setInputValue(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && executeSearch()}
          />
          {isLoading && <Spinner />}
        </div>
      </div>
      <section id="movies">
        <div className="movie__list">
          <div className="movie__wrapper movie__wrapper--title">
            {movies !== undefined &&
              movies.length > 0 &&
              movies.map((movie, index) => (
                <div
                  className="movie"
                  key={index}
                  onClick={() => goToDetails(movie.imdbID)}
                >
                  <figure>
                    <img src={movie.Poster} />
                  </figure>
                  <div className="movie__overlay">
                    <h1 className="movie__overlay--title">{movie.Title}</h1>
                    <h2 className="movie__overlay--year">{movie.Year}</h2>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
