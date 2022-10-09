import GlobalStyle from '../../styles/GlobalStyle';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import SharedLayout from 'components/SharedLayout';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import GoogleRedirect from 'components/Login/GoogleRedirect';

import MobileRoute from 'components/MobileRoute/MobileRoute';
import MobileAddBook from 'pages/MobileAddBook';
import AboutApp from 'components/Signup/AboutApp';
import { getFetchingCurrent } from 'redux/auth';

const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Library = lazy(() => import('pages/Library'));
const Training = lazy(() => import('pages/Training'));

export default function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(getFetchingCurrent);
  const [firstRenderEnded, setFirstRenderEnded] = useState(false);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    setFirstRenderEnded(true);
  }, [dispatch]);

  return (
    !isFetching &&
    firstRenderEnded && (
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              element={
                <PublicRoute restricted>
                  <MobileRoute redirectTo="login">
                    <AboutApp />
                  </MobileRoute>
                </PublicRoute>
              }
            />
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
                  <MobileRoute redirectTo="library">
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
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </>
    )
  );
}
