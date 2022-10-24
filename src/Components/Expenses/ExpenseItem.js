import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';

const ExpenseItem = (props) => {

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{parseFloat(props.amount).toFixed(2)} $</div>
      </div>
      
    </div>
  );
}

export default ExpenseItem;