export const DOTS = "...";
import { useState, useEffect } from "react";

function usePagination() {
  /*
    Rewrite the logic here to map out the pagination to be displayed

    !!!!!! ATTENTION !!!!!!
    Please replace this comment here with a description of this hook.
    
  */

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (totalItems && pageSize) {
      setTotalPages(Math.ceil(totalItems / pageSize));
    }
  }, [totalItems, pageSize]);

  useEffect(() => {
    if (totalPages && currentPage) {
      setPages(
        Array.from({ length: totalPages }, (_, i) => ({
          page: i,
          label: i + 1,
          isActive: i === currentPage,
          isDisabled: i === 0,
          isDots: i === 0 || i === totalPages - 1,
        }))
      );
    }
  }, [totalPages, currentPage]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    totalItems,
    pageSize,
    setPageSize,
    pages,
  };
  // return [1, 2, 3, DOTS, 5];
}

export default usePagination;
