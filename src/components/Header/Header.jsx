import { HiOutlineBookOpen } from 'react-icons/hi';
import { MdOutlineHome } from 'react-icons/md';
import { ImStatsDots } from 'react-icons/im';
import {
  HeaderWrapper,
  Logo,
  StatsLink,
  StyledLink,
  UserLogo,
  UserName,
  ExitButton,
  FlexWrapper,
  BackgroundWrapper,
} from './Header.styled';
import Container from 'components/Container';
import { useMatchMedia } from 'hooks';

const Header = () => {
  const user = {
    name: 'Martha Stewart',
  };
  const firstLetter = user.name[0];

  const { isMobile } = useMatchMedia();

  return (
    <BackgroundWrapper>
      <Container>
        <HeaderWrapper>
          {isMobile && (
            <>
              <Logo>BR</Logo>
              <FlexWrapper>
                <StyledLink to="/library">
                  <MdOutlineHome size={18} />
                </StyledLink>
                <StyledLink to="/training">
                  <HiOutlineBookOpen size={18} />
                </StyledLink>
                <StatsLink to="/statistics">
                  <ImStatsDots size={18} />
                </StatsLink>
                <UserLogo>{firstLetter}</UserLogo>
                <ExitButton text>Вихід</ExitButton>
              </FlexWrapper>
            </>
          )}
          {!isMobile && (
            <>
              <Logo>BR</Logo>
              <FlexWrapper>
                <UserLogo>{firstLetter}</UserLogo>
                <UserName>{user.name}</UserName>
              </FlexWrapper>
              <FlexWrapper>
                <StyledLink to="/library">
                  <MdOutlineHome size={20} />
                </StyledLink>
                <StyledLink to="/training">
                  <HiOutlineBookOpen size={20} />
                </StyledLink>
                <StatsLink to="/statistics">
                  <ImStatsDots size={16} />
                </StatsLink>
                <ExitButton>Вихід</ExitButton>
              </FlexWrapper>
            </>
          )}
        </HeaderWrapper>
      </Container>
    </BackgroundWrapper>
  );
};

export default Header;
