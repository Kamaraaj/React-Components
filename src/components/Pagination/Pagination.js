import React, { useState } from "react";
import "./Pagination.css";

// Note : From the Parent Component
{/* <Pagination TotalNumberOfRecords={resData?.TotalNumberOfRecords} currentPage={currentPage} setCurrentPage={setCurrentPage} perPageRecordsLimit={10} visiblePages={5} /> */}

const Pagination = ({
  TotalNumberOfRecords,
  currentPage,
  setCurrentPage,
  perPageRecordsLimit,
  visiblePages,
}) => {
  const totalPagesCount = () =>
    Math.ceil(TotalNumberOfRecords / perPageRecordsLimit);
  const startPage = () => {
    let visibleMaxLimit = totalPagesCount() - visiblePages;

    if (currentPage === 1 || visibleMaxLimit < 1) {
      return 1;
    } else if (currentPage === totalPagesCount()) {
      if (currentPage > totalPagesCount()) {
        return totalPagesCount() - visiblePages + 1;
      } else if (currentPage > visibleMaxLimit && visibleMaxLimit > 0) {
        return visibleMaxLimit + 1;
      } else return 1;
    } else if (currentPage > visibleMaxLimit) {
      return visibleMaxLimit + 1;
    } else {
      return currentPage;
    }
  };
  const endPage = () =>
    Math.min(startPage() + visiblePages - 1, totalPagesCount());
  const pages = () => {
    const range = [];
    for (let i = startPage(); i <= endPage(); i += 1) {
      range.push(i);
    }
    return range;
  };
  return (
    <nav>
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              &laquo;
            </button>
          </li>
        )}
        {pages().map((item, index) => (
          <li
            className={`page-item ${currentPage === item && "active"}`}
            key={index}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(item)}
            >
              {item}{" "}
            </button>
          </li>
        ))}
        {currentPage !== totalPagesCount() && (
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              &raquo;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
