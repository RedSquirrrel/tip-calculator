import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTip, customTip } from './../../reducers/calculationReducer';
import './Buttons.scss';

const Buttons = () => {
  const bill = useSelector(state => state.calculation.bill);
  const custom = useSelector(state => state.calculation.customTip);

  const dispatch = useDispatch();

  const handlePercentage = useCallback(
    percentage => {
      dispatch(selectTip((bill * percentage) / 100));
    },
    [dispatch, bill]
  );

  const handleCustom = e => {
    if (e.target.value === '0') {
      return;
    }
    dispatch(customTip(e.target.value));
  };

  useEffect(() => {
    handlePercentage(custom);
  }, [handlePercentage, custom]);

  return (
    <div className='btn-container'>
      <p>Select tip %</p>
      <div className='btn-container__buttons'>
        <button onClick={() => handlePercentage(5)}>5%</button>
        <button onClick={() => handlePercentage(10)}>10%</button>
        <button onClick={() => handlePercentage(15)}>15%</button>
        <button onClick={() => handlePercentage(25)}>25%</button>
        <button onClick={() => handlePercentage(50)}>50%</button>
        <input
          value={custom}
          className='btn-container__buttons__input'
          type='number'
          onChange={handleCustom}
          placeholder='Custom'
        />
      </div>
    </div>
  );
};

export default Buttons;
