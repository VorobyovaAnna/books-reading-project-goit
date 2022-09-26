import GlobalStyle from '../../styles/GlobalStyle';
// import 'antd/dist/antd.css';
import Container from 'components/Container';
import Header from 'components/Header';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        {/* <div>React homework template</div> */}
      </Container>
    </>
  );
}
