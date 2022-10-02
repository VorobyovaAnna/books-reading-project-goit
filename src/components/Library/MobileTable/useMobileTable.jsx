import { useCallback, useState } from 'react';

const useMobileTable = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bookId, setBookId] = useState(null);
  const toggleModal = useCallback(
    () => setIsModalVisible(!isModalVisible),
    [isModalVisible]
  );

  const onModalClose = useCallback(() => {
    setIsModalVisible(!isModalVisible);
    setBookId(null);
  }, [isModalVisible]);

  return { setBookId, toggleModal, isModalVisible, onModalClose, bookId };
};

export default useMobileTable;
