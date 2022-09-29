import LoginForm from './LoginForm';
import Quote from './Quote';

import { LoginSection } from './LoginComponent.styled';

const LoginComponent = () => {
  return (
    <LoginSection>
      <LoginForm />
      <Quote />
    </LoginSection>
  );
};

export default LoginComponent;
