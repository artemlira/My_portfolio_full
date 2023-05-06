import React, { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from '../../utils/axios';
import styles from './AddProject.module.scss';

function AddProject() {
  const { id } = useParams();
  const inputFileRef = useRef(null);
  const inputFileWebpRef = useRef(null);
  const [img, setImg] = useState('');
  const [imgWebp, setImgWebp] = useState('');
  const [title, setTitle] = useState(null);
  const [skills, setSkills] = useState(null);
  const [shortDescriptionUA, setShortDescriptionUA] = useState(null);
  const [shortDescriptionEN, setShortDescriptionEN] = useState(null);
  const [fullDescriptionUA, setFullDescriptionUA] = useState(null);
  const [fullDescriptionEN, setFullDescriptionEN] = useState(null);
  const [git, setGit] = useState(null);
  const [deploy, setDeploy] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`/projects/${id}`).then((res) => {
        setTitle(res.data.title);
        setSkills(res.data.skills.join(','));
        setShortDescriptionUA(res.data.shortDescriptionUA);
        setShortDescriptionEN(res.data.shortDescriptionEN);
        setFullDescriptionUA(res.data.fullDescriptionUA);
        setFullDescriptionEN(res.data.fullDescriptionEN);
        setGit(res.data.git);
        setDeploy(res.data.deploy);
        setImg(res.data.img);
        setImgWebp(res.data.imgWebp);
      });
    }
  }, [id]);

  const onSubmit = async () => {
    try {
      const fields = {
        img,
        imgWebp,
        title,
        skills: skills.split(','),
        shortDescriptionUA,
        shortDescriptionEN,
        fullDescriptionUA,
        fullDescriptionEN,
        git,
        deploy,
      };
      if (id) {
        await axios.patch(`/projects/${id}`, fields);
      } else {
        await axios.post('/projects', fields);
      }
      navigate('/projects');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(error);
    }
  };

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const { data } = await axios.post('/upload', formData);
      setImg(data.url);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(error);
      // eslint-disable-next-line no-alert
      alert('Ошибка при загрузке файла');
    }
  };
  const handleChangeFileWebp = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const { data } = await axios.post('/upload', formData);
      setImgWebp(data.url);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(error);
      // eslint-disable-next-line no-alert
      alert('Ошибка при загрузке файла');
    }
  };
  return (
    <section className={styles.addProject}>
      <div className="container">
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.images}>
            <button
              className={styles.addImg}
              onClick={() => inputFileRef.current.click()}
              type="button"
            >
              Загрузить картинку img
            </button>
            <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />

            <button
              className={styles.addImg}
              onClick={() => inputFileWebpRef.current.click()}
              type="button"
            >
              Загрузить картинку webp
            </button>
            <input ref={inputFileWebpRef} type="file" onChange={handleChangeFileWebp} hidden />
          </div>
          <div className={styles.wrapperImages}>
            {img && <img className={styles.mini} src={`http://localhost:4444${img}`} alt={img} />}
            {imgWebp && (
              <img className={styles.mini} src={`http://localhost:4444${imgWebp}`} alt={imgWebp} />
            )}
          </div>
          <div className={styles.wrapperTitle}>
            <label htmlFor="title" className={styles.title}>
              title
              <input
                type="text"
                id="title"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.wrapperSkills}>
            <label htmlFor="skills" className={styles.skills}>
              skills
              <input
                type="text"
                placeholder="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                id="skills"
              />
            </label>
          </div>
          <div className={styles.wrapperShortDescriptionUA}>
            <label htmlFor="shortDescriptionUA" className={styles.shortDescriptionUA}>
              shortDescriptionUA
              <input
                type="text"
                id="shortDescriptionUA"
                placeholder="shortDescriptionUA"
                value={shortDescriptionUA}
                onChange={(e) => setShortDescriptionUA(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.wrapperShortDescriptionEN}>
            <label htmlFor="shortDescriptionEN" className={styles.shortDescriptionEN}>
              shortDescriptionEN
              <input
                type="text"
                placeholder="shortDescriptionEN"
                value={shortDescriptionEN}
                onChange={(e) => setShortDescriptionEN(e.target.value)}
                id="shortDescriptionEN"
              />
            </label>
          </div>
          <div className={styles.wrapperFullDescriptionUA}>
            <label htmlFor="fullDescriptionUA" className={styles.fullDescriptionUA}>
              fullDescriptionUA
              <input
                type="text"
                id="fullDescriptionUA"
                placeholder="fullDescriptionUA"
                value={fullDescriptionUA}
                onChange={(e) => setFullDescriptionUA(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.wrapperFullDescriptionEN}>
            <label htmlFor="fullDescriptionEN" className={styles.fullDescriptionEN}>
              fullDescriptionEN
              <input
                type="text"
                id="fullDescriptionEN"
                placeholder="fullDescriptionEN"
                value={fullDescriptionEN}
                onChange={(e) => setFullDescriptionEN(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.wrapperGit}>
            <label htmlFor="git" className={styles.git}>
              git
              <input
                type="text"
                id="git"
                placeholder="git"
                value={git}
                onChange={(e) => setGit(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.wrapperDeploy}>
            <label htmlFor="deploy" className={styles.deploy}>
              deploy
              <input
                type="text"
                id="deploy"
                placeholder="deploy"
                value={deploy}
                onChange={(e) => setDeploy(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" className={styles.btn} onClick={onSubmit}>
            {!id ? 'Добавить' : 'Сохранить'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddProject;
