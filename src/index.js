import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
<Router>
      <Route exact path="/">
        <App />
      </Route>
  </Router>
