const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.use(express.static('site'));

// simple REST API to load movies by slug
const movies = require('./data.json');

app.get('/api/movies/:slug', (req, res) => {
  const { slug } = req.params;
  const movie = movies.find((m) => m.slug === slug);

  res.json(movie);
});

app.listen(PORT, HOST, () => {
  console.log(`app running on http://${HOST}:${PORT}`);
});
