// src/components/Toast/Toast.tsx
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Toast.module.scss';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'info', duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onClose?.(), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return createPortal(
    <div className={`${styles.toast} ${styles[type]} ${visible ? styles.show : ''}`}>
      <span>{message}</span>
      {onClose && (
        <button onClick={onClose} className={styles.closeButton} aria-label="Close toast">
          ✖
        </button>
      )}
    </div>,
    document.body
  );
};


