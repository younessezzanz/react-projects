import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";

import { getPage } from "../redux/actions/moviesAction";

function PaginationComponent() {
  const [pageCount, setpageCount] = useState(0);

  const dispatchMovies = useDispatch();
  const pages = useSelector((state) => state.pageCount);

  useEffect(() => {
    setpageCount(pages);
  }, []);

  const handlePageClick = (data) => {
    dispatchMovies(getPage(data.selected + 1));
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالى"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={4}
      pageCount={pageCount}
      previousLabel="السابق"
      containerClassName={"pagination justify-content-center p-3"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
}

export default PaginationComponent;
