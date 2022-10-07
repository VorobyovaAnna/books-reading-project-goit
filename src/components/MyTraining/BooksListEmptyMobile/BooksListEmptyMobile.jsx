import {
  StyledWrapper,
  StyledTable,
  StyledIcon,
} from './BooksListEmptyMobile.styled';
import { ReactComponent as BookIconGrey } from 'images/svg/bookIconGrey.svg';

const BooksListEmptyMobile = () => {
  return (
    <StyledWrapper>
      <StyledIcon>
        <BookIconGrey />
      </StyledIcon>
      <StyledTable>
        <tbody>
          <tr>
            <td>...</td>
          </tr>
          <tr>
            <td>Автор:</td>
            <td>...</td>
          </tr>
          <tr>
            <td>Рік</td>
            <td>...</td>
          </tr>
          <tr>
            <td>Стор.:</td>
            <td>...</td>
          </tr>
        </tbody>
      </StyledTable>
    </StyledWrapper>
  );
};

export default BooksListEmptyMobile;
