import { ReactComponent as BookIconOrange } from '../assets/Flat.svg';
import { ReactComponent as BookIconGrey } from '../assets/Group.svg';

import { Rate } from 'antd';
import EllipsisText from 'react-ellipsis-text';
import {
  Box,
  PropertyName,
  StyledBookTitle,
  StyledButton,
  StyledIconBox,
  StyledItem,
  StyledList,
  StyledText,
  StyledTitle,
  Wrapper,
} from './MobileTable.styled';
import Modal from 'components/modals/Modal/Modal';
import RatingModal from 'components/modals/RatingModal';
import useMobileTable from './useMobileTable';

const MobileTable = ({ title, status, data }) => {
  const { setBookId, toggleModal, isModalVisible, onModalClose, bookId } =
    useMobileTable();

  return (
    <Wrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledList>
        {data.map(item => (
          <StyledItem key={item._id}>
            <StyledIconBox>
              {status ? <BookIconOrange /> : <BookIconGrey />}
            </StyledIconBox>

            <div>
              <StyledBookTitle>
                <EllipsisText text={item?.title} length={50} />
              </StyledBookTitle>
              <Box>
                <PropertyName>Автор:</PropertyName>
                <StyledText>{item?.author}</StyledText>
              </Box>
              <Box>
                <PropertyName>Рік:</PropertyName>
                <StyledText>{item?.publication}</StyledText>
              </Box>
              <Box>
                <PropertyName>Стор.:</PropertyName>
                <StyledText>{item?.pages}</StyledText>
              </Box>
              {item.rating && (
                <>
                  <Box>
                    <PropertyName>Рейтинг:</PropertyName>
                    <Rate
                      style={{ width: '120px', fontSize: '17px' }}
                      disabled
                      value={item?.rating}
                    />
                  </Box>
                  <StyledButton
                    onClick={() => {
                      setBookId(item?._id);
                      toggleModal();
                    }}
                  >
                    Резюме
                  </StyledButton>
                </>
              )}
            </div>
          </StyledItem>
        ))}
      </StyledList>
      {isModalVisible && (
        <Modal onClose={onModalClose}>
          <RatingModal onClose={onModalClose} bookId={bookId} />
        </Modal>
      )}
    </Wrapper>
  );
};

export default MobileTable;
