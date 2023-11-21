// App.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement , reset} from './store/features/counterSlice';
import {change} from "./store/features/user"
import Color from './components/Color';


function App() {
  
  // const { count, user } = useSelector((state) => (
  //   console.log(state)
  // ));

  // const [name,setName] = useState(user);
  // const dispatch = useDispatch();


  return (
   <div>
    test
   </div>
    // <div>
    //     <Color />
    //     <br />
      
    //   <h1>Counter: {count}</h1>
    //   <button onClick={() => dispatch(increment())}>Increment</button>
    //   <button onClick={() => dispatch(reset())}>reset</button>
    //   <button onClick={() => dispatch(decrement())}>Decrement</button>

    //   <br />
    //   <h1>{user}</h1>
    //   <form >
    //     <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
    //   </form>
    //   <button onClick={() => dispatch(change(name))}>chnage</button>
    // </div>
  );
}

export default App;
