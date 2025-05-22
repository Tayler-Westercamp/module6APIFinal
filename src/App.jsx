import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import { useState } from "react";
import Main from "./Pages/Main";
import MovieDetails from "./Pages/MovieDetails";
import Footer from "./Components/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Router>
        <section id="landing_page"></section>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Home 
              setSearchTerm={setSearchTerm} />
            }
          ></Route>
          <Route
            path="/main"
            element={<Main 
              searchTerm={searchTerm} />
            }
          ></Route>
          <Route 
          path='/movie/:id' 
          element={<MovieDetails />
          } 
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
