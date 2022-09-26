import { useState } from 'react';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { MdOutlineHome } from 'react-icons/md';
import {
  HeaderWrapper,
  Logo,
  TrainingLink,
  LibraryLink,
  UserLogo,
  UserName,
  ExitButton,
  FlexWrapper,
} from './Header.styled';

const Header = () => {
  const user = {
    name: 'Martha Stewart',
  };
  const firstLetter = user.name[0];

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  window.onresize = e => {
    setScreenWidth(e.target.outerWidth);
    //  console.log(screenWidth);
  };

  return (
    <HeaderWrapper>
      {screenWidth < 768 && (
        <>
          <Logo>BR</Logo>
          <FlexWrapper>
            <TrainingLink to="/training">
              <HiOutlineBookOpen size={18} />
            </TrainingLink>
            <LibraryLink to="/library">
              <MdOutlineHome size={18} />
            </LibraryLink>
            <UserLogo>{firstLetter}</UserLogo>
            <ExitButton>Вихід</ExitButton>
          </FlexWrapper>
        </>
      )}
      {screenWidth > 767 && (
        <>
          <Logo>BR</Logo>
          <FlexWrapper>
            <UserLogo>{firstLetter}</UserLogo>
            <UserName>{user.name}</UserName>
          </FlexWrapper>
          <FlexWrapper>
            <TrainingLink to="/training">
              <HiOutlineBookOpen size={18} />
            </TrainingLink>
            <LibraryLink to="/library">
              <MdOutlineHome size={18} />
            </LibraryLink>
            <ExitButton>Вихід</ExitButton>
          </FlexWrapper>
        </>
      )}
    </HeaderWrapper>
  );
};

export default Header;
