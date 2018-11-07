import React from 'react'
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

const render = (req, store, routes, context) => {
  const content = renderToString(
    <Provider store={ store }>
      <StaticRouter context={ context } location={ req.path } >
        <div>
          { renderRoutes(routes) }
        </div>
      </StaticRouter>
    </Provider>
  )

  return `
    <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `
}

export default render