import styled from 'styled-components';

import device from 'styles/device';

export const LoginSection = styled.section`
  margin: 0 auto;

  @media ${device.desktop} {
    display: flex;
    justify-content: center;
    /* flex-wrap: no-wrap; */
  } ;
`;
