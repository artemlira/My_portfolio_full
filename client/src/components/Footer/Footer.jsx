import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LogoLira from '../LogoLira';
import { fetchMedias } from '../../redux/slices/medias';
import { fetchContacts } from '../../redux/slices/contacts';
import styles from './Footer.module.scss';

function Footer() {
  const dispatch = useDispatch();
  const { medias } = useSelector((state) => state.medias);
  const { contacts } = useSelector((state) => state.contacts);

  const email = contacts.items[1];

  useEffect(() => {
    dispatch(fetchMedias());
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.wrapperContacts}>
              <div className={styles.contacts}>
                <LogoLira />
                <a href={`mailto:${email?.value}`} className={styles.mail}>
                  {email?.value}
                </a>
              </div>
              <p className={styles.text}>Front-end developer</p>
            </div>
            <div className={styles.media}>
              <h3 className={styles.title}>Media</h3>
              <div className={styles.icons}>
                {medias.items?.map((item) => (
                  // eslint-disable-next-line no-underscore-dangle
                  <a key={item._id} href={item.link} target="_blank" rel="noreferrer">
                    <img src={`http://localhost:4444${item.icon}`} alt={item.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.authorship}>
            <p>© Copyright 2023. Made by Lira Artem</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
