import React from "react"
import ReactDOM from "react-dom/server"
import { StaticRouter } from "react-router-dom/server"
import { App } from "./App"
import "./index.css"

export const render = (url: string) => {
  return ReactDOM.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  )
}
