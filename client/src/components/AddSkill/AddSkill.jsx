import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './AddSkill.module.scss';

function AddSkill({ props }) {
  const { t } = useTranslation();
  return (
    <section className={styles.addSkill}>
      <div className="container">
        <div className={styles.container}>
          {t('AddSkill Component')}
          AddSkill Component
          {' '}
          {props}
        </div>
      </div>
    </section>
  );
}

AddSkill.propTypes = {
  props: PropTypes.string.isRequired,
};

export default AddSkill;
