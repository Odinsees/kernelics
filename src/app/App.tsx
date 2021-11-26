import React from 'react';
import './App.css';
import {Todo} from "../features/Todo/Todo";
import {Navigation} from "../features/Navigation/Navigation";

function App() {
  return (
    <div>
        <Navigation/>
        <Todo/>
    </div>
  );
}

export default App;
