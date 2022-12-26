import React, { useEffect, useState } from "react";
import { IoMdReturnLeft } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";

import api from "../../services/api";
import {
  Header,
  Container,
  CircleRed,
  CircleGreen,
  CircleWhite,
  CircleViolet,
} from "./styles";

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
// interface DayParams {
//   month: string;
// }

const Month: React.FC = () => {
  const [months, setMonth] = useState<DayDate[]>([]);
  const { month } = useParams();

  const { t } = useTranslation();

  console.log(month);

  useEffect(() => {
    api.get(`/${month}`).then((response) => {
      setMonth(response.data);
    });
  }, [month]);

  return (
    <>
      <Header>
        <Link to="/" style={{ textDecoration: "none" }}>
          <IoMdReturnLeft size={20} />
        </Link>
        {t("go-back")}
      </Header>

      <Container>
        <table>
          <thead>
            <tr>
              <th>{t("date")}</th>
              <th>{t("weekday")}</th>
              <th>{t("title")}</th>
              <th>{t("rank")}</th>
              <th>{t("colour")}</th>
            </tr>
          </thead>
          {months.map((month) => (
            <tbody key={month.date}>
              <tr>
                <td>{month.date}</td>
                <td>{month.weekday}</td>
                <td>
                  <ul>
                    {month.celebrations.map((teste) => (
                      <li key={month.date}>
                        {teste.title}
                        {teste.rank}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul>
                    {month.celebrations.map((teste) => (
                      <li key={month.date}>{teste.rank}</li>
                    ))}
                  </ul>
                </td>

                <td>
                  <ul>
                    {month.celebrations.map((teste) => (
                      <li style={{ textAlign: "center" }} key={month.date}>
                        {teste.colour === "red" && <CircleRed />}
                        {teste.colour === "green" && <CircleGreen />}
                        {teste.colour === "white" && <CircleWhite />}
                        {teste.colour === "violet" && <CircleViolet />}
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
