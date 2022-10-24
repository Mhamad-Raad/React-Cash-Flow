import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.addExpense(expenseData);
  }

  return (
    <div className="new-expense"> 
      <ExpenseForm addExpense={saveExpenseDataHandler}/>
   </div>
  );
 
}

export default NewExpense;