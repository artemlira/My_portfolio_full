import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './RegisterPage.module.scss';

function RegisterPage({ props }) {
  const { t } = useTranslation();
  return (
    <section className={styles.registerPage}>
      <div className="container">
        <div className={styles.container}>
          {t('RegisterPage Component')}
          RegisterPage Component
          {' '}
          {props}
        </div>
      </div>
    </section>
  );
}

RegisterPage.propTypes = {
  props: PropTypes.string.isRequired,
};

export default RegisterPage;
