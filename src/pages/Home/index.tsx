import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { Container, Title, Content } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Title> Ano 2020 </Title>

      <Container>
        <Content>
          <p>1</p>

          <div>
            <p>Janeiro</p>
          </div>
          <IoIosArrowForward size={30} />
        </Content>

        <Content>
          <p>2</p>

          <div>
            <p>Fevereiro</p>
          </div>
          <IoIosArrowForward size={30} />
        </Content>
        <Content>
          <p>3</p>

          <div>
            <p>Março</p>
          </div>
          <IoIosArrowForward size={30} />
        </Content>
        <Content>
          <p>4</p>

          <div>
            <p>Abril</p>
          </div>
          <IoIosArrowForward size={30} />
        </Content>

        <Content>
          <p>5</p>

          <div>
            <p>Maio</p>
          </div>
          <IoIosArrowForward size={30} />
        </Content>
        <Content>
          <p>6</p>

          <div>
            <p>Junho</p>
          </div>
          <IoIosArrowForward size={30} />
        </Content>

        <Content>
          <p>7</p>

          <div>
            <p>Julho</p>
          </div>
          <IoIosArrowForward size={30} />
        </Content>
        <Content>
          <p>8</p>

          <div>
            <p>Agosto</p>
          </div>
          <IoIosArrowForward size={30} />
        </Content>

        <Content>
          <p>9</p>

          <div>
            <p>Setembro</p>
          </div>
          <IoIosArrowForward size={30} />
        </Content>
        <Content>
          <p>10</p>

          <div>
            <p>Outubro</p>
          </div>
          <IoIosArrowForward size={30} />
        </Content>

        <Content>
          <p>11</p>

          <div>
            <p>Novembro</p>
          </div>
          <IoIosArrowForward size={30} />
        </Content>
        <Content>
          <p>12</p>

          <div>
            <p>Dezembro</p>
          </div>
          <IoIosArrowForward size={30} />
        </Content>
      </Container>
    </>
  );
};

export default Home;
