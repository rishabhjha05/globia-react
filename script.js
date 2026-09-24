import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Search from './components/search.jsx';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import Country from './components/Country.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/Country',
        element: <Country/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<RouterProvider router={router} />);
