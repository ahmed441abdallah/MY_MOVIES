import React, { Fragment } from "react";
import ReactPaginate from "react-paginate";
function Pagination(props) {
  const pageCount = 500;
  const handlePageClick = (data) => {
    props.getCurrentPage(data.selected + 1);
  };
  return (
    <Fragment>
      <div className="pagination-container">
        <ReactPaginate
          breakLabel=".."
          nextLabel="التالي"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="السابق"
          renderOnZeroPageCount={null}
          containerClassName="pagination mt-4 justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="btn btn-dark"
          nextLinkClassName="btn btn-dark"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </Fragment>
  );
}
export default Pagination;
