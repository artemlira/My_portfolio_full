import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styles from './Contact.module.scss';

function Contact() {
  const { t } = useTranslation();
  const { contacts } = useSelector((state) => state.contacts);
  const phone = contacts.items[0];
  const email = contacts.items[1];
  const telegram = contacts.items[2];

  return (
    <section className={styles.contact}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.text}>{t('contacts_text')}</p>
            <div className={styles.phone}>
              {phone?.icon}
              <a href={`tel:${phone?.value}`}>+380(97)914-94-44</a>
            </div>
            <div className={styles.telegram}>
              {telegram?.icon}
              <a href={telegram?.value} target="_blank" rel="noreferrer">
                @Artem_Lira
              </a>
            </div>
            <div className={styles.email}>
              {email?.icon}
              <a href={`mailto:${email?.value}`}>{email?.value}</a>
            </div>
          </div>
          <form name="contact" method="POST" action="/contact" className={styles.form}>
            <input type="hidden" name="form-name" value="contact" />
            <h4 className={styles.formTitle}>{t('contacts_formTitle')}</h4>
            <div className={styles.label}>
              <input
                type="text"
                name="name"
                className={styles.inputName}
                placeholder={t('contacts_inputName')}
                required
              />
              <input
                type="email"
                name="email"
                className={styles.inputEmail}
                placeholder={t('contacts_inputEmail')}
                required
              />
            </div>
            <input
              type="text"
              name="title"
              className={styles.inputTitle}
              placeholder={t('contacts_inputTitle')}
              required
            />
            <textarea
              name="message"
              className={styles.message}
              placeholder={t('contacts_message')}
              required
            />
            <button type="submit" className={styles.button}>
              {t('contacts_button')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
