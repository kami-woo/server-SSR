import React from 'react'
import Routes from '../Routes'
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom'

const Render = (req) => {
  const content = renderToString(
    <StaticRouter context={{}} location={ req.path } >
      <Routes />
    </StaticRouter>
  )

  return (`
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
}

export default Render
