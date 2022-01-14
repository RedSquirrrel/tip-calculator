// import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Bill from './components/Bill/Bill';
import Buttons from './components/Buttons/Buttons';
import NrOfPeople from './components/NrOfPeople/NrOfPeople';
import ResetBtn from './components/ResetBtn/ResetBtn';
import Total from './components/Total/Total';
import logo from './images/logo.svg';

const App = () => {
  return (
    <div>
      <img src={logo} alt='splitter' />
      <div className='container'>
        <div className='left'>
          <Bill />
          <Buttons />
          <NrOfPeople />
        </div>
        <div className='right'>
          <Total />
          <ResetBtn />
        </div>
      </div>
    </div>
  );
};

export default App;

//  Calculation for: bill 142.55, pers. 5, percentage 5%
// 142.55/5 = 28.51 total bill without tip
// 142.55*15/100 = 21.3825 total tip
// 21.3825 / 5 = 4.2765 tip/per pers.
// 4.2765 + 28.51 = 32.7865 total bill with tip / per pers.
