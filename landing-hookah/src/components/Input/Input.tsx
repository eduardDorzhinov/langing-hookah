import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

function Input(props: {
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
  placeholderToLabel?: boolean;
  name?: string;
  label?: string;
  border?: boolean;
  required?: boolean;
  textArea?: boolean;
}) {
  const {
    value,
    onChange,
    className,
    disabled,
    error,
    placeholder,
    name,
    label,
    border = true,
    required,
    textArea,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(
        styles.input,
        !!className && className,
        disabled && styles.disabled,
        error && styles.error,
        label && styles.withLabel
      )}
    >
      {textArea ? (
        <textarea
          id={name ? name : 'inputCustom'}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          {...otherProps}
        />
      ) : (
        <input
          id={name ? name : 'inputCustom'}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          {...otherProps}
        />
      )}

      {label && (
        <label htmlFor={name ? name : 'inputCustom'} className={required ? styles.required : ''}>
          {label}
        </label>
      )}
    </div>
  );
}

export default Input;
