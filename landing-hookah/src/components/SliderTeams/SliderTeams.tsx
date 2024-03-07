import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import classNames from 'classnames';
import Image from 'next/image';
import { DIR_COMMON } from '../../../constants';

import styles from './SliderTeams.module.scss';

import master1 from '../../../public/img/master1.jpg';
import master2 from '../../../public/img/master2.jpg';
import master3 from '../../../public/img/master3.jpg';
import { Carousel } from 'react-responsive-carousel';

const MASTERS = [master1, master2, master3];

function SliderTeams() {
  const { t } = useTranslation(DIR_COMMON);
  const [activeIndex, setActiveIndex] = useState(2);

  // @ts-ignore
  function changeIndex(e) {
    setActiveIndex(Number(e.target?.dataset?.index) || 2);
  }

  return (
    <>
      <div className={styles.wrap}>
        {MASTERS.map((photo, index) => (
          <div
            key={index}
            className={classNames(styles.photo, activeIndex === index + 1 && styles.photoActive)}
            onClick={changeIndex}
          >
            <Image
              src={photo}
              alt="master"
              fill
              sizes="(max-width: 1400px) 23vw"
              data-index={index + 1}
            />
          </div>
        ))}
      </div>
      <div className={styles.mobileWrap}>
        <Carousel
          className={styles.carouselRoot}
          emulateTouch
          infiniteLoop
          showStatus={false}
          onChange={(index) => setActiveIndex(index + 1)}
          selectedItem={1}
          showThumbs={false}
        >
          {MASTERS.map((photo, index) => (
            <div key={index} className={styles.photoMobile} onClick={changeIndex}>
              <Image src={photo} alt="master" width={250} height={400} data-index={index + 1} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className={styles.textWrap}>
        <h3 className={styles.name}>{t(`team-man-${activeIndex}-name`)}</h3>
        <p className={classNames('text_p1')}>{t(`team-man-${activeIndex}-description`)}</p>
      </div>
    </>
  );
}

export default SliderTeams;
