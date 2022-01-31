import React from 'react';
import AnimatedNumber from 'animated-number-react';
import { useSelector } from 'react-redux';

import './Total.scss';

const Total = () => {
  const withProcent = useSelector(state => state.calculation.percentage);
  const numberOfPeople = useSelector(state => state.calculation.numberOfPeople);
  const bill = useSelector(state => state.calculation.bill);

  const tipAmount = withProcent / numberOfPeople;
  const totalAmountPerPers = bill / numberOfPeople + tipAmount;

  let roundedTipAmount = tipAmount && Math.floor(tipAmount * 100) / 100;
  let roundedTotalAmountPerPers = Math.round(totalAmountPerPers * 100) / 100;
  const formatValue = value => value.toFixed(2);

  return (
    <div className='total-container'>
      <div className='total-container__flex'>
        <p>
          Tip Amount<span>/ per person </span>
        </p>

        <div className='total-container__flex__number'>
          $<AnimatedNumber value={roundedTipAmount} formatValue={formatValue} />
        </div>
      </div>

      <div className='total-container__flex'>
        <p>
          Total <span> / per person </span>
        </p>
        <div>
          $<AnimatedNumber value={roundedTotalAmountPerPers} formatValue={formatValue} />
        </div>
      </div>
    </div>
  );
};

export default Total;
