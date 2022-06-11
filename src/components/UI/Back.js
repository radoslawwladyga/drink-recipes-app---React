import classes from "../Results/Results.module.css"
import { Link } from "react-router-dom";


const Back = () => {
  return (
    <div className={classes.nav}>
    <nav>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={classes.search}>
          <span>&#171; BACK TO THE SEARCH</span>
        </div>
      </Link>
    </nav>
    </div>
  );
};

export default Back
