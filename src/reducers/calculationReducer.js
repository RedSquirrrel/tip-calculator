const initialState = {
  bill: 0,
  percentage: 0,
  numberOfPeople: 0,
  customTip: 0,
};

const calculationReducer = (state = initialState, action) => {
  console.log(action.type, ':', state);
  switch (action.type) {
    case 'NEW_BILL':
      return { ...state, bill: action.bill };

    case 'NR_OF_PEOPLE':
      return { ...state, numberOfPeople: action.people };

    case 'SELECT_TIP':
      return { ...state, percentage: action.select };

    case 'CUSTOM_TIP':
      return { ...state, customTip: action.custom };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

export const createBill = bill => {
  return {
    type: 'NEW_BILL',
    bill,
  };
};

export const nrPeople = people => {
  return {
    type: 'NR_OF_PEOPLE',
    people,
  };
};

export const selectTip = select => {
  return {
    type: 'SELECT_TIP',
    select,
  };
};

export const customTip = custom => {
  return {
    type: 'CUSTOM_TIP',
    custom,
  };
};

export const resetCalc = reset => {
  return {
    type: 'RESET',
    reset,
  };
};

export default calculationReducer;
