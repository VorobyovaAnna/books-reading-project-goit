import styled from 'styled-components';

export const StyledList = styled.ul`
  border-top: 1px solid ${p => p.theme.colors.borderColor};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledItem = styled.li`
  display: flex;

  padding: 20px 10px 28px 20px;

  border-bottom: 1px solid ${p => p.theme.colors.borderColor};

  color: ${p => p.theme.colors.mainFontColor};
`;

export const StyledIconBox = styled.div`
  width: 22px;
  height: 17px;

  margin-right: 19px;
`;

export const StyledBookTitle = styled.h3`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;

  margin-bottom: 12px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const StyledText = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
`;

export const PropertyName = styled(StyledText)`
  color: ${p => p.theme.colors.secondaryFontColor};
  width: 80px;
`;

export const Wrapper = styled.div`
  margin-top: 20px;
`;
