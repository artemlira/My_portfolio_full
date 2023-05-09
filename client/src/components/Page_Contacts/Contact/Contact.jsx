import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// eslint-disable-next-line import/no-extraneous-dependencies
import { atob } from 'js-base64';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { selectIsAuth } from '../../../redux/slices/auth';
import { fetchContacts, fetchRemoveContact } from '../../../redux/slices/contacts';
import styles from './Contact.module.scss';

function Contact() {
  const { t } = useTranslation();
  const { contacts } = useSelector((state) => state.contacts);
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onClickRemove = (data) => {
    dispatch(fetchRemoveContact(data));
  };

  return (
    <section className={styles.contact}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.content}>
            {isAuth && (
              <Link to="/add-contact">
                <AddCircleIcon color="secondary" fontSize="large" />
              </Link>
            )}
            <p className={styles.text}>{t('contacts_text')}</p>
            {contacts.items.map((item) => (
              <>
                <div
                  className={styles.phone}
                  // eslint-disable-next-line no-underscore-dangle
                  key={item._id}
                >
                  <div
                    className={styles.icon}
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{ __html: atob(item.icon) }}
                  />
                  {`${item?.name} : `}
                  {item.name === 'phone' && <a href={`tel:${item?.value}`}>{item?.value}</a>}
                  {item.name === 'email' && <a href={`mailto:${item?.value}`}>{item?.value}</a>}
                  {item.name !== 'email' && item.name !== 'phone' && (
                    <a href={item?.value}>{item?.value}</a>
                  )}
                </div>
                {isAuth && (
                  <div className="MUI_icons">
                    <Link
                      // eslint-disable-next-line no-underscore-dangle
                      to={`/contacts/${item._id}/edit`}
                    >
                      <ModeIcon color="secondary" fontSize="medium" />
                    </Link>
                    <DeleteForeverIcon
                      // eslint-disable-next-line no-underscore-dangle
                      onClick={() => onClickRemove(item._id)}
                      color="error"
                      fontSize="medium"
                    />
                  </div>
                )}
              </>
            ))}
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
