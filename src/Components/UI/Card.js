import ExpenseItem from '../Expenses/ExpenseItem.js';
import ExpenseFilter from '../Expenses/ExpensesFilter.js';

import './Card.css';


const Expenses = (props) => {

 

  return (
    <div className="expenses">
       <ExpenseFilter onFilterHandler={props.filterExpenses}/>
       {
          props.Pexpenses.map((expense) => {
            return ( <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} /> );
          })
       }
    </div>
      
  );

}

export default Expenses;