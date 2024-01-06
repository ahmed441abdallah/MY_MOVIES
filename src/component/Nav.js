import React, { Fragment } from "react";

function Nav(props) {
  return (
    <Fragment>
      <div
        className="nav p-3 bg-body-tertiary "
        style={{ position: "sticky", top: "0", left: "0", zIndex: "4445" }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-2">
              <h4> افلامك🍿 </h4>
            </div>
            <div className="col-10">
              <div className="search d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="  ابحث 🔍"
                  onChange={(e) => props.search(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Nav;
