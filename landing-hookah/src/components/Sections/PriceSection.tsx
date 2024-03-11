import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { CONTACTS_NUMBER, DIR_COMMON, LINK_CONTACTS } from '../../../constants';
import { ImPlus } from 'react-icons/im';
import { FaEquals } from 'react-icons/fa';
import Button from '@/components/Buttons/Button';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineArrowDown } from 'react-icons/ai';
import FormModal from '@/components/FormModal/FormModal';
import { MobilePriceItem, PriceItem } from '@/components/PriceItem/PriceItem';

const SH = 'shisha'
const HO = 'hours'
const MA = 'master'

type TPrices = typeof SH | typeof HO | typeof MA

const PRICES = {
  [SH]: {
    translation: 'price-shisha',
    translation2: 'price-shisha-alt',
    translation3: 'price-shisha-alt-2',
    from: 10,
    to: 98,
  },
  [HO]: {
    translation: 'price-hours',
    translation2: 'price-hours-alt',
    translation3: 'price-hours-alt',
    from: 4,
    to: 12,
  },
  [MA]: {
    translation: 'price-master',
    translation2: 'price-master-alt',
    translation3: 'price-master-alt-2',
    from: 1,
    to: 5,
  },
}

const SH_FIRST_TYPE = [21,31,41,51,61,71,81,91]
const SH_SECOND_TYPE = [22,23,24,32,33,34,42,43,44,52,53,54,62,63,64,72,73,74,82,83,84,92,93,94]
const HO_FIRST_TYPE = [2,3,4]
const MA_FIRST_TYPE = [1]
const MA_SECOND_TYPE = [2,3,4]


function getTranslateSH (value: number | string) {
  if (SH_FIRST_TYPE.includes(Number(value))) {
    return PRICES[SH].translation
  } else if (SH_SECOND_TYPE.includes(Number(value))) {
    return PRICES[SH].translation2
  } else {
    return PRICES[SH].translation3
  }
}

function getTranslateHO (value: number | string) {
  if (HO_FIRST_TYPE.includes(Number(value))) {
    return PRICES[HO].translation
  } else {
    return PRICES[HO].translation2
  }
}

function getTranslateMA (value: number | string) {
  if (MA_FIRST_TYPE.includes(Number(value))) {
    return PRICES[MA].translation
  } else if (MA_SECOND_TYPE.includes(Number(value))) {
    return PRICES[MA].translation2
  } else {
    return PRICES[MA].translation3
  }
}

function getTranslateDecor (value: number | string, key: TPrices) {
  if (key === SH) {
    return getTranslateSH(value)
  } else if (key === HO) {
    return getTranslateHO(value)
  } else {
    return getTranslateMA(value)
  }
}

function PriceSection() {
  const { t } = useTranslation(DIR_COMMON);
  const [showModal, setShowModal] = useState(false);
  const [price, serPrice] = useState({
    [SH]: PRICES[SH].from, [HO]: PRICES[HO].from, [MA]: PRICES[MA].from,
  })

  const totalPrice = price[SH] * 4 + price[HO] * 50 + price[MA] * 100 + 200

  function btnShowModal() {
    setShowModal(true);
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    setShowModal(false);
    document.body.style.overflow = 'unset';
  }

  function increment (key: TPrices) {
    serPrice(prev => {
      return {...prev, [key]: prev[key] + 1}
    })
  }

  function decrement (key: TPrices) {
    serPrice(prev => {
      return {...prev, [key]: prev[key] - 1}
    })
  }

  return (
    <section className="price" id="price">
      <div className="container">
        <h2 className="price--title section_title title_h2">{t('price-title').toUpperCase()}</h2>

        <div className="price--card price_card">
          <h3 className="price_card--title title_h4">{t('price-people-title')}</h3>

          <div className="price_card--points">
            <PriceItem
              price={price[SH]}
              name={t(getTranslateDecor(price[SH], SH))}
              increment={() => increment(SH)}
              decrement={() => decrement(SH)}
              disabledInc={price[SH] >= PRICES[SH].to}
              disabledDec={price[SH] <= PRICES[SH].from}
            />

            <ImPlus />

            <PriceItem
              price={price[HO]}
              name={t(getTranslateDecor(price[HO], HO))}
              increment={() => increment(HO)}
              decrement={() => decrement(HO)}
              disabledInc={price[HO] >= PRICES[HO].to}
              disabledDec={price[HO] <= PRICES[HO].from}
            />

            <ImPlus />

            <PriceItem
              price={price[MA]}
              name={t(getTranslateDecor(price[MA], MA))}
              increment={() => increment(MA)}
              decrement={() => decrement(MA)}
              disabledInc={price[MA] >= PRICES[MA].to}
              disabledDec={price[MA] <= PRICES[MA].from}
            />

            <FaEquals />

            <PriceItem
              price={totalPrice}
              name={t('price-price-currency')}
              withUp
              noButtons
            />
          </div>

          <div className="price_card--points-mobile">
            <MobilePriceItem
              price={price[SH]}
              name={t(getTranslateDecor(price[SH], SH))}
              increment={() => increment(SH)}
              decrement={() => decrement(SH)}
              disabledInc={price[SH] >= PRICES[SH].to}
              disabledDec={price[SH] <= PRICES[SH].from}
            />

            <MobilePriceItem
              price={price[HO]}
              name={t(getTranslateDecor(price[HO], HO))}
              increment={() => increment(HO)}
              decrement={() => decrement(HO)}
              disabledInc={price[HO] >= PRICES[HO].to}
              disabledDec={price[HO] <= PRICES[HO].from}
            />

            <MobilePriceItem
              price={price[MA]}
              name={t(getTranslateDecor(price[MA], MA))}
              increment={() => increment(MA)}
              decrement={() => decrement(MA)}
              disabledInc={price[MA] >= PRICES[MA].to}
              disabledDec={price[MA] <= PRICES[MA].from}
              shortPriceDescription
            />

            <MobilePriceItem
              price={totalPrice}
              name={t('price-price-currency')}
              withUp
              noButtons
            />
          </div>

          <p className="text_p1 price_card--text">{t('price-people-text')}</p>

          <div className="price_card--buttons price_card--buttons-mobile">
            <Button text={t('btn-call')} link={CONTACTS_NUMBER} icon={<BiPhoneCall />} />
            <Button
              text={t('link-contact')}
              link={LINK_CONTACTS}
              icon={<AiOutlineArrowDown />}
              type="secondary"
            />
          </div>
        </div>

        <div className="price--card price_card">
          <h3 className="price_card--title title_h4">{t('price-company-title')}</h3>
          <p
            className="text_p1 price_card--text"
            dangerouslySetInnerHTML={{ __html: t('price-company-text') }}
          />
          <Button text={t('btn-form')} onClick={btnShowModal} type="secondary" />
        </div>
      </div>

      <FormModal show={showModal} closeModal={closeModal} />
    </section>
  );
}

export default PriceSection;
