import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import styles from './Media.module.scss';

function Media() {
  const { t } = useTranslation();
  const { medias } = useSelector((state) => state.medias);

  return (
    <section className={styles.media}>
      <div className="container">
        <h2 className={styles.title}>
          <span>#</span>
          {t('media_title')}
        </h2>
        <div className={styles.container}>
          {medias.items.map((item) => (
            // eslint-disable-next-line no-underscore-dangle
            <a key={item._id} href={item.link} target="_blank" rel="noreferrer">
              {item.icon}
              <p>{item.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Media;
