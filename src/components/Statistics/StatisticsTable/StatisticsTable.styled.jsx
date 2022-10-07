import styled from 'styled-components';

export const StyledTable = styled.table`
  font-family: 'Montserrat';
  font-size: 14px;
  line-height: 1.2;
  font-weight: 500;

  width: 100%;

  border-spacing: 0;
  border-collapse: separate;

  thead {
    background-color: ${p => p.theme.colors.mainBackground};
    margin: 0;
    position: sticky;
    top: 0;

    th {
      color: ${p => p.theme.colors.secondaryFontColor};
      text-align: left;
      border-top: 1px solid #e0e5eb;
      border-bottom: 1px solid #e0e5eb;
      padding-top: 12px;
      padding-bottom: 12px;
    }
  }

  tbody {
    tr {
      td {
        padding-top: 10px;
        padding-bottom: 10px;

        :nth-child(1) {
          width: 40%;
        }

        :nth-child(2) {
          width: 25%;
        }

        :nth-child(3) {
          width: 20%;
        }

        :nth-child(4) {
          width: 15%;
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

export const Wrapper = styled.div`
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(177, 181, 194, 0.25);
  }

  ::-webkit-scrollbar-thumb {
    background: #b1b5c2;
  }

  height: 216px;
  overflow: auto;

  @media (min-width: ${p => p.theme.breakpoints.tablet}) {
    margin-top: 40px;
  }

  @media (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 928px;
    margin-top: 44px;
  }
`;
