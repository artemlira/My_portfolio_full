import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Skill } from '../../Page_Home/Skills/Skills';
import { selectIsAuth } from '../../../redux/slices/auth';
import styles from './Skills.module.scss';

function Skills() {
  const { t, i18n } = useTranslation();
  const { skills } = useSelector((state) => state.skills);
  const isAuth = useSelector(selectIsAuth);

  return (
    <section className={styles.skills}>
      <div className="container">
        <div className="wrapperTitle">
          <h2 className={styles.title}>
            <span>#</span>
            {t('skills_title')}
          </h2>
          {isAuth && <AddCircleIcon color="secondary" fontSize="large" />}
        </div>
        <div className={styles.container}>
          {skills.items.map((item) => (
            <Skill
              // eslint-disable-next-line no-underscore-dangle
              key={item._id}
              title={i18n.language === 'en' ? item.categoryEN : item.categoryUA}
              text={item.value}
              isAuth={isAuth}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
