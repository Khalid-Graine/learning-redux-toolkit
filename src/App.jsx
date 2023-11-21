
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './components/NavBar';


function App() {
  

  console.log(useSelector((x) => console.log(x.cart)))
  // const dispatch = useDispatch();


  return (
   <div>
    <NavBar />
   </div>
  );
}

export default App;
