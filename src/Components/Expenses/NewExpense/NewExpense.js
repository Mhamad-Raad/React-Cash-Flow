import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isAdding, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
  }

  const editHandler = () => {
    let val = isAdding;
    val = !val;
    setIsEditing(val);
  }

  return (
    <div className="new-expense"> 
      {isAdding && <ExpenseForm cancelHandler={editHandler} addExpense={saveExpenseDataHandler}/>}
      {!isAdding && <button onClick={editHandler}>Add a new Expense</button>}
   </div>
  );
 
}

export default NewExpense;