import useTranslation from 'next-translate/useTranslation';
import classNames from 'classnames';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import {
  CONTACTS_FACEBOOK,
  CONTACTS_INST,
  CONTACTS_NUMBER,
  CONTACTS_TELEGRAM,
  CONTACTS_WHATSAPP,
  DIR_COMMON,
  LINK_MAIN,
} from '../../../constants';

import styles from './Footer.module.scss';

function Footer() {
  const { t } = useTranslation(DIR_COMMON);
  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <div className={styles.content}>
          <p className={classNames('title_h1', styles.logo)}>{t('header-main')}</p>

          <div className={styles.links}>
            <Link
              className={classNames('title_h2', styles.phone)}
              href={CONTACTS_NUMBER}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('contacts-phone-description')}
            >
              {t('contacts-phone-description')}
            </Link>

            <p className={styles.socials}>
              <Link
                href={CONTACTS_INST}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={CONTACTS_INST}
              >
                <BsInstagram size="2.5rem" />
              </Link>

              <Link
                href={CONTACTS_TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={CONTACTS_TELEGRAM}
              >
                <BsTelegram size="2.5rem" />
              </Link>

              <Link
                href={CONTACTS_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={CONTACTS_WHATSAPP}
              >
                <BsWhatsapp size="2.5rem" />
              </Link>

              <Link
                href={CONTACTS_FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={CONTACTS_FACEBOOK}
              >
                <BsFacebook size="2.5rem" />
              </Link>
            </p>
          </div>

          <p className={classNames(styles.text, 'text_p1')}>
            <span dangerouslySetInnerHTML={{ __html: t('footer-text') }} />
            <a href={LINK_MAIN} aria-label={t('footer-link')}>
              {t('footer-link')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
