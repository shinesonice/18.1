import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header>
      <h2 className={classes.logo}>Great Quote</h2>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/quotes"
              className={(navData) =>
                navData.isActive ? classes.activeClassName : classes.link
              }
            >
              All Quote
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-quote"
              className={(navData) =>
                navData.isActive ? classes.activeClassName : classes.link
              }
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
