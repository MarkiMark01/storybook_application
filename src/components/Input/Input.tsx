// src/components/Input/Input.tsx
import React, { useState } from 'react';
import styles from './Input.module.scss';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
}

export const Input: React.FC<InputProps> = ({ type = 'text', clearable = false, value: propValue, onChange, ...props }) => {
  const [value, setValue] = useState(propValue || '');
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const clearInput = () => setValue('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.(e);
  };

  const isPassword = type === 'password';

  return (
    <div className={styles.inputWrapper}>
      <input
        {...props}
        type={isPassword ? (showPassword ? 'text' : 'password') : type}
        value={value}
        onChange={handleChange}
        className={styles.input}
      />
      {(clearable && value) || isPassword ? (
        <div className={styles.buttonsWrapper}>
          {isPassword && (
            <button
              type="button"
              onClick={togglePassword}
              className={styles.button}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          )}
          {clearable && value && (
            <button
              type="button"
              onClick={clearInput}
              className={styles.button}
              aria-label="Clear input"
            >
              ❌
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
};



