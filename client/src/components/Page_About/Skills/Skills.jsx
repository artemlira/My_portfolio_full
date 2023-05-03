import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Skill } from '../../Page_Home/Skills/Skills';
import styles from './Skills.module.scss';

function Skills() {
  const { t, i18n } = useTranslation();
  const { skills } = useSelector((state) => state.skills);
  return (
    <section className={styles.skills}>
      <div className="container">
        <h2 className={styles.title}>
          <span>#</span>
          {t('skills_title')}
        </h2>
        <div className={styles.container}>
          {skills.items.map((item) => (
            <Skill
              key={item.id}
              title={i18n.language === 'en' ? item.categoryEN : item.categoryUA}
              text={item.value}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
