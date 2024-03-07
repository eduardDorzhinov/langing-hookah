import { ReactNode } from 'react';
import classNames from 'classnames';

import style from './Button.module.scss';

function Button({
  text,
  link,
  classes,
  type,
  large,
  icon,
  onClick,
  disabled,
}: {
  text: string;
  link?: string;
  classes?: string;
  type?: 'primary' | 'secondary';
  large?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <>
      {!!link && (
        <a
          className={classNames(
            style.button,
            classes && classes,
            type === 'primary' && style.primary,
            type === 'secondary' && style.secondary,
            large && style.large,
            disabled && style.disabled
          )}
          href={link}
          aria-label={text}
        >
          {icon && icon}
          {text}
        </a>
      )}
      {!!onClick && (
        <button
          className={classNames(
            style.button,
            classes && classes,
            type === 'primary' && style.primary,
            type === 'secondary' && style.secondary,
            large && style.large,
            disabled && style.disabled
          )}
          onClick={onClick}
        >
          {icon && icon}
          {text}
        </button>
      )}
    </>
  );
}

export default Button;
