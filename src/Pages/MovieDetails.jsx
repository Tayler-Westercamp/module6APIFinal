import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Components/Spinner";

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieDets, setMovieDets] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  const fetchMovieDetails = async () => {
    setIsLoading(true)
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=a91ed9b`
    );
    setMovieDets(data);
    setIsLoading(false)
  };

  return (
    <section id=" landing_page">
      <div className="movie-detail-container">
        {isLoading && <Spinner />}
        <div className="movie_detail_img_wrapper">
          <img src={movieDets.Poster} alt={movieDets.Title} />
        </div>
        <div className="movie_detail_description_wrapper">
          <h1>{movieDets.Title}</h1>
          <h2>{movieDets.Year}</h2>
          <p>{movieDets.Plot}</p>
          <p>
            <strong>Genre:</strong> {movieDets.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movieDets.Director}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
