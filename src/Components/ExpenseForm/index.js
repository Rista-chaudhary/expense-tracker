import React, { useState } from "react";
import "./style.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  // In the above line of code I have created a variable using useState and also a function using which we can update the variable.
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   Similarly in the above 2 line of code we have created variable using useState to store the value and created a function to update the variable.
  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    //   We have written above line of code just to check if the value is coming in console or not.
    // We can see that now the value has arrived in this titleChangeHandler function now we have to store this in the variable that we have create
    // using useState(eg. enteredTitle, enteredAmount). And we know that these variable keeps changing and it keeps updating itself using  the function next to it. (eg. to update enteredTitle var we will use setEnteredTitle function).
    setEnteredTitle(event.target.value);
  };
  //   here we have called the function named titleChangeHandler. I have used arrow function. We can use normal function also.
  //   now we have to store value, so we will use useState to store.
  //   In this function we have passed an object named event which will by default give us react and it will have value.Now,
  //   lets console and check if we are getting the value or not.
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  //   We have collected the updated value using above functions in the variable created using useState.Now, we will show the input (stored in variable) entered by the user in UI.
  const submitHandler = (event) => {
    /* form has by default nature that whenever it is submitted it is refreshed. But in react we are not supposed to refresh the page */
    //   Inorder to stop this we will use one event propery which javascript function provides us. It is prevent all the default functin provided.
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      //   the value which we get from enteredDate var is in string format. Inorder to change that in date format we use new Date function and we have the name inside it.
    };
    // We have created expenseData object to collect all the data of variable in one object. You can also check using console.log.
    props.onSaveExpenseData(expenseData);
    // on the above line we have passed the name of the object expenseData which we have created in the parameter. And this parameter will be received by any variable in NewExpenses where we are transferring the data.
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    // above function code is used to clear the input field.
  };

  return (
    <form onSubmit={submitHandler}>
      {/* when we submit the form an form submit event is triggered. We have applied funciton {submitHandler} for that only  */}

      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title </label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          {/* when ever there will be change in input(means whenever user enter any input) there will be execution of onChange function */}
        </div>
        <div className="new-expense__control">
          <label>Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date </label>
          <input type="date" onChange={dateChangeHandler} value={enteredDate} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
