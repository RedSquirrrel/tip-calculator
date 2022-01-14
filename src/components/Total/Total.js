import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
  const withProcent = useSelector(state => state.calculation.percentage);
  const numberOfPeople = useSelector(state => state.calculation.numberOfPeople);
  const bill = useSelector(state => state.calculation.bill);
  const tipAmount = withProcent / numberOfPeople;
  const totalAmountPerPers = bill / numberOfPeople + tipAmount;

  return (
    <div>
      <p>
        Tip Amount / per person ${' '}
        {tipAmount ? Math.floor(tipAmount * 100) / 100 : (Math.round(0 * 100) / 100).toFixed(2)}
      </p>
      <p>
        Total / per person ${' '}
        {totalAmountPerPers ? Math.round(totalAmountPerPers * 100) / 100 : (Math.round(0 * 100) / 100).toFixed(2)}{' '}
      </p>
    </div>
  );
};

export default Total;
