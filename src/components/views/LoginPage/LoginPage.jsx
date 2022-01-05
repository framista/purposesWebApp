import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
  auth,
  loginWithEmailAndPassword,
  signInWithGoogle,
} from '../../../services/firebase';
import { useInputChange } from '../../../hooks';
import { Button, Input, PasswordInput, GoogleButton } from '../../common/Form';

import { getInitialState } from './LoginPage.helpers';

import './LoginPage.scss';

const LoginPage = () => {
  const [state, handlers] = useInputChange(getInitialState());
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user, loading]);

  const onSubmit = () => loginWithEmailAndPassword(state.email, state.password);

  return (
    <div className="loginPage">
      <article className="loginPage__content">
        <hgroup className="loginPage__header">
          <h1>Sign in</h1>
          <h2>And achieve your goals 🏆💪🥇 </h2>
        </hgroup>
        <div className="loginPage__image">
          <img src={'images/goals.svg'} alt="goals" />
        </div>
        <form className="loginPage__form">
          <Input
            errorMessage={state.errors.email}
            id="email"
            placeholder="example@com.pl"
            labelText="Email"
            value={state.email}
            onChange={handlers.changeInput}
            autoFocus
          />
          <PasswordInput
            errorMessage={state.errors.password}
            id="password"
            labelText="Password"
            value={state.password}
            onChange={handlers.changeInput}
          />
          <Button onClick={onSubmit}>Login</Button>
          <GoogleButton onClick={signInWithGoogle} loading={loading} />
        </form>
      </article>
    </div>
  );
};

export default LoginPage;
