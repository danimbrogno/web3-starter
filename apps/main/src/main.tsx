import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { FarcasterProvider } from './contexts/FarcasterContext';
import { Root } from './routes/root';
import { Home } from './routes/home';
import { About } from './routes/about';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FarcasterProvider>
      <RouterProvider router={router} />
    </FarcasterProvider>
  </StrictMode>
);
