import React, { useEffect, useState } from "react";
// import { IoMdReturnLeft } from "react-icons/io";
// import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import classnames from "./styles.module.css";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import api from "../../services/api";
import { CircleRed, CircleGreen, CircleWhite, CircleViolet } from "./styles";
import { Column, usePagination, useTable } from "react-table";

interface CelebrationsProps {
  title: string;
  rank: string;
  colour: string;
}

interface Data {
  date: string;
  weekday: string;
  season: string;
  celebrations: CelebrationsProps[];
}

const columns: Column<Data>[] = [
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "WeekDay",
    accessor: "weekday",
  },
  {
    Header: "Season",
    accessor: "season",
  },
  {
    Header: "Title",
    accessor: (row) => row.celebrations[0].title,
  },
  {
    Header: "Color",
    accessor: (row) =>
      row.celebrations[0].colour === "white" ? (
        <CircleWhite />
      ) : row.celebrations[0].colour === "red" ? (
        <CircleRed />
      ) : row.celebrations[0].colour === "green" ? (
        <CircleGreen />
      ) : (
        <CircleViolet />
      ),
  },
];

const Month = () => {
  const { month } = useParams();
  const [months, setMonth] = useState<Data[]>([]);

  useEffect(() => {
    api.get(`/${month}`).then((response) => {
      setMonth(response.data);
    });
  }, [month]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    state,
    prepareRow,
  } = useTable<Data>(
    {
      columns,
      data: months,
    },
    usePagination
  );

  const { pageIndex, pageSize } = state;
  // const { t } = useTranslation();

  return (
    <div className={classnames.table}>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className={classnames.containerPagination}>
        <div className={classnames.paginationAction}>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <BsFillArrowLeftSquareFill />
          </button>
          <span>
            <strong
              style={{ display: "block", width: "100px", textAlign: "center" }}
            >
              {pageIndex + 1} / {pageOptions.length}
            </strong>
          </span>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <BsFillArrowRightSquareFill />
          </button>
        </div>

        <div className={classnames.containerPageSize}>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Month;
