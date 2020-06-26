import React from 'react';
import { Credentials } from '../Pages/SignInPage';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

type Props = {
  setCredentials: (e: any) => void;
  credentials: Credentials;
  attemptLogIn: (e: any) => void;
};

const SignInComponent = ({
  setCredentials,
  credentials,
  attemptLogIn,
}: Props) => {
  const { username, password } = credentials;
  return (
    <Form onSubmit={(e) => attemptLogIn(e)}>
      <Col>
        <FormGroup>
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="exampleUsername"
            value={username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </FormGroup>
      </Col>
      <Button>Submit</Button>
    </Form>
  );
};

export default SignInComponent;
