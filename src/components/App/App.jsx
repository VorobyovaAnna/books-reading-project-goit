import GlobalStyle from '../../styles/GlobalStyle';
// import 'antd/dist/antd.css';
import Container from 'components/Container';
import Header from 'components/Header';
import MyGoal from 'components/MyGoal';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <LoginForm />
        <MyGoal />
      </Container>
    </>
  );
}
