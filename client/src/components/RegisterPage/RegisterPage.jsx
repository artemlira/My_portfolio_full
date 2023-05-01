import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/slices/auth';
import styles from '../LoginPage/LoginPage.module.scss';

function RegisterPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    try {
      dispatch(registerUser({ userName, password, email }));
      setUserName('');
      setPassword('');
      setEmail('');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <section className={styles.registerPage}>
      <div className="container">
        <div className={styles.container}>
          <form className={styles.form} action="/" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email" className={styles.email}>
              email
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="email"
              />
            </label>
            <label htmlFor="name" className={styles.name}>
              Ім&apos;я
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                id="name"
                placeholder="Ім'я"
              />
            </label>
            <label htmlFor="password" className={styles.password}>
              Пароль
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="пароль"
              />
            </label>
            <button onClick={handleSubmit} type="submit" className={styles.btn}>
              Реєстрація
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
