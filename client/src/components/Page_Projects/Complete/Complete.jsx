import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Card } from '../../Page_Home/Projects/Projects';
import { fetchProjects, fetchRemoveProject } from '../../../redux/slices/projects';
import { selectIsAuth } from '../../../redux/slices/auth';
import styles from './Complete.module.scss';

function Complete() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const onClickRemove = (data) => {
    const { id } = data;
    dispatch(fetchRemoveProject(id));
  };

  const onClickChange = () => {
    dispatch();
  };

  const completeApps = projects.items;
  return (
    <section className={styles.complete}>
      <div className="container">
        <div className="wrapperTitle">
          <h2 className={styles.title}>
            <span>#</span>
            {t('complete_title')}
          </h2>
          {isAuth && (
            <Link to="/add-project">
              <AddCircleIcon color="secondary" fontSize="large" />
            </Link>
          )}
        </div>
        <div className={styles.container}>
          {completeApps?.map((project) => (
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

export default Complete;
