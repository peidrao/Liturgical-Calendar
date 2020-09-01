import React, { useEffect, useState } from 'react';
import { IoMdReturnLeft } from 'react-icons/io';
import { useRouteMatch, Link } from 'react-router-dom';

import api from '../../services/api';
import {
  Header,
  Container,
  CircleRed,
  CircleGreen,
  CircleWhite,
  CircleViolet,
} from './styles';

interface CelebrationsProps {
  title: string;
  rank: string;
  colour: string;
}

interface DayDate {
  date: string;
  weekday: string;
  celebrations: CelebrationsProps[];
}
interface DayParams {
  month: string;
}

const Month: React.FC = () => {
  const [months, setMonth] = useState<DayDate[]>([]);
  const { params } = useRouteMatch<DayParams>();

  useEffect(() => {
    api.get(`/${params.month}`).then(response => {
      setMonth(response.data);
    });
  }, [params.month]);

  return (
    <>
      <Header>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <IoMdReturnLeft size={20} />
        </Link>
        Voltar
      </Header>

      <Container>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Weekday</th>
              <th>Title </th>
              <th>Rank</th>
              <th>Colour</th>
            </tr>
          </thead>
          {months.map(month => (
            <tbody key={month.date}>
              <tr>
                <td>{month.date}</td>
                <td>{month.weekday}</td>
                <td>
                  <ul>
                    {month.celebrations.map(teste => (
                      <li key={month.date}>
                        {teste.title}
                        {teste.rank}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {month.celebrations.map(teste => (
                      <li key={month.date}>{teste.rank}</li>
                    ))}
                  </ul>
                </td>

                <td>
                  <ul>
                    {month.celebrations.map(teste => (
                      <li style={{ textAlign: 'center' }} key={month.date}>
                        {teste.colour === 'red' && <CircleRed />}
                        {teste.colour === 'green' && <CircleGreen />}
                        {teste.colour === 'white' && <CircleWhite />}
                        {teste.colour === 'violet' && <CircleViolet />}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </Container>
    </>
  );
};

export default Month;
