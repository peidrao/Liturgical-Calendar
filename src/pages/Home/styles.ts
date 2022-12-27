import styled from "styled-components";

export const Container = styled.div`
  font-size: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 12px;
`;

export const Content = styled.div`
  margin-top: 80px;
  max-width: 500px;
  align-content: start;
  background: #fff;
  border-radius: 5px;
  width: 80%;
  padding: 10px;
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
