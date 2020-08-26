import styled from 'styled-components';

export const Header = styled.div`
  font-size: 32px;
  color: #f3f3f3;
  max-width: 960px;
  display: flex;
  justify-content: space-between;

  p {
    font-weight: 900;
  }
`;

export const Title = styled.div`
  color: #fff;
  display: flex;
  p {
    margin-left: 10px;
    font-weight: 100;
  }
`;

export const Container = styled.div`
  font-size: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  align-items: center;
  trasition: transform 0.2s;

  a {
    text-decoration: none;
  }

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
