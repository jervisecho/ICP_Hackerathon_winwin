// export default App;
import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "@container/Header/Header"
declare global {
  interface Window {
    ic: any;
  }
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default () => (
    <App />
)
