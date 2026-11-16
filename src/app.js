const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <h1>DevDeploy Demo App v4</h1>
  <title>DevDeploy Demo App</title>
</head>
<body>
  <p>This application is deployed through DevDeploy, a CI/CD platform.</p>
  <p>Status: Online</p>
</body>
</html>`);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = app;
