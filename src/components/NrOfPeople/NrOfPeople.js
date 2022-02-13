import React from 'react';
import { nrPeople } from './../../reducers/calculationReducer';
import { showNotification, hideNotification } from '../../reducers/notificationReducer';
import { useDispatch, useSelector } from 'react-redux';
import Notification from './../Notification/Notification';
import './NrOfPeople.scss';

const NrOfPeople = () => {
  const people = useSelector(state => state.calculation.numberOfPeople);
  const notificationStyle = useSelector(state => state.notification.style);

  const dispatch = useDispatch();

  const handleNumberOfPeople = e => {
    if (e.target.value === '0') {
      dispatch(showNotification("Can't be zero", 'error'));
      return;
    }
    dispatch(nrPeople(e.target.value));
    dispatch(hideNotification('', 'active'));
  };

  return (
    <div className='number-people'>
      <div className='number-people__notification'>
        <p>Number of people</p>
        <Notification />
      </div>

      <input
        value={people}
        className={notificationStyle}
        type='number'
        onChange={handleNumberOfPeople}
        placeholder='0'
      />
    </div>
  );
};

export default NrOfPeople;
