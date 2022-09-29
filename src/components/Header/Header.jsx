import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserName, getIsLoggedIn } from 'redux/auth';
import operations from 'redux/auth/auth-operations';
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
import Modal from 'components/modals/Modal/Modal';
import ExitModal from 'components/modals/ExitModal';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isMobile } = useMatchMedia();

  // видалити < ?? 'PLACEHOLDER' >
  const userName = useSelector(getUserName) ?? 'PLACEHOLDER';
  const firstLetter = userName[0];

  // видалити < || true >
  const isLoggedIn = useSelector(getIsLoggedIn) || true;

  const toggleModal = () => setIsModalVisible(!isModalVisible);
  const handleLogOut = () => {
    dispatch(operations.logOut());
    toggleModal();
    navigate('/login');
  };

  return (
    <>
      <BackgroundWrapper>
        <Container>
          <HeaderWrapper>
            {isMobile && (
              <>
                <Logo>BR</Logo>
                {isLoggedIn && (
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
                    <ExitButton onClick={toggleModal}>Вихід</ExitButton>
                  </FlexWrapper>
                )}
              </>
            )}
            {!isMobile && (
              <>
                <Logo>BR</Logo>
                {isLoggedIn && (
                  <>
                    <FlexWrapper>
                      <UserLogo>{firstLetter}</UserLogo>
                      <UserName>{userName}</UserName>
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
                      <ExitButton onClick={toggleModal}>Вихід</ExitButton>
                    </FlexWrapper>
                  </>
                )}
              </>
            )}
          </HeaderWrapper>
        </Container>
      </BackgroundWrapper>
      {isModalVisible && (
        <Modal onClose={toggleModal}>
          <ExitModal onClose={toggleModal} onLogOut={handleLogOut} />
        </Modal>
      )}
    </>
  );
};

export default Header;
