import React, { useEffect, useMemo, useState } from "react";
import { IoMdReturnLeft } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import classnames from "./styles.module.css";

import api from "../../services/api";
import {
  Header,
  Container,
  CircleRed,
  CircleGreen,
  CircleWhite,
  CircleViolet,
} from "./styles";
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

// interface Data {
//   date: string;
//   weekday: string;
// }

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
];

const Month = () => {
  const [months, setMonth] = useState<Data[]>([]);

  useEffect(() => {
    api.get(`/${month}`).then((response) => {
      setMonth(response.data);
    });
  }, []);

  const { month } = useParams();

  console.log(months);

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
    gotoPage,
    pageCount,
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

      <div
        className="table-pagination"
        style={{
          margin: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <span>
          <strong
            style={{ display: "block", width: "100px", textAlign: "center" }}
          >
            {pageIndex + 1} / {pageOptions.length}
          </strong>
        </span>
        <span>
          Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
      <div
        className="table-pagesize"
        style={{
          margin: "5px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
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
  );
};

export default Month;
