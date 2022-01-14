import React from 'react';
import { useDispatch } from 'react-redux';
import { createBill } from '../../reducers/calculationReducer';

const Bill = () => {
  const dispatch = useDispatch();
  const addBill = e => {
    dispatch(createBill(e.target.value));
  };

  return (
    <div>
      <p>Bill</p>
      <input type='number' onChange={addBill} />
    </div>
  );
};

export default Bill;
