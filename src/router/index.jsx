import Login from '../pages/Login.jsx';
import Home from '../pages/Home.jsx';
const routes = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />
  }
];
export default routes;