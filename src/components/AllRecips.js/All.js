import { useState, useEffect } from "react";
import Show from "../Results/Show";
import Back from "../UI/Back";


const All = () => {
  const [showAll, setShowAll] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-search-1039d-default-rtdb.europe-west1.firebasedatabase.app/.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setShowAll(data);
      });
  }, []);

  return (
    <div>
      <Back class />
      {showAll.map((num, index) => (
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

export default All;
