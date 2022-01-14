import React from 'react';
import { useDispatch } from 'react-redux';
import { resetCalc } from './../../reducers/calculationReducer';

const ResetBtn = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetCalc());
  };

  return (
    <div>
      <form onClick={handleReset}>
        <button>Reset</button>
      </form>
    </div>
  );
};

export default ResetBtn;
