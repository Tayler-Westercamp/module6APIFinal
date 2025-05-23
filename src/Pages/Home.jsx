import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";

const Home = ({ setSearchTerm }) => {
    const [inputValue, setInputValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
  
  let navigate = useNavigate();

  const executeSearch = () => {
    setIsLoading(true)
    setSearchTerm(inputValue);
    setIsLoading(false)
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
          {isLoading && <Spinner />}
        </div>
        <section className="filler"> 
            <figure className="nav__logo--wrapper">
                <i className="fa-solid fa-film nav__logo"></i>
            </figure>
            <h1 className="company__name">Filmtastic</h1>
        </section>
      </div>
    </section>
  );
};

export default Home;
