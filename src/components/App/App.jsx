import GlobalStyle from '../../styles/GlobalStyle';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import SharedLayout from 'components/SharedLayout';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import GoogleRedirect from 'components/Login/GoogleRedirect';

import MobileRoute from 'components/MobileRoute/MobileRoute';
import MobileAddBook from 'pages/MobileAddBook';
// import MyGoal from 'components/MyGoal';
// import { LoginForm } from 'components/LoginForm/LoginForm';
// import CongratsModal from 'components/modals/CongratsModal';
// import WellDoneModal from 'components/modals/WellDoneModal';
// import ExitModal from 'components/modals/ExitModal';
// import RatingModal from 'components/modals/RatingModal';
// import ProgressChart from 'components/ProgressChart';

const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Library = lazy(() => import('pages/Library'));
const Training = lazy(() => import('pages/Training'));
const Statistics = lazy(() => import('pages/Statistics'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      {/* <ProgressChart /> */}
      {/* <LoginForm />
      <MyGoal />
      <CongratsModal />
      <WellDoneModal />
      <RatingModal/>
      <ExitModal /> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="google-redirect"
            element={
              <PublicRoute restricted>
                <GoogleRedirect />
              </PublicRoute>
            }
          />
          <Route
            path="library"
            element={
              <PrivateRoute>
                <Library />
              </PrivateRoute>
            }
          />
          <Route
            path="library/addBook"
            element={
              <PrivateRoute>
                <MobileRoute>
                  <MobileAddBook />
                </MobileRoute>
              </PrivateRoute>
            }
          />
          <Route
            path="training"
            element={
              <PrivateRoute>
                <Training />
              </PrivateRoute>
            }
          />
          <Route
            path="statistics"
            element={
              <PrivateRoute>
                <Statistics />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}
