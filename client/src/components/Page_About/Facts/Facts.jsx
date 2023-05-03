import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import AddCircleIcon from '@mui/icons-material/AddCircle';
// eslint-disable-next-line import/no-extraneous-dependencies
import ModeIcon from '@mui/icons-material/Mode';
// eslint-disable-next-line import/no-extraneous-dependencies
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { fetchFacts } from '../../../redux/slices/facts';
import { selectIsAuth } from '../../../redux/slices/auth';
import styles from './Facts.module.scss';

function Facts() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { facts } = useSelector((state) => state.facts);
  const factsData = facts.items[0];
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchFacts());
  }, [dispatch]);
  return (
    <section className={styles.facts}>
      <div className="container">
        <div className="wrapperTitle">
          <h2 className={styles.title}>
            <span>#</span>
            {t('facts_title')}
          </h2>
          {isAuth && <AddCircleIcon color="secondary" fontSize="large" />}
        </div>
        <div className={styles.container}>
          {isAuth && (
            <div className="MUI_icons">
              <ModeIcon color="secondary" fontSize="medium" />
              <DeleteForeverIcon color="error" fontSize="medium" />
            </div>
          )}
          {i18n.language === 'en' && factsData?.valueEN.map((fact) => <p key={fact}>{fact}</p>)}
          {i18n.language === 'ua' && factsData?.valueUA.map((fact) => <p key={fact}>{fact}</p>)}
        </div>
      </div>
    </section>
  );
}

export default Facts;
