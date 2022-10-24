import Card from './Components/UI/Card.js';
import NewExpense from './Components/Expenses/NewExpense/NewExpense.js';

const App = () => {
  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  const FilterHandler = (event) => {
    console.log('In App.js');
    console.log(event.target.value);
  };

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler}/>
      <Card onParentFilter={FilterHandler}/>
    </div>
  );
}

export default App;
