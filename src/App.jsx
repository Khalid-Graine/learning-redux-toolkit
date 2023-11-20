// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement , reset} from './store/features/counterSlice';
import {change} from "./store/features/user"
import Color from './components/Color';


function App() {
  const { count, user,color } = useSelector((state) => ({
    count: state.counter.count,
    user: state.user.value,
  }));
  
  const dispatch = useDispatch();


  return (
    <div>
        <Color />
        <br />
      
     
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <br />
      <h1>{user}</h1>
      <button onClick={() => dispatch(change('thisis ne'))}>chnage</button>
    </div>
  );
}

export default App;
