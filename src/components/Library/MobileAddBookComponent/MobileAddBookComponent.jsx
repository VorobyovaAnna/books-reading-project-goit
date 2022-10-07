import Container from 'components/Container';
import LibraryForm from 'components/Library/LibraryForm/LibraryForm';
// import LibraryHelp from 'components/Library/LibraryHelp/LibraryHelp';
import Modal from 'components/modals/Modal/Modal';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetBooksQuery } from 'redux/RTKQuery/booksApi';
import { StyledBackBtn, Wrapper } from './MobileAddBookComponent.styled';

import { ReactComponent as BackIcon } from '../assets/back.svg';
import EmtpyLibraryText from 'components/modals/EmtpyLibraryText';

const MobileAddBookComponent = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const { data, error, isLoading } = useGetBooksQuery();

  useEffect(() => {
    if (data) {
      setIsEmpty(!!!data?.books.length);
    }
  }, [data]);

  useEffect(() => {
    isEmpty ? setIsModalVisible(true) : setIsModalVisible(false);
  }, [isEmpty]);

  return (
    <Container>
      {error && <p>{error?.data?.message}</p>}
      {!isLoading && (
        <Wrapper>
          <StyledBackBtn
            onClick={() => {
              navigate('/library');
            }}
          >
            <BackIcon />
          </StyledBackBtn>
          <LibraryForm />
          {isEmpty && isModalVisible && (
            <Modal onClose={toggleModal}>
              <EmtpyLibraryText
                onClick={toggleModal}
                isEmptyLibrary={!isEmpty}
              />
            </Modal>
          )}
        </Wrapper>
      )}
    </Container>
  );
};

export default MobileAddBookComponent;
