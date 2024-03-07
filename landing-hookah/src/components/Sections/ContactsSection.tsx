import useTranslation from 'next-translate/useTranslation';
import {
  CONTACTS_FACEBOOK,
  CONTACTS_INST,
  CONTACTS_MAPS,
  CONTACTS_NUMBER,
  CONTACTS_TELEGRAM,
  CONTACTS_WHATSAPP,
  DIR_COMMON,
} from '../../../constants';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsTelegram, BsWhatsapp } from 'react-icons/bs';

function ContactSection() {
  const { t } = useTranslation(DIR_COMMON);
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <h2 className="contacts--title section_title title_h2">{t('contacts-title').toUpperCase()}</h2>

        <div className="contacts--cards">
          <div className="contacts_card">
            <h3 className="contacts_card--title title_h4">{t('contacts-address-title')}</h3>

            <Link
              className="contacts_card--link title_h2"
              href={CONTACTS_MAPS}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('contacts-address-description')}
            >
              {t('contacts-address-description')}
            </Link>
          </div>

          <div className="contacts_card">
            <h3 className="contacts_card--title title_h4">{t('contacts-phone-title')}</h3>

            <Link
              className="contacts_card--link contacts_card--link-number title_h2"
              href={CONTACTS_NUMBER}
              aria-label={t('contacts-phone-description')}
            >
              {t('contacts-phone-description')}
            </Link>
          </div>

          <div className="contacts_card">
            <h3 className="contacts_card--title title_h4">{t('contacts-socials-title')}</h3>

            <p className="contacts_card--socials">
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
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
