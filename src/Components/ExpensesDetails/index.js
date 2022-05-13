import ExpenseTracker from "../ExpenseTracker";
import Card from "../Card";
import "./style.css";
import React from "react";

function Expenses(props) {
  // we can also use arrow functions here [const Expenses = (props) => {}]
  return (
    <Card className="expenses">
      {props.item.map((expense) => (
        // here expense is just a variable in which data will be received from the array of object from app.js
        <ExpenseTracker
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
        //   <ExpenseTracker
        //   date={props.data[0].date}
        //   title={props.data[0].title}
        //   amount={props.data[0].amount}
        // />
        // <ExpenseTracker
        //   date={props.data[1].date}
        //   title={props.data[1].title}
        //   amount={props.data[1].amount}
        // />
        // <ExpenseTracker
        //   date={props.data[2].date}
        //   title={props.data[2].title}
        //   amount={props.data[2].amount}
        // />
        // <ExpenseTracker
        //   date={props.data[3].date}
        //   title={props.data[3].title}
        //   amount={props.data[3].amount}
        // />
      ))}
    </Card>
  );
}

export default Expenses;
