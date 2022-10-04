import SignupForm from './SignupForm';
import AboutApp from './AboutApp';
import { SignupSection } from './SignupComponent.styled';
import { useMatchMedia } from 'hooks';

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
