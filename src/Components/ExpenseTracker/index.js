import React, { useState } from "react";
import "./style.css";
import ExpenseDate from "../ExpenseDate";
import Card from "../Card";
function ExpenseTracker(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price"> ${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseTracker;
