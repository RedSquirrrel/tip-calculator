// import { useCallback, useEffect, useState } from 'react';
import './App.scss';
import Bill from './components/Bill/Bill';
import Buttons from './components/Buttons/Buttons';
import NrOfPeople from './components/NrOfPeople/NrOfPeople';
import ResetBtn from './components/ResetBtn/ResetBtn';
import Total from './components/Total/Total';
import Notification from './components/Notification/Notification';
import logo from './images/logo.svg';

const App = () => {
  return (
    <main>
      <img src={logo} alt='splitter' />
      <div className='container'>
        <div className='container__calculator'>
          <Bill />
          <Buttons />
          <Notification />
          <NrOfPeople />
        </div>
        <div className='container__total'>
          <Total />
          <ResetBtn />
        </div>
      </div>
    </main>
  );
};

export default App;
