import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes, { RouteConfig } from './routes';

function App() {
  return (
    <>
      <Router basename="/amrutam_react_web">
        {/* Wrap Routes inside Suspense to show a fallback UI while loading */}
        <Suspense fallback={<div>Loading...</div>}>
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
