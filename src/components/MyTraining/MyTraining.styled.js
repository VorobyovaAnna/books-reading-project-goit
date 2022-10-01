import styled from 'styled-components';
import { Button } from 'antd';

export const StyledAddButton = styled(Button)`
  position: sticky;
  bottom: 0;
  z-index: 2;
  left: 50%;

  transform: translate(-50%, -50%);

  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 50%;

  background-color: ${p => p.theme.colors.accentColor};

  &:hover {
    background-color: ${p => p.theme.colors.accentColor};
    transform: translate(-50%, -50%) scale(1.1);
  }
`;
