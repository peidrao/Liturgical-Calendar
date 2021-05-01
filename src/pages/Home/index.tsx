import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IoIosArrowForward, IoMdCalendar } from 'react-icons/io';

import { Container, Title, Content, Header } from './styles';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header>
        <Title>
          <IoMdCalendar size={35} />
          <p> { t('liturgical-calendar') } </p>
        </Title>

        <p> { t('year') } 2020</p>
      </Header>

      <Container>
        <Content>
          <p>1</p>

          <div>
            <p>{ t('january') }</p>
          </div>
          <Link style={{ textDecoration: 'inherit' }} to="month/1">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>2</p>
          <div>
            <p>{ t('febuary') }</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/2">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>3</p>
          <div>
            <p>{ t('march') }</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/3">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>4</p>
          <div>
            <p>{ t('april') }</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/4">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>5</p>
          <div>
            <p>{ t('may') }</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/5">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>6</p>
          <div>
            <p>{ t('june') }</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/6">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>7</p>
          <div>
            <p>{ t('july') }</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/7">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>8</p>
          <div>
            <p>{ t('august') }</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/8">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>9</p>
          <div>
            <p>{ t('september') }</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/9">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>10</p>
          <div>
            <p>{ t('october') }</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/10">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>11</p>
          <div>
            <p>{ t('november') }</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/11">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>12</p>
          <div>
            <p>{ t('december') }</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/12">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>
      </Container>
    </>
  );
};

export default Home;
