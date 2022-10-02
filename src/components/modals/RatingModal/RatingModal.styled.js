import styled from 'styled-components';
import { ReactComponent as StarEmptyIcon } from 'images/svg/star-empty.svg';
import { ReactComponent as StarFullIcon } from 'images/svg/star-full.svg';

export const StyledRatingBox = styled.div`
  width: 100%;
  max-width: 280px;
  max-height: 395px;
  padding: 20px 20px 40px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.modal};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 608px;
    max-height: 399px;
  }
`;

export const StyledRatingText = styled.p`
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 12px;
  }
`;
export const StyledRatingResumeText = styled.span`
  font-size: 16px;
  line-height: 1.25;
`;
export const StyledRatingForm = styled.form``;
export const StyledRatingTextArea = styled.textarea`
  display: block;
  margin-bottom: 20px;
  margin-top: 8px;
  padding: 8px;
  resize: none;
  width: 100%;
  height: 170px;
  border: 1px solid ${({ theme }) => theme.colors.placeholderFontColor};
  border-radius: 4px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 170px;
    margin-bottom: 28px;
    margin-top: 12px;
  }
`;

export const StyledRatingButtonSave = styled.button`
  height: 40px;
  min-width: 98px;
  padding: 0;
  margin-right: ${props => props.marginRight || '0px'};
  font-size: 14px;
  line-height: 1.21;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.mainFontColor};
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accentColor};
    outline: 1px solid ${({ theme }) => theme.colors.accentColor};
    box-shadow: ${({ theme }) => theme.shadows.instrustion};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.headerBackground};
    outline: ${({ theme }) => theme.colors.headerBackground};
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 130px;
  }
`;
export const StyledRatingLabel = styled.label`
  position: relative;
  display: block;
  width: 100%;
  margin-top: 20px;
`;

export const StyledRatingButtonBack = styled(StyledRatingButtonSave).attrs(
  props => ({
    type: 'button',
  })
)``;

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SvgEmptyStar = styled(StarEmptyIcon)`
  display: inline;
`;

export const SvgFullStar = styled(StarFullIcon)`
  display: inline;
`;
