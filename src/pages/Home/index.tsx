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
        <Link style={{ textDecoration: 'none' }} to="month/1">
          <Content>
            <p>1</p>

            <div>
              <p>Janeiro</p>
            </div>
            <IoIosArrowForward size={30} />
          </Content>
        </Link>

        <Link style={{ textDecoration: 'none' }} to="month/2">
          <Content>
            <p>2</p>
            <div>
              <p>Fevereiro</p>
            </div>
            <IoIosArrowForward size={30} />
          </Content>
        </Link>

        <Link style={{ textDecoration: 'none' }} to="month/3">
          <Content>
            <p>3</p>
            <div>
              <p>Março</p>
            </div>
            <IoIosArrowForward size={30} />
          </Content>
        </Link>

        <Link style={{ textDecoration: 'none' }} to="month/4">
          <Content>
            <p>4</p>
            <div>
              <p>Abril</p>
            </div>
            <IoIosArrowForward size={30} />
          </Content>
        </Link>

        <Link style={{ textDecoration: 'none' }} to="month/5">
          <Content>
            <p>5</p>
            <div>
              <p>Maio</p>
            </div>
            <IoIosArrowForward size={30} />
          </Content>
        </Link>

        <Link style={{ textDecoration: 'none' }} to="month/6">
          <Content>
            <p>6</p>
            <div>
              <p>Junho</p>
            </div>
            <IoIosArrowForward size={30} />
          </Content>
        </Link>

        <Link style={{ textDecoration: 'none' }} to="month/7">
          <Content>
            <p>7</p>
            <div>
              <p>Julho</p>
            </div>
            <IoIosArrowForward size={30} />
          </Content>
        </Link>

        <Link style={{ textDecoration: 'none' }} to="month/8">
          <Content>
            <p>8</p>
            <div>
              <p>Agosto</p>
            </div>
            <IoIosArrowForward size={30} />
          </Content>
        </Link>

        <Link style={{ textDecoration: 'none' }} to="month/9">
          <Content>
            <p>9</p>
            <div>
              <p>Setembro</p>
            </div>
            <IoIosArrowForward size={30} />
          </Content>
        </Link>

        <Link style={{ textDecoration: 'none' }} to="month/10">
          <Content>
            <p>10</p>
            <div>
              <p>Outubro</p>
            </div>
            <IoIosArrowForward size={30} />
          </Content>
        </Link>

        <Link style={{ textDecoration: 'none' }} to="month/11">
          <Content>
            <p>11</p>
            <div>
              <p>Novembro</p>
            </div>
            <IoIosArrowForward size={30} />
          </Content>
        </Link>

        <Link style={{ textDecoration: 'none' }} to="month/12">
          <Content>
            <p>12</p>
            <div>
              <p>Dezembro</p>
            </div>
            <IoIosArrowForward size={30} />
          </Content>
        </Link>
      </Container>
    </>
  );
};

export default Home;
