import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Ingredients from "../Ingredients/Ingredients";
import classes from "./Search.module.css";

const Search = () => {
  const [defaultState, setNewState] = useState([]);
  const inputElement = useRef();

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputElement.current.value !== "") {
      setNewState([...defaultState, inputElement.current.value]);
      inputElement.current.value = "";
    }
  };

  const look = () => {
    if (defaultState !== "") {
      return true;
    } else {
      return false;
    }
  };

  const renderIngredients = () => {
    return defaultState.map((num, index) => {
      return (
        <Ingredients
          key={index}
          id={index}
          onChangeInput={num}
          onRemove={removeHandler}
        />
      );
    });
  };

  const showButton = () => {
    if (defaultState.length > 0) {
      return (
        <Link
          to={{
            pathname: "results",
            search: `search=${defaultState.join(",")}`,
          }}
          style={{ textDecoration: "none" }}
        >
          <input
            type="button"
            className={classes.button}
            value="Search for a recipe"
          />
        </Link>
      );
    }
  };

  const removeHandler = (id) => {
    setNewState((prev) => {
      const updated = prev.filter((i, index) => index !== id);
      return updated;
    });
  };

  return (
    <section style={{ display: "block", margin: "0 auto" }}>
      <input
        type="text"
        className={classes.search}
        placeholder="Type in an ingredient and hit enter"
        ref={inputElement}
        onKeyDown={handleKeyDown}
      />
      <div className={classes.results}>
        {look() ? renderIngredients() : false}
      </div>
      <nav>{look() ? showButton() : "false"}</nav>
    </section>
  );
};

export default Search;
