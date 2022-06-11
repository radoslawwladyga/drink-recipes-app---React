import classes from "./Results.module.css";

const Show = (props) => {
return (
    <section className={classes.one}>
    <img src={props.image} alt="recipe" className={classes.image} />
    <div>
      <div className={classes.title}>
        <p>{props.name}</p>
      </div>
      <p>INGREDIENTS: {props.ingredients}</p>
      <p>DESCRIPTION: {props.instructions}</p>
    </div>
  </section>
)
}

export default Show;