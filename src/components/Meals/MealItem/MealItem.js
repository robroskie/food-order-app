const MealItem = (props) => {
  console.log(props.name);
  return (
    <li>
      <div>
        <h3>{props}</h3>
        <h4>{props.description}</h4>
      </div>
    </li>
  );
};

export default MealItem;
