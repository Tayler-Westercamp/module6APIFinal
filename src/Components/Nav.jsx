import { useNavigate } from "react-router-dom";

const Nav = () => {
  let navigate = useNavigate();

  function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

  return (
    <>
      <section id="landing_page">
        <nav>
          <div className="nav__container">
            <div className="company__name--wrapper">
              <figure className="nav__logo--wrapper">
                <i className="fa-solid fa-film nav__logo"></i>
              </figure>
              <h1 className="company__name">Filmtastic</h1>
            </div>
            <ul className="nav__link--list">
              <li
                className="nav__link link__hover-effect"
                onClick={() => navigate("/")}
              >
                Home
              </li>
              <li className="nav__link link__hover-effect">Review</li>
              <li className="nav__link nav__link--btn">Contact</li>
            </ul>
            <button className="btn__menu">
              <i className="fa-solid fa-bars" onClick={openMenu}></i>
            </button>
            <div className="menu__backdrop">
              <button
                className="btn__menu btn__menu--close"
                onClick={closeMenu}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
              <ul className="menu__links">
                <li className="menu__list">
                  <a href="#" className="menu__link" onClick={() => {closeMenu(); navigate('/')}}>
                    Home
                  </a>
                </li>
                <li className="menu__list">
                  <a
                    href="#features"
                    className="menu__link"
                    onClick={closeMenu}
                  >
                    Review
                  </a>
                </li>
                <li className="menu__list">
                  <a href="" className="menu__link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Nav;
