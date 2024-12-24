// src/routes.ts
import { lazy } from 'react';

// Use React.lazy to dynamically import components
// const Home = lazy(() => import('./pages/Home.tsx'));
const DocInfo = lazy(() => import('./pages/[DocInfo].tsx'));
const FindDoc = lazy(() => import('./pages/FindDoc.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));

// Define an interface for route configuration
export interface RouteConfig {
    path?: string;
    element: React.LazyExoticComponent<React.FC>; // Use LazyExoticComponent for lazy-loaded components; // Use LazyExoticComponent type;
    index?: boolean; // Optional index route (default route for a layout)
}

const routes: RouteConfig[] = [
    { path: '/findDoc', element: FindDoc},
    { path: '/findDoc/:id', element: DocInfo},
    { path: '*', element: NotFound },
];

export default routes;