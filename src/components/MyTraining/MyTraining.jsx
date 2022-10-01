import { useMatchMedia } from 'hooks';
import BooksListEmptyMobile from './BooksListEmptyMobile';

const MyTraining = () => {
  const { isMobile } = useMatchMedia();

  return (
    <>
      {isMobile && <BooksListEmptyMobile />}
      {/* <MyTrainingModal /> */}
    </>
  );
};

export default MyTraining;
