import { useState, ReactElement } from 'react'

import './App.css'

const App = (): ReactElement => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="flex items-center justify-center">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo h-32" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src="/react.svg" className="logo react h-32" alt="React logo" />
        </a>
      </div>
      <h1 className="bg-slate-400 text-lime-300 rounded-lg hover:bg-lime-300 hover:text-slate-400 duration-300">Vite + React + Eslint + Prettier + Tailwind</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
