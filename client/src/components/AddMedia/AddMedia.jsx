import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from '../../utils/axios';
import styles from './AddMedia.module.scss';

function AddMedia() {
  const { id } = useParams();
  const [name, setName] = useState(null);
  const [link, setLink] = useState(null);
  const [icon, setIcon] = useState(null);
  const inputIconRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`/medias/${id}`).then((res) => {
        setName(res.data.name);
        setLink(res.data.link);
        setIcon(res.data.icon);
      });
    }
  }, [id]);

  const onSubmit = async () => {
    try {
      const fields = {
        name,
        link,
        icon,
      };
      if (id) {
        await axios.patch(`/medias/${id}`, fields);
      } else {
        await axios.post('/medias', fields);
      }
      navigate('/contacts');
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
      setIcon(data.url);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(error);
      // eslint-disable-next-line no-alert
      alert('Ошибка при загрузке иконки');
    }
  };

  return (
    <section className={styles.addMedia}>
      <div className="container">
        <div className={styles.container}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.icon}>
              <button
                className={styles.addImg}
                onClick={() => inputIconRef.current.click()}
                type="button"
              >
                Загрузить иконку svg
              </button>
              <input ref={inputIconRef} type="file" onChange={handleChangeFile} hidden />
            </div>
            <div className={styles.wrapperIcons}>
              {icon && (
                <img className={styles.mini} src={`http://localhost:4444${icon}`} alt={icon} />
              )}
            </div>
            <div className={styles.wrapperName}>
              <label htmlFor="name" className={styles.name}>
                name
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className={styles.wrapperLink}>
              <label htmlFor="link" className={styles.link}>
                link
                <input
                  type="text"
                  placeholder="link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  id="link"
                />
              </label>
            </div>
            <button type="submit" className={styles.btn} onClick={onSubmit}>
              {!id ? 'Добавить' : 'Сохранить'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddMedia;
