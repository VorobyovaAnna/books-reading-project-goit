import { Button } from 'antd';
import styled from 'styled-components';

export const StyledTable = styled.table`
  font-family: 'Montserrat';
  font-size: 14px;
  line-height: 1.2;
  font-weight: 500;

  width: 100%;

  border-spacing: 0 8px;
  border-collapse: separate;

  thead {
    th {
      color: ${p => p.theme.colors.secondaryFontColor};
      text-align: left;
    }
  }

  tbody {
    tr {
      height: 62px;
      background-color: #fff;
      box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

      td {
        :nth-child(1) {
          width: 30%;
        }

        :nth-child(2) {
          width: 20%;
        }

        :nth-child(3) {
          width: 8%;
        }

        :nth-child(4) {
          width: 8%;
        }

        :nth-child(5) {
          width: 20%;
        }

        :nth-child(6) {
          width: 14%;
        }

        @media (min-width: ${p => p.theme.breakpoints.desktop}) {
          :nth-child(5) {
            width: 17%;
          }

          :nth-child(6) {
            width: 17%;
          }
        }
      }
    }
  }
`;

export const StyledBookTitle = styled.div`
  padding-left: 20px;
  display: flex;

  align-items: center;
`;

export const StyledIconBox = styled.div`
  margin-right: 10px;
`;

export const StyledTitle = styled.h3`
  margin-bottom: 16px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 19px;
  line-height: 1.2;
`;

export const StyledBtn = styled(Button)`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;

  min-height: 40px;
  min-width: 80px;

  border: none;
  border-radius: 0;

  background-color: ${p => p.theme.colors.btnBackground};

  box-shadow: ${p => p.theme.shadows.instrustion};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondaryFontColor};
  }

  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    min-width: 130px;
  }
`;

export const Wrapper = styled.div`
  :not(:last-child) {
    @media (min-width: ${p => p.theme.breakpoints.tablet}) {
      margin-bottom: 40px;
    }

    @media (min-width: ${p => p.theme.breakpoints.desktop}) {
      margin-bottom: 32px;
    }
  }
`;
