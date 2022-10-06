import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { booksApi } from 'redux/RTKQuery/booksApi';

const GoogleRedirect = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const name = searchParams.get('name');
  const email = searchParams.get('email');
  dispatch(
    booksApi.util.invalidateTags([
      { type: 'Books' },
      { type: 'BookById' },
      { type: 'Trainings' },
      { type: 'Statistics' },
    ])
  );
  dispatch(authOperations.authGoogle({ token, user: { email, name } }));
  // dispatch(authOperations.fetchCurrentUser());

  return <p>Google login succeeded</p>;
};

export default GoogleRedirect;
