import ExpenseFilter from '../Expenses/ExpensesFilter.js';
import ExpenseList from '../Expenses/ExpenseList.js';
import ExpenseChart from '../Expenses/Chart/ExpenseChart.js';
import React, { useState } from 'react';

import './Card.css';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const FilterHandler = (val) => {
    setFilteredYear(val);
  };

  let arr = props.Pexpenses?.filter((expense) => {
    const date = new Date(expense.date)
    return date.getFullYear().toString() === filteredYear;
  });

  const reachDeleteHandler = (id) => {
    props.deleteHandler(id);
  } 

  return (
    <div className="expenses">
      <ExpenseFilter onFilterHandler={FilterHandler}/>
      <ExpenseChart expenses={arr}/>
      <ExpenseList deleteItem={reachDeleteHandler} items={arr}/>
    </div>
  );

}

export default Expenses;