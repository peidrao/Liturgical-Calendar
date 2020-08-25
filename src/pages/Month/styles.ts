import styled from 'styled-components';

export const Header = styled.h1`
  color: #fff;
`;

export const Circle = styled.span`
  display: inline-block;
  background: red;
  border-radius: 50%;
  width: 10px;
  height: 10px;
`;

export const Container = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    margin-left: 30px;
  }

  table,
  th,
  td {
    border: 1px solid #000;
  }

  th {
    height: 50px;
  }

  td {
    padding-left: 10px;
  }

  ul {
    list-style: none;
  }
`;
