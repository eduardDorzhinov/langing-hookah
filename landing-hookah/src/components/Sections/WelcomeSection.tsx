import Button from '@/components/Buttons/Button';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineArrowDown } from 'react-icons/ai';
import useTranslation from 'next-translate/useTranslation';
import { DIR_COMMON } from '../../../constants';
import Image from 'next/image';

import background from '../../../public/img/bck-main.jpg';

function WelcomeSection() {
  const { t } = useTranslation(DIR_COMMON);
  return (
    <section className="welcome" id="main">
      <Image
        src={background}
        alt="background"
        className="welcome--background"
        fill
        priority
      />
      <div className="container">
        <h2 className="welcome--title welcome--title-red title_h1">
          {t('header-main')}
        </h2>
        <h1 className="welcome--title title_h2">
          {t('sub-header-main').toUpperCase()}
        </h1>
        <div className="welcome--buttons">
          <Button
            text={t('btn-call')}
            link="tel:+381629377670"
            icon={<BiPhoneCall />}
            large
          />
          <Button
            text={t('link-contact')}
            link="#contacts"
            type="secondary"
            icon={<AiOutlineArrowDown />}
          />
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;
