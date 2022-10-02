import { flexRender } from '@tanstack/react-table';
import Modal from 'components/modals/Modal/Modal';
import RatingModal from 'components/modals/RatingModal';
import { StyledTable, StyledTitle, Wrapper } from './ReadTable.styled';
import useTable from './useTable';

const ReadTable = ({ title, status, data }) => {
  const { table, isModalVisible, bookId, onModalClose } = useTable(
    status,
    data
  );

  return (
    <Wrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledTable>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
      {isModalVisible && (
        <Modal onClose={onModalClose}>
          <RatingModal onClose={onModalClose} bookId={bookId} />
        </Modal>
      )}
    </Wrapper>
  );
};

export default ReadTable;
