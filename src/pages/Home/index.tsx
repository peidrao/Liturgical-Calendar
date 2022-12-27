import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoIosArrowForward, IoMdCalendar } from "react-icons/io";
import classnames from "./styles.module.css";

import { Content } from "./styles";
import months from "../../utils/months";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className={classnames.header}>
        <div className={classnames.headerLogo}>
          <IoMdCalendar size={35} />
          <p> {t("liturgical-calendar")} </p>
        </div>
        <p>Ano {new Date().getFullYear()}</p>
      </div>

      <div className={classnames.container}>
        {months.map((month) => (
          <Content>
            <p>{month.NumberMonth}</p>

            <div>
              <p>{t(month.MonthTranslation)}</p>
            </div>
            <Link to={month.NumberURL}>
              <IoIosArrowForward size={30} />
            </Link>
          </Content>
        ))}
      </div>
    </>
  );
}

export default Home;
