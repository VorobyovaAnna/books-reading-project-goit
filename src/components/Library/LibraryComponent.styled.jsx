import { Button } from 'antd';
import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 40px 0;
  font-family: 'Montserrat';
`;

export const StyledButton = styled(Button)`
  display: block;
  min-width: 200px;
  min-height: 40px;
  margin-left: auto;
  margin-right: auto;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;

  @media (min-width: ${p => p.theme.breakpoints.mobile}) {
    margin-bottom: 128px;
  }
`;

export const MobileAddBtn = styled(Button)`
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 52px;
  height: 52px;

  border-radius: 50%;

  position: fixed;
  bottom: 12px;
  left: calc(50% - 26px);
`;

export const TextStyledPrimary = styled.p`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 14px;
  line-height: 1.2;
  margin-bottom: 20px;
`;

export const TextStyled = styled.span`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;

  color: ${p => p.theme.colors.secondaryFontColor};
`;
