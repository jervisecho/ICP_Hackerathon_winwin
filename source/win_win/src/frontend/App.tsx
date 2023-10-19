// export default App;
import React from "react"
import logo from "./assets/dfinity.svg"

declare global {
  interface Window {
    ic: any;
  }
}

function App() {
  return (
    <div className="App">
      Test Page
    </div>
  )
}

export default () => (
    <App />
)
