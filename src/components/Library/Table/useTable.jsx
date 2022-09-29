import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ReactComponent as BookIconOrange } from '../assets/Flat.svg';
import { ReactComponent as BookIconGrey } from '../assets/Group.svg';
import EllipsisText from 'react-ellipsis-text';
import { StyledBookTitle, StyledIconBox } from './Table.styled';
import { useMemo } from 'react';

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
