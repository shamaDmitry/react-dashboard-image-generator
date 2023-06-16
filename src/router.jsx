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

import { authLoader } from './loaders/authLoader';

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
        element={<Login />}
        loader={authLoader}
      />

      <Route
        path="register"
        element={<SignUp />}
        loader={authLoader}
      />
    </Route>

    <Route path="/" element={<DashboardLayout />}>
      <Route element={<ProtectedRoute />}>
        <Route
          index
          path="home"
          element={<Home />}
        />
      </Route>
    </Route>

    {/* <Route path="*" element={<Page_404 />} /> */}
  </>
));

export default router;