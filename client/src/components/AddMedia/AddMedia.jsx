import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './AddMedia.module.scss';

function AddMedia({ props }) {
  const { t } = useTranslation();
  return (
    <section className={styles.addMedia}>
      <div className="container">
        <div className={styles.container}>
          {t('AddMedia Component')}
          AddMedia Component
          {' '}
          {props}
        </div>
      </div>
    </section>
  );
}

AddMedia.propTypes = {
  props: PropTypes.string.isRequired,
};

export default AddMedia;
