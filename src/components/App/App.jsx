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
import { getFetchingCurrent } from 'redux/auth';

// import MyGoal from 'components/MyGoal';
// import CongratsModal from 'components/modals/CongratsModal';
// import WellDoneModal from 'components/modals/WellDoneModal';
// import ExitModal from 'components/modals/ExitModal';
// import RatingModal from 'components/modals/RatingModal';
// import ProgressChart from 'components/ProgressChart';
// import EmtpyLibraryText from 'components/modals/EmtpyLibraryText';
// import YearTimer from 'components/Timer/YearTimer';
// import GoalTimer from 'components/Timer/GoalTimer';

const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Library = lazy(() => import('pages/Library'));
const Training = lazy(() => import('pages/Training'));
const AddTraining = lazy(() => import('pages/AddTraining'));
const Statistics = lazy(() => import('pages/Statistics'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(getFetchingCurrent);
  const [firstRenderEnded, setFirstRenderEnded] = useState(false);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
    setFirstRenderEnded(true);
  }, [dispatch]);


  return (
    !isFetchingUser &&
    firstRenderEnded && (
      <>
        <GlobalStyle />
        {/* <EmtpyLibraryText />
        <ProgressChart />
        <MyGoal />
        <CongratsModal />
        <WellDoneModal />
        <RatingModal/>
        <ExitModal />
        <YearTimer />
        <GoalTimer /> */}
        
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Login />} />
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
              path="training/add"
              element={
                <PrivateRoute>
                  <AddTraining />
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
    )
  );
}
