import "./style.css";
import React from "react";

const Card = (props) => {
  // instead of normal function we are creating arrow function[function Card(props){}] just for reference.
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};
export default Card;
