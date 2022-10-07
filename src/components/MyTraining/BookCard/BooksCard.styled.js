import styled from 'styled-components';
import { Button } from 'antd';

export const StyledWrapper = styled.li`
  position: relative;
  height: 168px;
  padding: 20px 46px 0px 34px;

  border-bottom: 1px solid ${p => p.theme.colors.borderColor};
`;

export const StyledTable = styled.table`
  width: 100%;

  font-weight: 500;
  font-size: 12px;
  line-height: 2.8;

  color: ${p => p.theme.colors.mainFontColor};

  tbody {
    td {
      :nth-child(1) {
        color: ${p => p.theme.colors.secondaryFontColor};
        width: 35%;
      }
    }
  }
`;

export const StyledIcon = styled.div`
  position: absolute;
  z-index: 10;
  top: 20px;
  left: 0;
`;

export const StyledDeleteButton = styled(Button)`
  position: absolute;
  z-index: 10;
  top: 15px;
  right: 0;
  padding: 0;

  color: ${p => p.theme.colors.placeholderFontColor};
  background: none;
  border: none;

  &:hover {
    color: ${p => p.theme.colors.accentColor};
    background: none;
  }
`;

export const StyledTitle = styled.p`
  width: 200px;
  margin-bottom: 12px;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
`;
