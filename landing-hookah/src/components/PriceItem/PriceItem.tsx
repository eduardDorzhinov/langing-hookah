import useTranslation from 'next-translate/useTranslation';
import { DIR_COMMON } from '../../../constants';
import classNames from 'classnames';
import { FaPlus, FaMinus } from "react-icons/fa";
import cl from './PriceItem.module.scss'

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
    <div className={cl.card}>
      <p className={cl.priceWrap}>
        {withUp &&
          <span className={classNames(cl.description, 'text_p1')}>
            {`${t('price-from')}  `}
          </span>
        }
        <span className={classNames(cl.number, 'title_h1')}>{price}</span>
        <span className={classNames(cl.description, 'text_p1')}>{name}</span>
      </p>
      <div className={cl.buttons}>
        {!noButtons && (
          <>
            <button
              className={cl.button}
              onClick={decrement}
              disabled={disabledDec}
            >
              <FaMinus/>
            </button>
            <button
              className={cl.button}
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

export const MobilePriceItem = ({
  price,
  name,
  withUp,
  increment,
  decrement,
  disabledInc,
  disabledDec,
  noButtons,
  shortPriceDescription,
}:{
  price: string | number;
  name: string;
  withUp?: boolean;
  increment?: () => void;
  decrement?: () => void;
  disabledInc?: boolean;
  disabledDec?: boolean;
  noButtons?: boolean;
  shortPriceDescription?: boolean;
}) => {
  const { t } = useTranslation(DIR_COMMON);

  return (
    <div className={classNames(cl.mobileCard, noButtons && cl.descriptionCenter)}>
      {!noButtons && (
        <button
          className={cl.mobileButton}
          onClick={decrement}
          disabled={disabledDec}
        >
          <FaMinus />
        </button>
      )}

      <p className={cl.priceWrap}>
        {withUp &&
          <span className={classNames(cl.description, 'text_p1')}>
            {`${t('price-from')}  `}
          </span>
        }
        <span className={classNames(cl.number, 'title_h1')}>{price}</span>
        <span className={classNames(cl.description, 'text_p1', shortPriceDescription && cl.short)}>{name}</span>
      </p>

      {!noButtons && (
        <button
          className={cl.mobileButton}
          onClick={increment}
          disabled={disabledInc}
        >
          <FaPlus />
        </button>
      )}
    </div>
  )
}
