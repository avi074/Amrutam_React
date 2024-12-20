// src/routes.ts
import { lazy } from 'react';

// Use React.lazy to dynamically import components
const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const FindDoc = lazy(() => import('./pages/FindDoc.tsx'));
const NotFound = lazy(() => import('./pages/NotFound.tsx'));

// Define an interface for route configuration
export interface RouteConfig {
    path?: string;
    element: React.LazyExoticComponent<React.FC>; // Use LazyExoticComponent for lazy-loaded components; // Use LazyExoticComponent type;
    index?: boolean; // Optional index route (default route for a layout)
}

const routes: RouteConfig[] = [
    { path: '/', element: Home, index: true },
    { path: '/about', element: About },
    { path: '/contact', element: FindDoc },
    { path: '*', element: NotFound },
];

export default routes;