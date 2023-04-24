import React from 'react';
// import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './LoginPage.module.scss';

function LoginPage() {
  const { t } = useTranslation();
  return (
    <section className={styles.loginPage}>
      <div className="container">
        <div className={styles.container}>
          <form action="/">
            <input type="text" />
            <input type="text" />
            <button type="button">Ввійти</button>
          </form>
          {t('LoginPage Component')}
          LoginPage Component
        </div>
      </div>
    </section>
  );
}

// LoginPage.propTypes = {
//   props: PropTypes.string.isRequired,
// };

export default LoginPage;
