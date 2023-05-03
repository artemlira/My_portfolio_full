import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './AddSmallProject.module.scss';

function AddSmallProject({ props }) {
  const { t } = useTranslation();
  return (
    <section className={styles.addSmallProject}>
      <div className="container">
        <div className={styles.container}>
          {t('AddSmallProject Component')}
          AddSmallProject Component
          {' '}
          {props}
        </div>
      </div>
    </section>
  );
}

AddSmallProject.propTypes = {
  props: PropTypes.string.isRequired,
};

export default AddSmallProject;
