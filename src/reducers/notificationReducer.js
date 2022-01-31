const initialState = {
  text: '',
  style: '',
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return { ...state, text: action.text, style: action.style };

    case 'HIDE_NOTIFICATION':
      return { ...state, text: action.text, style: action.style };
    default:
      return state;
  }
};

export const showNotification = (text, style) => {
  return {
    type: 'SHOW_NOTIFICATION',
    text,
    style,
  };
};

export const hideNotification = (text, style) => {
  return {
    type: 'HIDE_NOTIFICATION',
    text,
    style,
  };
};

export default notificationReducer;
