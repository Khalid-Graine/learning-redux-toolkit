
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
import ItemsContainer from './components/ItemsContainer';
import Totalbar from './components/Totalbar';
import { calculTotal } from './store/features/cartSlice';

function App() {
  
  return (
   <div>
    <NavBar  />
    <ItemsContainer />
    <Totalbar />
   </div>
  );
}

export default App;
