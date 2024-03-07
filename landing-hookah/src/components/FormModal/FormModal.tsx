import React, { useEffect, useState } from 'react';
import CreateModalComponent from '@/components/CreateModalComponent/CreateModalComponent';
import Input from '@/components/Input/Input';
import Button from '@/components/Buttons/Button';
import { RiMailSendFill } from 'react-icons/ri';
import { MdOutlineDoneOutline } from 'react-icons/md';
import useTranslation from 'next-translate/useTranslation';
import classNames from 'classnames';
import Link from 'next/link';
import { IoCloseCircle } from 'react-icons/io5';
import axios from 'axios';

import styles from './FormModal.module.scss';
import {
  API_FORM_SEND,
  CONTACTS_NUMBER,
  DIR_COMMON,
  INPUT_EMAIL,
  INPUT_MESSAGE,
  INPUT_NAME,
  INPUT_PHONE,
} from '../../../constants';

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  message: '',
};
const INITIAL_FETCH = {
  isFetching: false,
  success: null,
};

function FormModal({ show, closeModal }: { show: boolean; closeModal: () => void }) {
  const { t } = useTranslation(DIR_COMMON);
  const [form, setForm] = useState(INITIAL_FORM);
  const [fetchState, setFetchState] = useState<{
    isFetching: boolean;
    success: null | boolean;
  }>(INITIAL_FETCH);

  useEffect(() => {
    if (fetchState.success === true) {
      setTimeout(() => {
        if (show) {
          onCloseModal();
        }
      }, 5000);
    }
    // eslint-disable-next-line
  }, [fetchState.success, show]);

  const submitDisabled = !form.name || !form.email || !form.phone || fetchState.isFetching;

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const targetName = e.target.id;
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      [targetName]: value,
    }));
  }

  function onCloseModal() {
    setForm(INITIAL_FORM);
    setFetchState(INITIAL_FETCH);
    closeModal();
  }

  async function onSubmit() {
    setFetchState((p) => ({ ...p, isFetching: true }));
    await axios
      .post(API_FORM_SEND, { ...form })
      .then((req) => {
        if (req.status === 201) {
          setFetchState((p) => ({ ...p, success: true }));
        }
      })
      .catch(() => setFetchState((p) => ({ ...p, success: false })))
      .finally(() => setFetchState((p) => ({ ...p, isFetching: false })));
  }

  if (!show) return null;

  return (
    <CreateModalComponent closeModal={onCloseModal}>
      <div className={styles.formWrap}>
        <div className={styles.form}>
          <IoCloseCircle className={styles.close} onClick={onCloseModal} />

          {!fetchState.success && (
            <>
              <div>
                <h3 className={classNames('title_h2', styles.header)}>{t('price-form-title')}</h3>

                <p className={classNames('text_p1', styles.text)}>
                  {t('price-form-text')}
                  {'  '}
                  <Link
                    href={CONTACTS_NUMBER}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t('contacts-phone-description')}
                  >
                    {t('contacts-phone-description')}
                  </Link>
                </p>
              </div>

              <Input
                label={t('price-form-label-name')}
                name={INPUT_NAME}
                value={form.name}
                onChange={onChange}
                className={styles.input}
                required
              />

              <Input
                label={t('price-form-label-phone')}
                name={INPUT_PHONE}
                value={form.phone}
                onChange={onChange}
                className={styles.input}
                required
              />

              <Input
                label={t('price-form-label-email')}
                name={INPUT_EMAIL}
                value={form.email}
                onChange={onChange}
                className={styles.input}
                required
              />

              <Input
                label={t('price-form-label-message')}
                name={INPUT_MESSAGE}
                value={form.message}
                onChange={onChange}
                className={styles.input}
                textArea
              />

              {fetchState.success === false && (
                <p className={classNames('text_p1', styles.text, styles.textError)}>
                  {t('price-form-error-request')}
                </p>
              )}

              <Button
                text={t('price-form-btn-send')}
                type="secondary"
                icon={<RiMailSendFill />}
                disabled={submitDisabled}
                onClick={onSubmit}
              />
            </>
          )}

          {fetchState.success === true && (
            <div className={styles.successWrap}>
              <MdOutlineDoneOutline className={styles.success} />
              <p className={classNames('text_p1', styles.text)}>{t('price-form-success-request')}</p>
            </div>
          )}
        </div>
      </div>
    </CreateModalComponent>
  );
}

export default FormModal;
