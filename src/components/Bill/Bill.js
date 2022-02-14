import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBill } from '../../reducers/calculationReducer';
import './Bill.scss';

const Bill = () => {
  const dispatch = useDispatch();
  const bill = useSelector(state => state.calculation.bill);

  const addBill = e => {
    if (e.target.value === '0') {
      return;
    }
    dispatch(createBill(e.target.value));
  };

  return (
    <div className='bill-container'>
      <p>Bill</p>
      <input value={bill} type='number' onChange={addBill} placeholder='0' />
    </div>
  );
};

export default Bill;
