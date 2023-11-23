
import React from 'react';
import NavBar from './components/NavBar';
import ItemsContainer from './components/ItemsContainer';
import Totalbar from './components/Totalbar';


function App() {
  
  return (
   <div className='w-full md:w-6/12 mx-auto'>
    <NavBar  />
    <ItemsContainer />
    <Totalbar />
   </div>
  );
}

export default App;
