import React from 'react';
import styles from '../LoginPage/LoginPage.module.scss';

function RegisterPage() {
  return (
    <section className={styles.registerPage}>
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
              Реєстрація
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
