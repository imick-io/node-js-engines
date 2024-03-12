import path from 'path';
import rootPath from '../utils/rootPath.js';

export const getHomePage = (req, res) => {
  res.sendFile(path.join(rootPath, 'views', 'home.html'));
};
