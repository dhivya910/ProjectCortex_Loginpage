import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/counterSlice';
import './App.css';

import Logout from './components/logout';
import Login from './components/login';
import { selectUser } from "./features/counter/counterSlice";
import {useSelector} from 'react-redux';

function App() {
  const {user} = useSelector((state) => state.logReducer);
  return 
  (
    <div>{user?<Logout/>:<Login/>}</div>
  );
}

export default App;
