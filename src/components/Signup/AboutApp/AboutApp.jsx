import { useMatchMedia } from 'hooks';

import {
  AboutAppWrapper,
  AppName,
  BulletsTitle,
  BulletList,
  Bullet,
  ButtonsDiv,
  ButtonWhite,
  ButtonOrange,
} from './AboutApp.styled';

const AboutApp = () => {
  const { isMobile } = useMatchMedia();

  return (
    <AboutAppWrapper>
      <AppName>Books Reading</AppName>
      <BulletsTitle>Допоможе вам</BulletsTitle>
      <BulletList>
        <Bullet>Швидше сформулювати свою ціль і розпочати читати</Bullet>
        <Bullet>Пропорційно розподілити навантаження на кожний день</Bullet>
        <Bullet>Відстежувати особистий успіх</Bullet>
      </BulletList>
      <br />
      <BulletsTitle>Також ви зможете</BulletsTitle>
      <BulletList>
        <Bullet>Формувати особисту думку незалежну від інших</Bullet>
        <Bullet>
          Підвищити свої професійні якості опираючись на нові знання
        </Bullet>
        <Bullet>Стати цікавим співрозмовником</Bullet>
      </BulletList>

      {isMobile && (
        <ButtonsDiv>
          <ButtonWhite to="/login">Увійти</ButtonWhite>
          <ButtonOrange to="/register">Реєстрація</ButtonOrange>
        </ButtonsDiv>
      )}
    </AboutAppWrapper>
  );
};

export default AboutApp;
