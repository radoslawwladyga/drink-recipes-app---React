import React, { useState, useEffect } from "react";
import Account from "../UI/Account";
import Show from "./Show";
import Back from "../UI/Back";
import classes from "./Results.module.css";

const Results = () => {
  const [recipe, setNewRecipe] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const find = () => {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    let search = urlParams.get("search");
    return search.split(",");
  };

  let showRecipes = [];

  useEffect(() => {
    fetch(
      "https://react-search-1039d-default-rtdb.europe-west1.firebasedatabase.app/.json"
    )
      .then((response) => response.json())
      .then((data) => {
        data.forEach((e) => {
          Object.entries(e).forEach(([key, value]) => {
            if (key === "ingredients") {
              if (
                find().every((item) =>
                  value.toLowerCase().includes(item.toLowerCase())
                )
              ) {
                showRecipes.push(e);
              }
            }
          });
        });
        setNewRecipe(showRecipes);
      });
  }, []);

  const renderRecipes = () => {
    return (
      <div>
        {recipe?.slice(0, 5).map((num, index) => (
          <Show
            key={index}
            name={num.name}
            image={num.image}
            ingredients={num.ingredients}
            instructions={num.instructions}
          />
        ))}

        {showMore &&
          recipe
            ?.slice(5)
            .map((num, index) => (
              <Show
                key={index}
                name={num.name}
                image={num.image}
                ingredients={num.ingredients}
                instructions={num.instructions}
              />
            ))}
      </div>
    );
  };

  const visibleButton = () => {
    return isActive ? (
      <React.Fragment>
        <div className={classes.seeSection}>
          <button
            className={classes.seebutton}
            type="button"
            onClick={() => {
              setShowMore(true);
              setIsActive(false);
            }}
          >
            <span>SEE ALL &#62;&#62;</span>
          </button>
        </div>
      </React.Fragment>
    ) : (
      ""
    );
  };

  const checkRecipes = () => {
    if (recipe.length > 0) {
      return (
        <div>
          <h1>Your search results</h1>
          <div>{renderRecipes()}</div>
          {visibleButton()}
        </div>
      );
    } else {
      return (
        <h1>Sorry, we couldn't find any recipes. Try to change ingredients</h1>
      );
    }
  };

  const count = () => {
    if (window.innerWidth > 960) {
      return <Account />;
    } else {
      return ''
    }
  }
  return (
    <div>
      <div className={classes.position}>
        <Back />
        {count()}
      </div>
      {checkRecipes()}
    </div>
  );
};

export default Results;
