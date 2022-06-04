import React from "react"

export const Footer = () => {
  return (
    <footer style={{ textAlign: "center" }}>
      {new Date().getFullYear()}{" "}
      <a href={"https://github.com/davigon"}>davigon</a>
    </footer>
  )
}
