import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import styles from './ProtectedRoute.module.css';

const ProtectedRoute = ({ children }) => {
  const { tokens } = useContext(AuthContext);

  if (!tokens?.access) {
    return (
      <div className={styles.redirectOverlay}>
        <div className={styles.redirectContent}>
          <div className={styles.spinner}></div>
          <p>Redirigiendo al login...</p>
        </div>
        <Navigate to="/" replace />
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;