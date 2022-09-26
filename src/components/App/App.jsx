import GlobalStyle from '../../styles/GlobalStyle';
// import 'antd/dist/antd.css';
import Container from 'components/Container';
import Header from 'components/Header';
import MyGoal from 'components/MyGoal';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <MyGoal />
        {/* <div>React homework template</div> */}
      </Container>
    </>
  );
}
