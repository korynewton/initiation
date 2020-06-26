import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

type Props = {
  domains: String[];
};

const DashboardComponent = ({ domains }: Props) => {
  return (
    <div className="w-50 mx-auto">
      <Card>
        <CardBody>
          <CardTitle>Domains:</CardTitle>
          <CardText>
            <ul className="list-group list-group-flush">
              {domains.map((domain) => (
                <li className="list-group-item">
                  <a
                    rel="noopener noreferrer"
                    href={`https://${domain}`}
                    target="_blank"
                  >
                    {domain}
                  </a>
                </li>
              ))}
            </ul>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default DashboardComponent;
