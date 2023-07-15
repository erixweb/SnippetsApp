import React, { createContext } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./styles.css"

const globalState = {
  snippet: "Hello world"
}

const globalStateContext = createContext(globalState)

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
