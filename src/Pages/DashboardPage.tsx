import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardComponent from '../Components/DashboardComponent';
import { Alert } from 'reactstrap';

type Props = {
  token: string | null;
};

interface DashboardState {
  data: Object;
}

const DashboardPage = ({ token }: Props) => {
  const [data, setData] = useState({ domains: [], error: false });

  //fetch data only on component mount
  useEffect(() => {
    const url: string = 'https://api.intelliscan.io/user/domains/';
    const headerConfig = {
      headers: { token },
    };
    const fetchData = async () => {
      try {
        const res = await axios.get(url, headerConfig);
        if (res.status === 200) {
          setData({ ...data, domains: res.data.domains });
        }
      } catch (error) {
        setData({ ...data, error: true });
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { domains, error } = data;

  return (
    <div>
      <h2 className="display-4 mb-4">Dashboard</h2>
      {/* If error on fetching data show error, else show Dashboard */}
      {error ? (
        <Alert color="danger">Problem fetching data</Alert>
      ) : (
        <DashboardComponent domains={domains} />
      )}
    </div>
  );
};

export default DashboardPage;
