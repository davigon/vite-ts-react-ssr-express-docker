import React, { useState } from "react"
import logo from "../../../static/logo.svg"
import { useAppContext } from "../Context"
import "./HomePage.css"

export const HomePage = () => {
  const { name, setName } = useAppContext()
  const [count, setCount] = useState(0)

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>Hello to {name || ""}!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <input
            placeholder={"Enter your name"}
            onChange={(e) => setName(e.currentTarget.value)}
            style={{
              border: "2px solid #61DAFB",
              padding: "10px 15px",
              background: "#EFEFEF",
            }}
          />
        </p>
        <p>
          Edit <code>HomePage.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="Home-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}
