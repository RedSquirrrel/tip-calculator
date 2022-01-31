import { useSelector } from 'react-redux';
import './Notification.scss';

const Notification = () => {
  const notification = useSelector(state => state.notification.text);
  if (!notification) return null;

  return (
    <div>
      <p className='p'>{notification}</p>
    </div>
  );
};

export default Notification;
