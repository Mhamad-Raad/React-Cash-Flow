import Card from "./Components/UI/Card.js";
import NewExpense from "./Components/Expenses/NewExpense/NewExpense.js";
import { useState } from "react";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const storageExpenses = JSON.parse(localStorage.getItem("expenses"));
  const ex = storageExpenses?.length > 0 ? storageExpenses : DUMMY_DATA;
  const [expenses, setExpenses] = useState(ex);

  const addExpenseHandler = (expense) => {
    const newExpenses = [expense, ...expenses];
    setExpenses(newExpenses);
    localStorage.setItem("expenses", JSON.stringify(newExpenses));
  };

  const deleteExpenseHandler = (id) => {
    const index = expenses.findIndex((object) => {
      return object.id === id;
    });

    let newE = expenses.map((object) => {
      return object;
    });

    newE.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(newE));
    setExpenses(newE);
  };

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler} />
      <Card deleteHandler={deleteExpenseHandler} Pexpenses={expenses} />
    </div>
  );
};

export default App;
