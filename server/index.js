import express from 'express';
import multer from 'multer';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {
  registerValidation,
  loginValidation,
  skillCreateValidation,
  mediaCreateValidation,
  contactCreateValidation,
  factCreateValidation,
  projectCreateValidation,
  smallProjectCreateValidation,
} from './validations.js';
import {
  UserController,
  SkillController,
  MediaController,
  ContactController,
  FactController,
  ProjectController,
  SmallProjectController,
} from './controllers/index.js';
import { handleValidationErrors, checkAuth } from './utils/index.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001,
  DB_USER = process.env.DB_USER,
  DB_PASSWORD = process.env.DB_PASSWORD,
  DB_NAME = process.env.DB_NAME;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jcpn6xu.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
  )
  .then(() => console.log('MongoDB OK'))
  .catch((err) => console.log('MongoDB error', err));

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/skills', SkillController.getAll);
app.post(
  '/skills',
  checkAuth,
  skillCreateValidation,
  handleValidationErrors,
  SkillController.create,
);
app.delete('/skills/:id', checkAuth, SkillController.remove);
app.patch(
  '/skills/:id',
  checkAuth,
  skillCreateValidation,
  handleValidationErrors,
  SkillController.update,
);

app.get('/medias', MediaController.getAll);
app.post(
  '/medias',
  checkAuth,
  mediaCreateValidation,
  handleValidationErrors,
  MediaController.create,
);
app.delete('/medias/:id', checkAuth, MediaController.remove);
app.patch(
  '/medias/:id',
  checkAuth,
  mediaCreateValidation,
  handleValidationErrors,
  MediaController.update,
);

app.get('/contacts', ContactController.getAll);
app.post(
  '/contacts',
  checkAuth,
  contactCreateValidation,
  handleValidationErrors,
  ContactController.create,
);
app.delete('/contacts/:id', checkAuth, ContactController.remove);
app.patch(
  '/contacts/:id',
  checkAuth,
  contactCreateValidation,
  handleValidationErrors,
  ContactController.update,
);

app.get('/facts', FactController.getAll);
app.post('/facts', checkAuth, factCreateValidation, handleValidationErrors, FactController.create);
app.delete('/facts/:id', checkAuth, FactController.remove);
app.patch(
  '/facts/:id',
  checkAuth,
  factCreateValidation,
  handleValidationErrors,
  FactController.update,
);

app.get('/projects', ProjectController.getAll);
app.post(
  '/projects',
  checkAuth,
  projectCreateValidation,
  handleValidationErrors,
  ProjectController.create,
);
app.delete('/projects/:id', checkAuth, ProjectController.remove);
app.get('/projects/:id', checkAuth, ProjectController.getOne);
app.patch(
  '/projects/:id',
  checkAuth,
  projectCreateValidation,
  handleValidationErrors,
  ProjectController.update,
);

app.get('/small', SmallProjectController.getAll);
app.post(
  '/small',
  checkAuth,
  smallProjectCreateValidation,
  handleValidationErrors,
  SmallProjectController.create,
);
app.delete('/small/:id', checkAuth, SmallProjectController.remove);
app.get('/small/:id', checkAuth, SmallProjectController.getOne);
app.patch(
  '/small/:id',
  checkAuth,
  smallProjectCreateValidation,
  handleValidationErrors,
  SmallProjectController.update,
);

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server OK');
});
