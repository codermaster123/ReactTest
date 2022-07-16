import React from 'react';
import './App.css';

import Home from './Component/Home';
function App() {
  return (
    <>

      <div className=" bg-gray-100 w-screen h-screen flex-row items-center justify-center pt-10">
        <h1 className=" text-blue-600 font-bold text-center pb-4 underline  decoration-solid text-2xl  ">Neuro Todos</h1>
        <Home />

      </div>
    </>
  );
}

export default App;
