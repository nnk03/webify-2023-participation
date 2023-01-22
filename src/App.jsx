import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Footer from "./Footer";
import HomePage from "./HomePage";
import HomePageComponents from "./HomePageComponents";
import Navbar from "./NavBar";
import About from "./About.jsx";
import NotFound from "./NotFound";
import Trial from "./Trial";
import RedirectFromHomePageToMoviesListPage from "./RedirectFromHomePageToMoviesListPage";
import data from "./data";

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Router>
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={<HomePage dataObjectArray={data} />}
            />

            {/* </Route> */}

            {/* <Route exact path="/horror" element={<HomePageComponents />} /> */}
            {/* <Route exact path="/:id" element={<Trial idEntered={} />} /> */}

            {/* </Route> */}
            <Route exact path="/about" element={<About />} />
            {/* </Route> */}
            <Route
              exact
              path="/:enteredUrl"
              element={
                <RedirectFromHomePageToMoviesListPage dataObjectArray={data} />
              }
            />

            {/* <Route element={<NotFound />}></Route> */}
            {/* <Route element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
