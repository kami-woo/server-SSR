import express from 'express';
import Home from '../containers/Home';
import { renderToString } from 'react-dom/server';
import React from 'react';

const app = express()
const content = renderToString(<Home />)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `)
})

app.listen(3000)
