import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { useCallback, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import classNames from 'classnames';
import i18nConfig from '../../../i18n.js';
import { COOKIE_LANG, LANG_EN } from '../../../constants';
import styles from './LanguageSwitcher.module.scss';
import { MdLanguage } from 'react-icons/md';

const { locales } = i18nConfig;

const LOCALES_TEXT: { [key: string]: string } = {
  en: 'English',
  ru: 'Русский',
};

export const LanguageSwitcher = ({ mini }: { mini?: boolean }) => {
  const router = useRouter();
  const { lang } = useTranslation();
  const [safari, setSafari] = useState(false);

  useEffect(() => {
    let userAgentString = window !== undefined ? window.navigator.userAgent : '';
    setSafari(userAgentString.indexOf('Safari') > -1);
  }, []);

  const handleChange = useCallback(
    // @ts-ignore
    async (event) => {
      const selectedLang = event.currentTarget.dataset.lang || LANG_EN;
      const { pathname, query } = router;
      await router.push({ pathname, query }, pathname, {
        locale: selectedLang,
      });
      Cookies.set(COOKIE_LANG, selectedLang, {
        expires: 100,
      });
    },
    [router]
  );

  const handleChangeSelect = useCallback(
    async (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedLang = event.target.value || LANG_EN;
      const { pathname, query } = router;
      await router.push({ pathname, query }, pathname, {
        locale: selectedLang,
      });
      Cookies.set(COOKIE_LANG, selectedLang, {
        expires: 100,
      });
    },
    [router]
  );

  return (
    <>
      {!mini ? (
        <ul className={classNames(styles.select)}>
          {locales.map((localLang) => {
            const currentLang = lang === localLang;
            return (
              <li
                className={classNames(styles.lang, currentLang && styles.activeLang)}
                key={localLang}
                data-lang={localLang}
                onClick={handleChange}
              >
                {LOCALES_TEXT[localLang]}
              </li>
            );
          })}
        </ul>
      ) : (
        <div className={classNames(styles.mini, safari && styles.safari)}>
          <MdLanguage />
          <select onChange={handleChangeSelect} value={lang}>
            {locales.map((localLang) => {
              return (
                <option key={localLang} value={localLang}>
                  {LOCALES_TEXT[localLang]}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </>
  );
};
