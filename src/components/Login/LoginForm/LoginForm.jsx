import { Formik } from 'formik';
import * as yup from 'yup';
import { FcGoogle } from 'react-icons/fc';

// import Container from 'components/Container';

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
  //   const [formValues, setFormValues] = useState();

  return (
    <>
      <FormWrapper>
        <Overlay />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            // console.log(values);
            // setFormValues(values);

            const timeOut = setTimeout(() => {
              actions.setSubmitting(false);

              clearTimeout(timeOut);
            }, 1000);
          }}
        >
          {props => {
            // console.log(props);
            return (
              <Form
                name="LoginForm"
                method="post"
                onSubmit={props.handleSubmit}
              >
                <GoogleButton
                  type="button"
                  onClick={() => alert('Нажали на гугл-кнопку')}
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
                    valid={props.touched.email && !props.errors.email}
                    error={props.touched.email && props.errors.email}
                  />
                  {props.errors.email && props.touched.email && (
                    <ValidationError name="email" component="div" />
                  )}
                </FieldWrapper>

                <FieldWrapper>
                  <FieldName htmlFor="email">
                    Пароль <AccentedMark>*</AccentedMark>
                  </FieldName>
                  <StyledField
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    autoComplete="off"
                    valid={props.touched.password && !props.errors.password}
                    error={props.touched.password && props.errors.password}
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
