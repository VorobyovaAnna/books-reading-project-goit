import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ReactComponent as BookIconOrange } from '../assets/Flat.svg';
import { ReactComponent as BookIconGrey } from '../assets/Group.svg';
import EllipsisText from 'react-ellipsis-text';
import { StyledBookTitle, StyledBtn, StyledIconBox } from './ReadTable.styled';
import { useMemo } from 'react';
import { Rate } from 'antd';

const useTable = (status, data) => {
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
        cell: info => <Rate value={info.getValue()} />,
      }),
      columnHelper.accessor('_id', {
        header: '',
        cell: info => (
          <StyledBtn
            type="primary"
            onClick={() => console.log(info.getValue())}
          >
            Резюме
          </StyledBtn>
        ),
      }),
    ],
    [columnHelper, status]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return { table };
};

export default useTable;
