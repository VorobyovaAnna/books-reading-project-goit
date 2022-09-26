import { flexRender } from '@tanstack/react-table';
import { StyledTable, StyledTitle } from './Table.styled';
import useTable from './useTable';

const Table = ({ title, status, data }) => {
  const { table } = useTable(status, data);

  return (
    <>
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
    </>
  );
};

export default Table;
