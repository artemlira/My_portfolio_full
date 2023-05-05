import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import About from './pages/About';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import AddProject from './components/AddProject/AddProject';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  // eslint-disable-next-line no-console
  console.log(isAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id/edit" element={<AddProject />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="auth/login" element={<LoginPage />} />
        <Route path="auth/register" element={<RegisterPage />} />
        <Route path="add-project" element={<AddProject />} />
      </Route>
    </Routes>
  );
}

export default App;
