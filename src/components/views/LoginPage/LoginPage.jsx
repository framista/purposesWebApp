import React from 'react';
import { useInputChange } from '../../../hooks';
import { Button, Input, PasswordInput } from '../../common/Form';

import { getInitialState } from './LoginPage.helpers';

import './LoginPage.scss';

const LoginPage = () => {
  const [state, handlers] = useInputChange(getInitialState());

  return (
    <main class="container">
      <article class="grid">
        <div>
          <hgroup>
            <h1>Sign in</h1>
            <h2>And achieve your goals 🏆💪🥇</h2>
          </hgroup>
          <form>
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
            <Button>Login</Button>
          </form>
        </div>
        <div className="loginPage__image">
          <img src={'images/goals.svg'} />
        </div>
      </article>
    </main>
  );
};

export default LoginPage;
