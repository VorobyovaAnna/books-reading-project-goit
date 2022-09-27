import GlobalStyle from '../../styles/GlobalStyle';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout';
// import Container from 'components/Container';
// import Header from 'components/Header';
// import MyGoal from 'components/MyGoal';
// import { LoginForm } from 'components/LoginForm/LoginForm';

const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Library = lazy(() => import('pages/Library'));
const Training = lazy(() => import('pages/Training'));
const Statistics = lazy(() => import('pages/Statistics'));

export default function App() {
  return (
    <>
      <GlobalStyle />
      // <Container>
        // <Header />
        // <LoginForm />
        // <MyGoal />
      // </Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="library" element={<Library />} />
          <Route path="training" element={<Training />} />
          <Route path="statistics" element={<Statistics />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
