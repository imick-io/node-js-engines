import { app } from '../index.js';

export const getHbsHomePage = (req, res) => {
  // YOU NORMALLY DO THIS IN THE INDEX.JS FILE
  // But since I have multiple engines, I'm doing it here.
  app.set('view engine', 'hbs');

  res.render('handlebars', {
    pageTitle: 'Handlebars',
    items: [{ title: 'Item 1' }, { title: 'Item 2' }],
    name: 'John Doe'
  });
};
