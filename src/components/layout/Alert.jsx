import { useContext } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import AlertContext from '../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <FiAlertCircle style={{ marginRight: '10px', fontSize: '1.2em' }} />
        {alert.message}
      </div>
    )
  );
};

export default Alert;
