import styled from 'styled-components';
import SmallLine from 'images/svg/smLine.svg';
import LargeLine from 'images/svg/lgLine.svg';

export const Title = styled.h2`
  display: flex;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 1.2;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;

  &::before,
  ::after {
    content: url(${SmallLine});
    margin-top: -5px;
    margin-left: 4px;
    margin-right: 4px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: start;
    align-items: start;
    font-size: 14px;
    margin-bottom: 7px;
    &::before {
      content: none;
    }
    &::after {
      content: url(${LargeLine});
      margin-top: -5px;
      margin-left: 8px;
      margin-right: 0;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 12px;
    margin-top: 0;
    margin-bottom: 4px;
    margin-left: 0;
    justify-content: center;

    &::before,
    &::after {
      content: url(${SmallLine});
      margin-top: -5px;
      margin-left: 4px;
      margin-right: 4px;
    }
  }
`;

export const List = styled.ul`
  width: 245px;
  padding-right: 7px;
  margin: 0 auto;
  overflow-y: auto;
  height: 107px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 127px;
    margin: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0 auto;
    height: 107px;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const Date = styled.span`
  color: ${({ theme }) => theme.colors.mainFontColor};
  text-align: center;
`;

export const Time = styled.span`
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  text-align: center;
`;

export const Page = styled.span`
  display: inline-block;
  margin-right: 5px;
  text-align: end;
  color: ${({ theme }) => theme.colors.mainFontColor};
`;

export const PagesName = styled.span`
  text-align: end;
  color: ${({ theme }) => theme.colors.secondaryFontColor};
`;
