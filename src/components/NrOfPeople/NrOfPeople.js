import React from 'react';
import { nrPeople } from './../../reducers/calculationReducer';
import { useDispatch } from 'react-redux';

const NrOfPeople = () => {
  const dispatch = useDispatch();

  const handleNumberOfPeople = e => {
    dispatch(nrPeople(e.target.value));
  };

  return (
    <div>
      <p>Number of people</p>
      <input type='number' onChange={handleNumberOfPeople} />
    </div>
  );
};

export default NrOfPeople;
