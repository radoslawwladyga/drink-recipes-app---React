import { useState } from "react";
import classes from "./Ingredients.module.css";

const Ingredients = (props) => {
  const [visible, setVisible] = useState(true);
  
  const setInvisible = () => {
    setVisible(false);
    props.onRemove(props.id)
    setVisible(true)
  };

  return visible ? (
    <div className={classes.selected}>
      <strong>{props.onChangeInput}</strong>
      <span className={classes.close} onClick={setInvisible}>
        x
      </span>
    </div>
  ) : (
    ""
  );
};
export default Ingredients;
