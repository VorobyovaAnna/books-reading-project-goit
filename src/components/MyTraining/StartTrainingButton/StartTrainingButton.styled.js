import styled from 'styled-components';
import { Button } from 'antd';

export const StyledButton = styled(Button)`
  display: block;
  width: 171px;
  height: 42px;
  margin: 32px auto 0 auto;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accentColor};

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    margin: 40px auto 0 auto;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin: 40px auto 0 364px;
  }
`;
