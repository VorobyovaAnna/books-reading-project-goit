import { useState } from 'react';
import { HiOutlineBookOpen } from 'react-icons/hi'
import { MdOutlineHome } from 'react-icons/md'
import { HeaderWrapper, Logo, Link, Home, UserLogo, UserName, ExitButton, FlexWrapper} from './Header.styled';
 
const Header = () => {
    const user = {
        name: 'Martha Stewart',
    }
    const firstLetter = user.name[0];

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    window.onresize = (e) => {
        setScreenWidth (e.target.outerWidth);
        //  console.log(screenWidth);
    }
    
    return (<HeaderWrapper>
        {screenWidth < 768 && <>
        <Logo>BR</Logo>
        <FlexWrapper>
            <Link href="aaa">
            <HiOutlineBookOpen size={18} />
        </Link>
        <Home href="bbb">
            <MdOutlineHome size={18}/>
        </Home>
        <UserLogo>{firstLetter}</UserLogo>
        <ExitButton>Вихід</ExitButton>
        </FlexWrapper>
        </>}
        {screenWidth > 767 && <>
            <Logo>BR</Logo>
            <FlexWrapper>
                <UserLogo>{firstLetter}</UserLogo>
                <UserName>{user.name}</UserName>
            </FlexWrapper>
            <FlexWrapper>
                <Link href="dfdfdf">
                    <HiOutlineBookOpen size={18} />
                </Link>
            <Home href="dfdfdf">
                <MdOutlineHome size={18}/>
            </Home>
            <ExitButton>Вихід</ExitButton>
        </FlexWrapper>
        {/* <FlexWrapper>
            <Link href="dfdfdf">
            <HiOutlineBookOpen size={18} />
        </Link>
        <Home href="dfdfdf">
            <MdOutlineHome size={18}/>
        </Home>
        <UserLogo>{firstLetter}</UserLogo>
        <ExitButton>Вихід</ExitButton>
        </FlexWrapper> */}
        </>}
            </HeaderWrapper>)
}

export default Header;