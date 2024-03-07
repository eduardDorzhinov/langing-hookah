import { useState } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import logo from '../../../public/img/logo.png';
import classNames from 'classnames';
import { LanguageSwitcher } from '@/components/LanguageSwitcher/LanguageSwitcher';
import { IoMenu } from 'react-icons/io5';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { BiPhoneCall } from 'react-icons/bi';
import {
  CONTACTS_FACEBOOK,
  CONTACTS_INST,
  CONTACTS_NUMBER,
  CONTACTS_TELEGRAM,
  CONTACTS_WHATSAPP,
  DIR_COMMON,
  LINK_CONTACTS,
  LINK_EMPTY,
  LINK_MAIN,
  LINK_PRICE,
  LINK_PRODUCT,
} from '../../../constants';

import styles from './Header.module.scss';

const LINKS = [
  {
    href: LINK_MAIN,
    description: 'link-home',
  },
  {
    href: LINK_PRODUCT,
    description: 'link-product',
  },
  {
    href: LINK_PRICE,
    description: 'link-price',
  },
  {
    href: LINK_CONTACTS,
    description: 'link-contact',
  },
]

const CONTACTS_LINKS = [
  {
    id: 'inst',
    href: CONTACTS_INST,
    icon: <BsInstagram/>,
  },
  {
    id: 'tg',
    href: CONTACTS_TELEGRAM,
    icon: <BsTelegram/>,
  },
  {
    id: 'wa',
    href: CONTACTS_WHATSAPP,
    icon: <BsWhatsapp/>,
  },
  {
    id: 'fb',
    href: CONTACTS_FACEBOOK,
    icon: <BsFacebook/>,
  },
]

function Header() {
  const { t } = useTranslation(DIR_COMMON);
  const [show, setShow] = useState(false);

  function hideMenu() {
    setShow(false);
  }

  return (
    <header className={styles.header}>
      <div className={classNames(styles.headerContainer, 'container')}>
        <Link className={styles.logo} href={LINK_EMPTY} aria-label={t('link-home')}>
          <Image src={logo} alt="logo" fill sizes="(max-width: 1200px) 180px" priority />
        </Link>

        <div className={styles.navWrap}>
          <nav className={styles.navBar}>
            {LINKS.map(({href, description}) => (
              <Link
                key={description}
                href={href}
                aria-label={t(description)}
              >
                {t(description)}
              </Link>
            ))}
          </nav>

          <LanguageSwitcher mini />
        </div>

        <div className={styles.mobileWrap}>
          <IoMenu className={styles.btnMenu} onClick={() => setShow((s) => !s)} />

          <div
            className={classNames(
              styles.mobileFull,
              show ? styles.mobileFullVisible : styles.mobileFullHide
            )}
            onClick={hideMenu}
          >
            <div
              className={classNames(
                styles.mobileNavWrap,
                show ? styles.mobileNavWrapVisible : styles.mobileNavWrapHide
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <nav className={classNames(styles.mobileNavBar, styles.navBar)} onClick={hideMenu}>
                <AiOutlineClose />

                {LINKS.map(({href, description}) => (
                  <Link
                    key={description}
                    className="title_h2"
                    href={href}
                    aria-label={t(description)}
                  >
                    {t(description)}
                  </Link>
                ))}
              </nav>
              <div className={styles.footer}>
                <div className={styles.links}>
                  <Link
                    className={classNames('title_h4', styles.phone)}
                    href={CONTACTS_NUMBER}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t('contacts-phone-description')}
                  >
                    <BiPhoneCall />
                    {t('contacts-phone-description')}
                  </Link>

                  <p className={styles.socials}>
                    {CONTACTS_LINKS.map(({id, href, icon}) => (
                      <Link
                        key={id}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={href}
                      >
                        {icon}
                      </Link>
                    ))}
                  </p>
                </div>

                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
