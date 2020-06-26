import React, { useState } from 'react';
import SignInPage from './Pages/SignInPage';
import DashboardPage from './Pages/DashboardPage';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ParentState {
  loggedIn: boolean;
  token: null | string;
}

function App() {
  const [loggedInData, setLoggedInData] = useState<ParentState>({
    loggedIn: false,
    token: null,
  });

  const handleSuccessfulLogIn = (token: string) => {
    setLoggedInData({
      loggedIn: true,
      token,
    });
  };

  const { loggedIn, token } = loggedInData;
  return (
    // if logged in show Dashboard, else show sign in page
    <div className="p-4">
      {loggedIn ? (
        <DashboardPage token={token} />
      ) : (
        <SignInPage handleSuccessfulLogIn={handleSuccessfulLogIn} />
      )}
    </div>
  );
}

export default App;
