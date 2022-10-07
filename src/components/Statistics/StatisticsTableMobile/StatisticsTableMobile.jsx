import { ReactComponent as CheckboxFalse } from '../assets/checkboxFalse.svg';
import { ReactComponent as CheckboxTrue } from '../assets/checkboxTrue.svg';

import EllipsisText from 'react-ellipsis-text';
import {
  Box,
  PropertyName,
  StyledBookTitle,
  StyledIconBox,
  StyledItem,
  StyledList,
  StyledText,
  Wrapper,
} from './StatisticsTableMobile.styled';

const StatisticsTableMobile = ({ books }) => {
  return (
    <Wrapper>
      <StyledList>
        {books.map(item => (
          <StyledItem key={item._id}>
            <StyledIconBox>
              {item.title.status ? <CheckboxTrue /> : <CheckboxFalse />}
            </StyledIconBox>

            <div>
              <StyledBookTitle>
                <EllipsisText text={item?.title.title} length={50} />
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
                <StyledText>{item?.leftPages}</StyledText>
              </Box>
            </div>
          </StyledItem>
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default StatisticsTableMobile;
