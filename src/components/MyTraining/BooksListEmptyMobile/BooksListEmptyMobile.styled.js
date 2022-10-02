import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
  height: 168px;
  margin-top: 32px;
  margin-bottom: 33px;
  padding: 32px 0 32px 40px;

  border-top: 1px solid ${p => p.theme.colors.borderColor};
  border-bottom: 1px solid ${p => p.theme.colors.borderColor};
`;

export const StyledTable = styled.table`
  width: 100%;

  font-weight: 500;
  font-size: 12px;
  line-height: 2;

  color: ${p => p.theme.colors.mainFontColor};

  tbody {
    td {
      :nth-child(1) {
        color: ${p => p.theme.colors.secondaryFontColor};
        width: 30%;
      }
    }
  }
`;

export const StyledIcon = styled.div`
  position: absolute;
  z-index: 10;
  top: 32px;
  left: 0;
`;
