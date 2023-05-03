import React from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import AddCircleIcon from '@mui/icons-material/AddCircle';
// eslint-disable-next-line import/no-extraneous-dependencies
import ModeIcon from '@mui/icons-material/Mode';
// eslint-disable-next-line import/no-extraneous-dependencies
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../../../redux/slices/auth';
import styles from './Media.module.scss';

function Media() {
  const { t } = useTranslation();
  const { medias } = useSelector((state) => state.medias);
  const isAuth = useSelector(selectIsAuth);

  return (
    <section className={styles.media}>
      <div className="container">
        <div className="wrapperTitle">
          <h2 className={styles.title}>
            <span>#</span>
            {t('media_title')}
          </h2>
          {isAuth && <AddCircleIcon color="secondary" fontSize="large" />}
        </div>
        <div className={styles.container}>
          {medias.items.map((item) => (
            <>
              <a key={item.link} href={item.link} target="_blank" rel="noreferrer">
                {item.icon}
                <p>{item.name}</p>
              </a>
              {isAuth && (
                <div className="MUI_icons">
                  <ModeIcon color="secondary" fontSize="medium" />
                  <DeleteForeverIcon color="error" fontSize="medium" />
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Media;
