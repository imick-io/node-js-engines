import path from 'path';
import rootPath from '../utils/rootPath.js';

export const getHomePage = (req, res) => {
  res.sendFile(path.join(rootPath, 'views', 'raw-html.html'));
};

export const getFormPage = (req, res) => {
  res.sendFile(path.join(rootPath, 'views', 'raw-html-form.html'));
};

export const getThanksPage = (req, res) => {
  res.sendFile(path.join(rootPath, 'views', 'raw-html-thanks.html'));
};

export const postFormPage = (req, res) => {
  const name = req.body.name;
  res.redirect('/rawHtml/thanks');
};
