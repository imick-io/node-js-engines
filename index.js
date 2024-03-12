import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import path from 'path';

import { engine } from 'express-handlebars';

// 1. Create an express app.
export const app = express();

// Register the custom template engine.
app.engine(
  'hbs',
  engine({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'hbs-layout',
    extname: 'hbs'
  })
);
// Set the views folder.
app.set('views', 'views');

// ******************
// middlewares
// ******************

// Add the cors middleware.
app.use(cors({ origin: true }));

// Parse the body of the request as JSON.
app.use(bodyParser.urlencoded({ extended: false }));

// Serve file statically. (css, images, etc.)
app.use(express.static(path.join(rootPath, 'public')));

// ******************
// Routes
// ******************

import homeRouter from './routes/home.js';
import RawHtmlRouter from './routes/rawHtml.js';
import pugRouter from './routes/pug.js';
import hbsRouter from './routes/hbs.js';
import ejsRouter from './routes/ejs.js';

import rootPath from './utils/rootPath.js';

// Add a routes.
app.use('/', homeRouter);
app.use('/rawHtml', RawHtmlRouter);
app.use('/hbs', hbsRouter);
app.use('/pug', pugRouter);
app.use('/ejs', ejsRouter);

// 404 page
app.use((req, res) => {
  res.status(404).sendFile(path.join(rootPath, 'views', '404.html'));
});

// ******************
// Start the server
// ******************
// 4. Start the server.
const port = 8000;
app.listen(port, () => console.log(`🚀 App is listening on port ${port}`));
