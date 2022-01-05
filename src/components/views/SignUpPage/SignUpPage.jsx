import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, registerWithEmailAndPassword } from '../../../services/firebase';
import { useInputChange } from '../../../hooks';
import { Button, Input, PasswordInput } from '../../common/Form';

import { getInitialState } from './SignUpPage.helpers';

import './SignUpPage.scss';

const SignUpPage = () => {
  const [state, handlers] = useInputChange(getInitialState());
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user, loading]);

  const onSubmit = () =>
    registerWithEmailAndPassword(state.name, state.email, state.password);

  return (
    <div className="signUpPage">
      <article className="signUpPage__content">
        <h3 className="signUpPage__title">Sign up</h3>
        <form className="signUpPage__form">
          <Input
            errorMessage={state.errors.email}
            id="email"
            placeholder="example@com.pl"
            labelText="Email"
            value={state.email}
            onChange={handlers.changeInput}
            autoFocus
          />
          <Input
            errorMessage={state.errors.name}
            id="name"
            labelText="Name"
            placeholder="Enter your name"
            value={state.name}
            onChange={handlers.changeInput}
          />
          <PasswordInput
            errorMessage={state.errors.password}
            id="password"
            labelText="Password"
            value={state.password}
            onChange={handlers.changeInput}
          />
          <Button onClick={onSubmit}>Sign Up</Button>
        </form>
      </article>
    </div>
  );
};

export default SignUpPage;
