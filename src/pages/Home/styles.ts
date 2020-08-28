import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  font-size: 32px;
  color: #f3f3f3;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 900;
  }
`;

export const Title = styled.span`
  display: flex;
  align-items: center;
  max-width: 450px;
  line-height: 56px;

  p {
    padding-left: 10px;
    font-weight: 300;
  }
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
