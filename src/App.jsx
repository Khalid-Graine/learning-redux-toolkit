// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement , reset} from './store/features/counterSlice';
import {change} from "./store/features/user"

function App() {
  const count = useSelector((state) => state.counter.value);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  console.log(dispatch)

  return (
    <div>

      
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
