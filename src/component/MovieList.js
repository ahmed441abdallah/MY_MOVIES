import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function MovieList(props) {
  return (
    <Fragment>
      <div className="container ">
        <h2
          className="text-center mt-3"
          style={{ color: "white", fontWeight: "700" }}
        >
          نافذة فنية تتيح لك استكشاف عوالم متنوعة من السينما، 🎞️
        </h2>
        <div className="row mt-5">
          {Array.isArray(props.movies) ? (
            props.movies.map((el) => (
              <div className="col-lg-3 col-md-4 col-6 mb-3" key={el.id}>
                <Link to={`movie/${el.id}`}>
                  <div className="card" style={{ border: "none" }}>
                    <div className="image-container">
                      {el.poster_path ? (
                        <img
                          src={
                            `https://image.tmdb.org/t/p/w500/` + el.poster_path
                          }
                          alt=""
                          width={"100%"}
                          className="rounded"
                        />
                      ) : (
                        <img
                          src="https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"
                          alt=""
                          width={"100%"}
                          className="rounded"
                        ></img>
                      )}

                      <div className="overlay">
                        <p className="overlay-text"> الاسم: {el.title}</p>
                        <p className="overlay-text">
                          {" "}
                          التاريخ : {el.release_date}
                        </p>
                        <p className="overlay-text"> العدد: {el.vote_count}</p>
                        <p className="overlay-text" style={{ color: "red" }}>
                          التقيم: {el.vote_average}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default MovieList;
