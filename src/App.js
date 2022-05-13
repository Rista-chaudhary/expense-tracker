import "./App.css";
import React, { useState } from "react";
import NewExpense from "./Components/NewExpenses";
import Expenses from "./Components/ExpensesDetails";

let Dummy_Expenses = [
  // we changed the name from expenses(used in the component <Expenses item={expenses} />) to Dummy_Expenses.
  // {
  //   id: "e1",
  //   date: new Date(2021, 4, 3),
  //   title: "House Rent",
  //   amount: 2000,
  // },
  // {
  //   id: "e2",
  //   date: new Date(2021, 5, 3),
  //   title: "Food",
  //   amount: 700,
  // },
  // {
  //   id: "e3",
  //   date: new Date(2021, 6, 3),
  //   title: "Shop Rent",
  //   amount: 1000,
  // },
  // {
  //   id: "e4",
  //   date: new Date(2021, 7, 3),
  //   title: "Travel",
  //   amount: 100,
  // },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);
  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
