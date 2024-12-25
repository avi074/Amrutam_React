import { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import routes, { RouteConfig } from "./routes"
import Header from "./components/Header"
import Loader from "./components/Loader"

function App() {
  return (
    <>
      <Router basename='/Amrutam_React/'>
        <Header />
        {/* Wrap Routes inside Suspense to show a fallback UI while loading */}
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Dynamically map through the route configuration */}
            {routes.map((route: RouteConfig, index: number) => (
              <Route
                key={index}
                path={route.path}
                element={<route.element />}
                index={route.index}
              />
            ))}
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
