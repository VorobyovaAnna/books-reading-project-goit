import SignupForm from './SignupForm';
import AboutApp from './AboutApp';
import { SignupSection } from './SignupComponent.styled';

const SignupComponent = () => {

  return (
    <SignupSection>
      <SignupForm />
      <AboutApp />
    </SignupSection>
  );
};

export default SignupComponent;
