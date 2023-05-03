import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './AddContact.module.scss';

function AddContact({ props }) {
  const { t } = useTranslation();
  return (
    <section className={styles.addContact}>
      <div className="container">
        <div className={styles.container}>
          {t('AddContact Component')}
          AddContact Component
          {' '}
          {props}
        </div>
      </div>
    </section>
  );
}

AddContact.propTypes = {
  props: PropTypes.string.isRequired,
};

export default AddContact;
