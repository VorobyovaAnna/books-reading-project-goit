import styled from 'styled-components';
import theme from 'styles/theme';
import device from 'styles/device';

export const QouteWrapper = styled.div`
  /* padding: 16px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};

  @media ${device.mobile} {
    padding: 16px 46px;
  }

  @media ${device.tablet} {
    padding: 71px 121px;
  }

  @media ${device.desktop} {
    padding: 266px 167px;
  }
`;

export const Text = styled.p`
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;
  font-weight: 500;

  @media ${device.mobile} {
    width: 229px;
    font-size: 13px;
    line-height: 1.23;
  }

  @media ${device.tablet} {
    width: 526px;
    font-size: 24px;
    line-height: 1.58;
  }

  @media ${device.desktop} {
    width: 397px;
    font-size: 24px;
    line-height: 1.58;
  }
`;

export const Author = styled.p`
  padding: 4px 12px;
  border-top: 1px solid ${theme.colors.secondaryFontColor};
  color: ${theme.colors.secondaryFontColor};
`;
