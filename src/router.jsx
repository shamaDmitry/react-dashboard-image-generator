import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';

import BasicLayout from './Layouts/BasicLayout';
import DashboardLayout from './Layouts/DashboardLayout';
import ProtectedRoute from './Layouts/ProtectedRoute';

import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Page_404 from './Pages/Page_404';

import { authLoader } from './loaders/authLoader';
import Colection from './Pages/Colection';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route element={<BasicLayout />}>
      <Route
        index
        loader={authLoader}
        element={<Navigate to="/login" />}
      />

      <Route
        path="login"
        loader={authLoader}
        element={<Login />}
      />

      <Route
        path="register"
        loader={authLoader}
        element={<SignUp />}
      />
    </Route>

    <Route path="/" element={<DashboardLayout />}>
      <Route element={<ProtectedRoute />}>
        <Route
          index
          path="home"
          element={<Home />}
        />
        <Route
          index
          path="colection"
          element={<Colection />}
        />
      </Route>
    </Route>

    <Route path="*" element={<Page_404 />} />
  </>
));

export default router;