import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { fetchFacts } from '../../../redux/slices/facts';
import styles from './Facts.module.scss';

function Facts() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { facts } = useSelector((state) => state.facts);
  const factsData = facts.items[0];
  useEffect(() => {
    dispatch(fetchFacts());
  }, [dispatch]);
  return (
    <section className={styles.facts}>
      <div className="container">
        <h2 className={styles.title}>
          <span>#</span>
          {t('facts_title')}
        </h2>
        <div className={styles.container}>
          {i18n.language === 'en' && factsData?.valueEN.map((fact) => <p key={fact}>{fact}</p>)}
          {i18n.language === 'ua' && factsData?.valueUA.map((fact) => <p key={fact}>{fact}</p>)}
        </div>
      </div>
    </section>
  );
}

export default Facts;
