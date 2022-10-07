import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ReactComponent as BookIconOrange } from '../assets/Flat.svg';
import { ReactComponent as BookIconGrey } from '../assets/Group.svg';
import EllipsisText from 'react-ellipsis-text';
import { StyledBookTitle, StyledBtn, StyledIconBox } from './ReadTable.styled';
import { useCallback, useMemo, useState } from 'react';
import { Rate } from 'antd';

const useTable = (status, data) => {
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

  const columnHelper = createColumnHelper();

  const columns = useMemo(
    () => [
      columnHelper.accessor('title', {
        header: 'Назва книги',
        cell: info => (
          <StyledBookTitle>
            <StyledIconBox>
              {status ? <BookIconOrange /> : <BookIconGrey />}
            </StyledIconBox>
            <EllipsisText text={info.getValue()} length={50} />
          </StyledBookTitle>
        ),
      }),
      columnHelper.accessor('author', {
        header: 'Автор',
      }),
      columnHelper.accessor('publication', {
        header: 'Рік',
      }),
      columnHelper.accessor('pages', {
        header: 'Стор.',
      }),
      columnHelper.accessor('rating', {
        header: 'Рейтинг книги',
        cell: info => (
          <Rate
            style={{ width: '120px', fontSize: '17px' }}
            disabled
            value={info.getValue()}
          />
        ),
      }),
      columnHelper.accessor('_id', {
        header: '',
        cell: info => (
          <StyledBtn
            type="primary"
            onClick={() => {
              setBookId(info.getValue());
              toggleModal();
            }}
          >
            Резюме
          </StyledBtn>
        ),
      }),
    ],
    [columnHelper, status, toggleModal]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return { table, isModalVisible, bookId, onModalClose };
};

export default useTable;
