import { app } from '../index.js';

export const getPugHomePage = (req, res) => {
  // YOU NORMALLY DO THIS IN THE INDEX.JS FILE
  // But since I have multiple engines, I'm doing it here.
  app.set('view engine', 'pug');

  res.render('pug', {
    name: 'John Doe',
    list: ['item 1', 'item 2'],
    title: 'title from node',
    isActive: true,
    emptyList: []
  });
};
