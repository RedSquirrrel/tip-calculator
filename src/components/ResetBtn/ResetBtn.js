import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCalc } from './../../reducers/calculationReducer';
import { hideNotification } from '../../reducers/notificationReducer';
import './Reset.scss';
import './../../styles/_utilities.scss';

const ResetBtn = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.calculation);

  const handleReset = () => {
    dispatch(resetCalc());
    dispatch(hideNotification('', ''));
  };

  return (
    <div className='form'>
      <input
        onClick={handleReset}
        className={`${
          state.bill === '' && state.numberOfPeople === '' && state.customTip === '' ? 'disabled' : 'form__input'
        }`}
        disabled={state.bill === '' && state.numberOfPeople === '' && state.customTip === ''}
        type='button'
        value='Reset'
      />
    </div>
  );
};

export default ResetBtn;
