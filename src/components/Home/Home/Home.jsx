import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="ps-16 lg:mt-40">
      <h1 className="text-3xl font-bold">Tamim Holmes</h1>
      <ul className="space-y-4">
        <li>
          <NavLink exact to="/" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName="active-link">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName="active-link">
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="my-8">© 2023 Tokyo VueJS Created by Ib-Themes</footer>
    </div>
  );
};

export default Home;
