import GlobalStyle from '../../styles/GlobalStyle';
// import 'antd/dist/antd.css';
import Container from 'components/Container';
import Header from 'components/Header';
import MyGoal from 'components/MyGoal';
import CongratsModal from 'components/modals/CongratsModal';
import WellDoneModal from 'components/modals/WellDoneModal';
import ExitModal from 'components/modals/ExitModal';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <MyGoal />
        {/* <div>React homework template</div> */}
        <CongratsModal/>
        <WellDoneModal/> 
        <ExitModal/>
      </Container>
    </>
  );
}
