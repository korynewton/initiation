import React, { useState } from 'react';
import SignInComponent from '../Components/SignInComponent';
import axios from 'axios';
import { Alert, Container } from 'reactstrap';

type Props = {
  handleSuccessfulLogIn: (token: string) => void;
};

export interface Credentials {
  username: string;
  password: string;
}

const SignInPage = ({ handleSuccessfulLogIn }: Props) => {
  // store username in password
  const [credentials, setCredentials] = useState<Credentials>({
    username: '',
    password: '',
  });
  // store login outcome
  const [logInOutcome, setLogInOutcome] = useState<String>('');

  const attemptLogIn = async (event: any) => {
    event.preventDefault();
    const { username, password } = credentials;
    // if user has set username & password, make POST request
    // else show error message
    if (username && password) {
      try {
        const url = 'https://api.intelliscan.io/user/sign-in/';
        const { data } = await axios.post(url, credentials);
        setLogInOutcome('success');
        // pause for 1 second to show success message
        setTimeout(() => {
          handleSuccessfulLogIn(data.token);
        }, 1000);
      } catch (error) {
        // show error message
        setLogInOutcome('error');
      }
    } else {
      setLogInOutcome('missing');
    }
  };

  return (
    <div>
      <h2 className="display-4 mb-4">Sign In</h2>
      <Container className="p-4 w-50">
        {/* show user alert when appropriate */}
        {logInOutcome === 'error' ? (
          <Alert color="danger">
            Incorrect Username or Password. Try again.
          </Alert>
        ) : logInOutcome === 'missing' ? (
          <Alert color="danger">Missing Username or Password. Try again.</Alert>
        ) : logInOutcome === 'success' ? (
          <Alert color="success">Success!</Alert>
        ) : null}

        <SignInComponent
          setCredentials={setCredentials}
          credentials={credentials}
          attemptLogIn={attemptLogIn}
        />
      </Container>
    </div>
  );
};

export default SignInPage;
