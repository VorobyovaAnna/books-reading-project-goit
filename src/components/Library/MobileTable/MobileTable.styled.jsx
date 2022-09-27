import styled from 'styled-components';
import { StyledBtn } from '../ReadTable/ReadTable.styled';

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

export const Wrapper = styled.div`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
