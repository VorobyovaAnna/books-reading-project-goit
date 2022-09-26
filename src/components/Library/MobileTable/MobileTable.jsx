import React from 'react';
import { ReactComponent as BookIconOrange } from '../assets/Flat.svg';
import { ReactComponent as BookIconGrey } from '../assets/Group.svg';
import styled from 'styled-components';
import { StyledBtn } from '../ReadTable/ReadTable.styled';
import { Rate } from 'antd';
import EllipsisText from 'react-ellipsis-text';

const MobileTable = ({ title, status, data }) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <StyledList>
        {data.map(item => (
          <StyledItem>
            <StyledIconBox>
              {status ? <BookIconOrange /> : <BookIconGrey />}
            </StyledIconBox>

            <div>
              <StyledBookTitle>
                <EllipsisText text={item?.title} length={50} />
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
                <StyledText>{item?.pages}</StyledText>
              </Box>
              {item.rating && (
                <>
                  <Box>
                    <PropertyName>Рейтинг:</PropertyName>
                    <Rate value={item?.rating} />
                  </Box>
                  <StyledButton
                    onClick={() => {
                      console.log(item.id);
                    }}
                  >
                    Резюме
                  </StyledButton>
                </>
              )}
            </div>
          </StyledItem>
        ))}
      </StyledList>
    </>
  );
};

export default MobileTable;

export const StyledTitle = styled.h3`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 19px;
  line-height: 1.2;

  margin-bottom: 20px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledItem = styled.li`
  display: flex;

  padding: 20px 10px 28px 20px;

  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.header};

  color: ${p => p.theme.colors.mainFontColor};
`;

export const StyledIconBox = styled.div`
  width: 22px;
  height: 17px;

  margin-right: 12px;
`;

export const StyledBookTitle = styled.h3`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;

  margin-bottom: 12px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const StyledText = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
`;

export const PropertyName = styled(StyledText)`
  color: ${p => p.theme.colors.secondaryFontColor};
  width: 80px;
`;

export const StyledButton = styled(StyledBtn)`
  min-width: 127px;
  margin-left: 18px;

  color: ${p => p.theme.colors.white};
`;
