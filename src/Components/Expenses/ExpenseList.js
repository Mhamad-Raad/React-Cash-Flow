import './ExpenseList.css'

import ExpenseItem from './ExpenseItem.js';

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  
  const deleteP = (id) => {
    props.deleteItem(id);
  }
  
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem 
          deleteHandlerP={deleteP}
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          id = {expense.id}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;