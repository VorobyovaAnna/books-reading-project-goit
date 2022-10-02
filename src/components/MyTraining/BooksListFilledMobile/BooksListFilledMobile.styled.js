import styled from 'styled-components';
import { Button } from 'antd';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  display: block;
  width: 171px;
  height: 42px;
  margin: 32px auto 0 auto;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accentColor};
`;
