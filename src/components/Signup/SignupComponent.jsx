import { useMatchMedia } from 'hooks';
import SignupForm from './SignupForm';
import AboutApp from './AboutApp';
import { SignupSection } from './SignupComponent.styled';

const SignupComponent = () => {
  const { isMobile } = useMatchMedia();
  return (
    <SignupSection>
      <SignupForm />
      {!isMobile && <AboutApp />}
    </SignupSection>
  );
};

export default SignupComponent;
