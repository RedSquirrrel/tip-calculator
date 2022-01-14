import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTip, customTip } from './../../reducers/calculationReducer';

const Buttons = () => {
  const bill = useSelector(state => state.calculation.bill);
  const per = useSelector(state => state.calculation.percentage);
  const custom = useSelector(state => state.calculation.customTip);

  const dispatch = useDispatch();

  const handlePercentage = useCallback(
    percentage => {
      dispatch(selectTip((bill * percentage) / 100));
    },
    [dispatch, bill]
  );

  const handleCustom = e => {
    dispatch(customTip(e.target.value));
  };

  useEffect(() => {
    console.log('effect custom', custom);
    handlePercentage(custom);
  }, [handlePercentage, custom]);

  return (
    <div>
      Select tip % {per}
      <button onClick={() => handlePercentage(5)}>5%</button>
      <button onClick={() => handlePercentage(10)}>10%</button>
      <button onClick={() => handlePercentage(15)}>15%</button>
      <button onClick={() => handlePercentage(25)}>25%</button>
      <button onClick={() => handlePercentage(50)}>50%</button>
      <input type='number' onChange={handleCustom} placeholder='Custom' />
    </div>
  );
};

export default Buttons;
