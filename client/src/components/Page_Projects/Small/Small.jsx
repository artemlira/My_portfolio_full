import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Card } from '../../Page_Home/Projects/Projects';
import { fetchRemoveSmallProject, fetchSmallProjects } from '../../../redux/slices/smallProjects';
import { selectIsAuth } from '../../../redux/slices/auth';
import styles from './Small.module.scss';

function Small() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { smallProjects } = useSelector((state) => state.smallProjects);
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchSmallProjects());
  }, [dispatch]);

  const onClickRemove = (data) => {
    const { id } = data;
    dispatch(fetchRemoveSmallProject(id));
  };

  const onClickChange = () => {
    dispatch();
  };

  const projects = smallProjects.items;

  return (
    <section className={styles.small}>
      <div className="container">
        <div className="wrapperTitle">
          <h2 className={styles.title}>
            <span>#</span>
            {t('small_title')}
          </h2>
          {isAuth && <AddCircleIcon color="secondary" fontSize="large" />}
        </div>
        <div className={styles.container}>
          {projects?.map((project) => (
            <Card
              // eslint-disable-next-line no-underscore-dangle
              key={project._id}
              img={project.img}
              imgWebp={project.imgWebp}
              skills={project.skills}
              title={project.title}
              text={
                i18n.language === 'en' ? project.shortDescriptionEN : project.shortDescriptionUA
              }
              git={project.git}
              deploy={project.deploy}
              isAuth={isAuth}
              onClickChange={onClickChange}
              onClickRemove={onClickRemove}
              // eslint-disable-next-line no-underscore-dangle
              id={project._id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Small;
