import classes from './MealItem.module.css';

const MealItem = (props) => {
  console.log(props.name);
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{props.price}</div>
      </div>
    </li>
  );
};

export default MealItem;
