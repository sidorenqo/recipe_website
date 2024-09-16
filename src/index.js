import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RecipePage from './pages/RecipePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/recipePage',
    element: <RecipePage />,
    // children: [{
    //   path: '/recipePage/{recipes.id}'},
    //   element: <RecipePage />,
    // }]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
