import Account from "./Account";
import { Link } from "react-router-dom";
import classes from "./Menu.module.css";

const Menu = () => {
  if (window.innerWidth > 960) {
    return (
      <div className={classes.position}>
        <div className={classes.mainHeader}>
          <section className={classes.seeall}>
            <nav className={classes.menu}>
              <Link to="/all" style={{ textDecoration: "none" }}>
              <span style={{ color: "white" }}>ALL RECIPES</span>
              </Link>
            </nav>
            <span className={classes.search}>SEARCH ENGINE</span>
          </section>
          <Account />
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.position}>
        <div className={classes.mainHeader}>
          <section style={{ padding: "50px" }}>
            <span className={classes.search}>SEARCH ENGINE</span>
          </section>
        </div>
      </div>
    );
  }
};

export default Menu;
