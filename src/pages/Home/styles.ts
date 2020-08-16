import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 32px;
  justify-content: center;
`;

export const Container = styled.div`
  font-size: 32px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 12px;
`;

export const Content = styled.div`
  margin-top: 80px;
  max-width: 700px;
  align-content: start;
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: flex;
  text-decoration: none;
  align-items: center;
  trasition: transform 0.2s;

  &:hover {
    transform: translateY(10px);
  }

  > p {
    font-size: 50px;
  }

  div {
    flex: 1;
    p {
      padding-left: 20px;
    }

    svg {
      margin-left: auto;
    }
  }
`;
