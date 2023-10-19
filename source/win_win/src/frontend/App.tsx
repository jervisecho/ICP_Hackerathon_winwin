// export default App;
import * as React from "react"

declare global {
  interface Window {
    ic: any;
  }
}

function App() {
  return (
    <div className="App">
      Test Page AAAA
    </div>
  )
}

export default () => (
    <App />
)
