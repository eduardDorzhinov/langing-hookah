import useTranslation from 'next-translate/useTranslation';
import { DIR_COMMON } from '../../../constants';
import classNames from 'classnames';
import { FaPlus, FaMinus } from "react-icons/fa";
import cls from './PriceItem.module.scss'

export const PriceItem = ({
  price,
  name,
  withUp,
  increment,
  decrement,
  disabledInc,
  disabledDec,
  noButtons,
}:{
  price: string | number;
  name: string;
  withUp?: boolean;
  increment?: () => void;
  decrement?: () => void;
  disabledInc?: boolean;
  disabledDec?: boolean;
  noButtons?: boolean;
}) => {
  const { t } = useTranslation(DIR_COMMON);

  return (
    <div className={cls.card}>
      <p className={cls.priceWrap}>
        {withUp &&
          <span className={classNames(cls.description, 'text_p1')}>
            {`${t('price-from')}  `}
          </span>
        }
        <span className={classNames(cls.number, 'title_h1')}>{price}</span>
        <span className={classNames(cls.description, 'text_p1')}>{name}</span>
      </p>
      <div className={cls.buttons}>
        {!noButtons && (
          <>
            <button
              className={cls.button}
              onClick={decrement}
              disabled={disabledDec}
            >
              <FaMinus/>
            </button>
            <button
              className={cls.button}
              onClick={increment}
              disabled={disabledInc}
            >
              <FaPlus/>
            </button>
          </>
        )}
      </div>
    </div>
  )
}
