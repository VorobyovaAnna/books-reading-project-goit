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
  IsRegistredParagraph,
  LoginLinkWrapper,
} from './SignupForm.styled';

const validationSchema = yup.object().shape({
  name: yup.string('Enter your name').required('Name is a required field'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is a required field'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('Password is a required field'),
  confirmPassword: yup
    .string('Confirm your password')
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Password confirmation is a required field'), //можна додати npm yup-password
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignupForm = () => {
  const dispatch = useDispatch();
  //   const [formValues, setFormValues] = useState();
  const handleSubmit = (values, actions) => {
    const { name, email, password } = values;

    dispatch(authOperations.register(name, email, password));

    actions.resetForm();
    // setFormValues(values);
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
                name="SignupForm"
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
                  <FieldName htmlFor="name">
                    Ім'я <AccentedMark>*</AccentedMark>
                  </FieldName>
                  <StyledField
                    id="name"
                    name="name"
                    type="text"
                    placeholder="..."
                    autoComplete="off"
                    // valid={props.touched.email && !props.errors.email}
                    // error={props.touched.email && props.errors.email}
                  />
                  {props.errors.name && props.touched.name && (
                    <ValidationError name="name" component="div" />
                  )}
                </FieldWrapper>

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
                    placeholder="..."
                    autoComplete="off"
                    // valid={props.touched.password && !props.errors.password}
                    // error={props.touched.password && props.errors.password}
                  />
                  {props.errors.password && props.touched.password && (
                    <ValidationError name="password" component="div" />
                  )}
                </FieldWrapper>

                <FieldWrapper>
                  <FieldName htmlFor="email">
                    Підтвердити пароль <AccentedMark>*</AccentedMark>
                  </FieldName>
                  <StyledField
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="..."
                    autoComplete="off"
                    // valid={props.touched.password && !props.errors.password}
                    // error={props.touched.password && props.errors.password}
                  />
                  {props.errors.confirmPassword &&
                    props.touched.confirmPassword && (
                      <ValidationError name="confirmPassword" component="div" />
                    )}
                </FieldWrapper>

                <SubmitButton
                  type="submit"
                  disabled={!props.isValid || props.isSubmitting}
                >
                  Зареєструватися
                </SubmitButton>
                <LoginLinkWrapper>
                  <IsRegistredParagraph>Вже з нами?</IsRegistredParagraph>
                  <StyledLink to="/login">Увійти</StyledLink>
                </LoginLinkWrapper>
              </Form>
            );
          }}
        </Formik>
      </FormWrapper>
    </>
  );
};

export default SignupForm;
