import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {
  var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState(date);

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate(date);
    
    props.addExpense(expenseData);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} required/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountHandler} required/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateHandler} required/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.cancelHandler}>Cancel</button>
        <button type="submit" >Add Expense</button>  
      </div>
    </form>
  );
}

export default ExpenseForm;