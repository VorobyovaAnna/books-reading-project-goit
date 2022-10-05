import React from 'react';
import { StyledBookTitle, StyledIconBox } from './StatisticsTable.styled';

import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ReactComponent as CheckboxFalse } from '../assets/checkboxFalse.svg';
import { ReactComponent as CheckboxTrue } from '../assets/checkboxTrue.svg';
import EllipsisText from 'react-ellipsis-text';
import { useMemo } from 'react';

const useStatisticsTable = data => {
  const columnHelper = createColumnHelper();

  const columns = useMemo(
    () => [
      columnHelper.accessor('title', {
        header: 'Назва книги',
        cell: info => (
          <StyledBookTitle>
            <StyledIconBox>
              {info.getValue().status ? <CheckboxTrue /> : <CheckboxFalse />}
            </StyledIconBox>
            <EllipsisText text={info.getValue().title} length={24} />
          </StyledBookTitle>
        ),
      }),
      columnHelper.accessor('author', {
        header: 'Автор',
        cell: info => <EllipsisText text={info.getValue()} length={20} />,
      }),
      columnHelper.accessor('publication', {
        header: 'Рік',
      }),
      columnHelper.accessor('leftPages', {
        header: 'Стор.',
      }),
    ],
    [columnHelper]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return { table };
};

export default useStatisticsTable;
