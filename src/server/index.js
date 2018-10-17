import express from 'express';
import React from 'react';
import Render from '../utils/render'

const app = express()
app.use(express.static('public'))

app.get('*', (req, res) => {
  res.send(Render(req))
})

app.listen(3000)
