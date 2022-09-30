import { Formik } from 'formik';
import * as yup from 'yup';
import { FcGoogle } from 'react-icons/fc';

import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import {
  FormWrapper,
  Overlay,
  Form,
  FieldWrapper,
  FieldName,
  AccentedMark,
  StyledField,
  ValidationError,
  GoogleButton,
  SubmitButton,
  StyledLink,
} from './LoginForm.styled';

const validationSchema = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is a required field'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('Password is a required field'), //можна додати npm yup-password
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const { email, password } = values;

    dispatch(authOperations.register(email, password));

    actions.resetForm();
  };

  return (
    <>
      <FormWrapper>
        <Overlay />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {props => {
            // console.log(props);
            return (
              <Form
                name="LoginForm"
                method="post"
                // onSubmit={props.handleSubmit}
              >
                <GoogleButton
                  href="https://nodejs-final-project-goit.herokuapp.com/api/auth/google"
                  target="_blank"
                >
                  <FcGoogle />
                  Google
                </GoogleButton>

                <FieldWrapper>
                  <FieldName htmlFor="email">
                    Електронна адреса <AccentedMark>*</AccentedMark>
                  </FieldName>
                  <StyledField
                    id="email"
                    name="email"
                    type="text"
                    placeholder="your@email.com"
                    autoComplete="off"
                    // valid={props.touched.email && !props.errors.email}
                    // error={props.touched.email && props.errors.email}
                  />
                  {props.errors.email && props.touched.email && (
                    <ValidationError name="email" component="div" />
                  )}
                </FieldWrapper>

                <FieldWrapper>
                  <FieldName htmlFor="password">
                    Пароль <AccentedMark>*</AccentedMark>
                  </FieldName>
                  <StyledField
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    autoComplete="off"
                    // valid={props.touched.password && !props.errors.password}
                    // error={props.touched.password && props.errors.password}
                  />
                  {props.errors.password && props.touched.password && (
                    <ValidationError name="password" component="div" />
                  )}
                </FieldWrapper>

                <SubmitButton
                  type="submit"
                  disabled={!props.isValid || props.isSubmitting}
                >
                  Увійти
                </SubmitButton>
                <StyledLink to="/register">Реєстрація</StyledLink>
              </Form>
            );
          }}
        </Formik>
      </FormWrapper>
    </>
  );
};

export default LoginForm;
