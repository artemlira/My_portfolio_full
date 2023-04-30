import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.scss';

function LoginPage() {
  return (
    <section className={styles.loginPage}>
      <div className="container">
        <div className={styles.container}>
          <form className={styles.form} action="/" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="name" className={styles.name}>
              Ім&apos;я
              <input type="text" id="name" placeholder="Ім'я" />
            </label>
            <label htmlFor="password" className={styles.password}>
              Пароль
              <input type="password" id="password" placeholder="пароль" />
            </label>
            <button type="submit" className={styles.btn}>
              Ввійти
            </button>
            <Link to="/auth/register" className={styles.btn}>
              Реєстрація
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
