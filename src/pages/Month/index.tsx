import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';
import { Container } from './styles';

interface DayDate {
  date: string;
  weekday: string;
  celebrations: {
    title: string;
    colour: string;
    rank: string;
  };
}

interface DayParams {
  month: string;
}

interface CelebrationsProps {
  date: string;
  celebrations: {
    rank: string;
  };
}

const Month: React.FC = () => {
  const [months, setMonth] = useState<DayDate[]>([]);
  const [celebrations, setCelebration] = useState<CelebrationsProps[]>([]);
  const { params } = useRouteMatch<DayParams>();

  useEffect(() => {
    api.get(`/${params.month}`).then(response => {
      console.log(setCelebration(response.data));
      setCelebration(response.data);
      setMonth(response.data);
    });
  }, [params.month]);

  return (
    <>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Weekday</th>
              <th>Rank</th>
            </tr>
          </thead>
          {months.map(month => (
            <tbody key={month.date}>
              <tr>
                <td>{month.date}</td>
                <td>{month.weekday}</td>
                <td>{month.celebrations.rank}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </Container>

      {celebrations.map(m => (
        <p key={m.date}> {m.celebrations.rank}</p>
      ))}
    </>
  );
};

export default Month;
