import styled, { css } from 'styled-components';

export const Header = styled.div`
  display: flex;
  font-size: 20px;
  margin-bottom: 20px;
  color: #f3f3f3;
  font-weight: 900;
  justify-content: flex-end;

  svg {
    margin-right: 10px;
  }
`;

export const Container = styled.div`
  table {
    width: 100%;
    color: #fff;
    border: 1px solid #fff;
    border-collapse: collapse;
  }

  thead {
    margin-left: 30px;
  }

  table,
  th,
  td {
    border: 1px solid transparent;
  }

  th {
    height: 50px;
  }

  td {
    text-transform: capitalize;
    padding-left: 10px;
  }

  ul {
    list-style: none;
    text-transform: capitalize;
  }
`;

const CircleCSS = css`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  display: inline-block;
`;

export const CircleRed = styled.span`
  background: red;
  ${CircleCSS}
`;

export const CircleGreen = styled.span`
  background: green;
  ${CircleCSS}
`;

export const CircleWhite = styled.span`
  background: white;
  ${CircleCSS}
`;

export const CircleViolet = styled.span`
  background: #800080;
  ${CircleCSS}
`;
