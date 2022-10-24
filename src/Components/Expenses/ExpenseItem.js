import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import { FaTrashAlt } from 'react-icons/fa';

const ExpenseItem = (props) => {

  const DELETE = () => {
    props.deleteHandlerP(props.id);
  }

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{parseFloat(props.amount).toFixed(2)} $</div>
        <button type="button" className="deleteBtn" onClick={DELETE}><FaTrashAlt /></button>
      </div>
      
    </div>
  );
}

export default ExpenseItem;