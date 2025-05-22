import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setSearchTerm }) => {
    const [inputValue, setInputValue] = useState('')
  
  let navigate = useNavigate();

  const executeSearch = () => {
    setSearchTerm(inputValue);
    navigate("/main");
  }

  return (
    <section id="landing_page">
      <div className="search__container">
        <h1 className="search__title">Find your next favorite movie!</h1>
        <div className="search__bar--container">
          <input
            type="text"
            className="search__bar"
            placeholder="search by title"
            value={inputValue}
            onChange={(event) =>
              setInputValue(event.target.value)
            }
            onKeyDown={(event) =>
              event.key === "Enter" && executeSearch()
            }
          />
          <i className="fas fa-spinner movies__loading--spinner"></i>
        </div>
        <section id="movies_background"></section>
      </div>
    </section>
  );
};

export default Home;
