import { createBrowserRouter } from 'react-router-dom';

import App from './../App';
import Home from '../pages/Home';
import Pillbox from '../pages/Pillbox';
import Schedule from '../pages/Schedule';
import History from '../pages/History';

const router = createBrowserRouter([
{
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'pillbox',
        element: <Pillbox />,
      },
      {
        path: 'schedule',
        element: <Schedule />,
      },
      {
        path: 'history',
        element: <History />,
      },
    ],
  },
//   {
//     path: '*',
//     element: <NotFound />,
//   },
]);

export default router;