import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward, IoMdCalendar } from 'react-icons/io';

import { Container, Title, Content, Header } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <Title>
          <IoMdCalendar size={35} />
          <p> Calendário Litúrgico </p>
        </Title>

        <p>Ano 2020</p>
      </Header>

      <Container>
        <Content>
          <p>1</p>

          <div>
            <p>Janeiro</p>
          </div>
          <Link style={{ textDecoration: 'inherit' }} to="month/1">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>2</p>
          <div>
            <p>Fevereiro</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/2">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>3</p>
          <div>
            <p>Março</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/3">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>4</p>
          <div>
            <p>Abril</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/4">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>5</p>
          <div>
            <p>Maio</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/5">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>6</p>
          <div>
            <p>Junho</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/6">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>7</p>
          <div>
            <p>Julho</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/7">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>8</p>
          <div>
            <p>Agosto</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/8">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>9</p>
          <div>
            <p>Setembro</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/9">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>10</p>
          <div>
            <p>Outubro</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/10">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>11</p>
          <div>
            <p>Novembro</p>
          </div>
          <Link style={{ textDecoration: 'none' }} to="month/11">
            <IoIosArrowForward size={30} />
          </Link>
        </Content>

        <Content>
          <p>12</p>
          <div>
            <p>Dezembro</p>
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
