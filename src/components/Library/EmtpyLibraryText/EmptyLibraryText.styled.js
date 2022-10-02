import styled from 'styled-components';

export const StyledList = styled.ul`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.header};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 40px;
  }

  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 0px;
  }

  & li:not(:last-child) {
    margin-bottom: 24px;
  }

  & .step-text {
    display: flex;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.21;

    & svg {
      margin-right: 12px;
    }
  }

  & .sup-step-text {
    display: flex;
    align-items: baseline;
    padding-left: 34px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.21;

    & span {
      display: block;
      width: 10px;
      margin-right: 8px;
    }
  }
`;

export const StyledStepText = styled.p`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 19px;
    margin-bottom: 16px;
    margin-top: ${props => props.marTopTablet};
  }
`;

export const StyledNameBook = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.secondaryFontColor};
`;

export const StyledLibButton = styled.button`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  min-width: 127px;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.accentColor};
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.accentColor};
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.mainFontColor};
    background-color: ${({ theme }) => theme.colors.mainBackground};
    outline: 1px solid ${({ theme }) => theme.colors.mainFontColor};
    box-shadow: ${({ theme }) => theme.shadows.instrustion};
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 0px;
    width: 608px;
    height: 272px;
  }
`;
