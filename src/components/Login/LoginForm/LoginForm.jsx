import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';

import { authOperations } from 'redux/auth';
import { getIsLoggedIn, getIsPendingState } from 'redux/auth';
import { booksApi } from 'redux/RTKQuery/booksApi';

import {
  FormWrapper,
  Overlay,
  StyledForm,
  FieldWrapper,
  FieldName,
  AccentedMark,
  StyledField,
  ValidationError,
  GoogleButton,
  SubmitButton,
  StyledLink,
  ClosedEyeIcon,
  OpenEyeIcon,
} from './LoginForm.styled';

const validationSchema = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .min(10, 'Email must contain at least 10 characters')
    .max(63, 'Email must contain no more than 63 characters')
    .matches(/^[a-zA-Z0-9]/, 'Name must start with letter or number')
    .matches(
      /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{2,})+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'The Email field can only contain Latin letters, numbers and signs, and at least 2 charachters before "@"'
    )
    .required('Email is a required field'),
  password: yup
    .string('Enter your password')
    .matches(/^[a-zA-Z0-9]/, 'Password must start with letter or number')
    .matches(
      /^([a-zA-Z0-9@.!#$%&’*+/=?^_`{|}~-])*$/,
      'Password must not contain spaces'
    )
    .min(5, 'Password is too short - should be 5 chars minimum')
    .max(30, 'Password must contain no more than 30 characters')
    .required('Password is a required field'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isPending = useSelector(getIsPendingState);

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const handleSubmit = (values, actions) => {
    dispatch(
      booksApi.util.invalidateTags([
        { type: 'Books' },
        { type: 'BookById' },
        { type: 'Trainings' },
        { type: 'Statistics' },
      ])
    );
    dispatch(authOperations.logIn(values));

    isLoggedIn && actions.resetForm();
  };

  const toggleEye = () => {
    setIsVisiblePassword(!isVisiblePassword);
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
          {({ isValid, touched }) => {
            return (
              <StyledForm name="LoginForm">
                <GoogleButton href="https://books-reading-nodejs-final-project.onrender.com/api/auth/google">
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
                  />
                  <ValidationError name="email" component="div" />
                </FieldWrapper>

                <FieldWrapper>
                  <FieldName htmlFor="password">
                    Пароль <AccentedMark>*</AccentedMark>
                  </FieldName>
                  <StyledField
                    id="password"
                    name="password"
                    type={isVisiblePassword ? 'text' : 'password'}
                    placeholder="Пароль"
                    autoComplete="off"
                  />
                  <ClosedEyeIcon
                    visibility={isVisiblePassword.toString()}
                    onClick={toggleEye}
                  />
                  <OpenEyeIcon
                    visibility={isVisiblePassword.toString()}
                    onClick={toggleEye}
                  />
                  <ValidationError name="password" component="div" />
                </FieldWrapper>

                <SubmitButton
                  type="submit"
                  disabled={(!touched.email && !touched.password) || !isValid}
                >
                  Увійти
                  {isPending && <PulseLoader color="white" size="4px" />}
                </SubmitButton>
                <StyledLink to="/register">Реєстрація</StyledLink>
              </StyledForm>
            );
          }}
        </Formik>
      </FormWrapper>
    </>
  );
};

export default LoginForm;
