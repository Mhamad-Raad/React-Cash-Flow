import ExpenseItem from '../Expenses/ExpenseItem.js';
import ExpenseFilter from '../Expenses/ExpensesFilter.js';
import ExpenseList from '../Expenses/ExpenseList.js';
import React, { useState } from 'react';

import './Card.css';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const FilterHandler = (val) => {
    setFilteredYear(val);
  };

  let arr = props.Pexpenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpenseFilter onFilterHandler={FilterHandler}/>
      <ExpenseList items={arr}/>
    </div>
  );

}

export default Expenses;