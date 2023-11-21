
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import ItemsContainer from './components/ItemsContainer';
import Totalbar from './components/Totalbar';


function App() {
  

  console.log(useSelector((x) => console.log(x.cart)))
  // const dispatch = useDispatch();


  return (
   <div className=''>
    <NavBar  />
    <ItemsContainer />
    <Totalbar />
   </div>
  );
}

export default App;
