import React from "react";
import "./style.css";
import ExpenseForm from "../ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // enteredExpenseData is the random named variable which will receive the data from child component that is expenseform.(expenseData)
    props.onAddExpense(enteredExpenseData);
    console.log(enteredExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      {/* passing through props in expenseform */}
    </div>
  );
};

export default NewExpense;
