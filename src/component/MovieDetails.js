import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function MovieDetails() {
  const params = useParams();

  const [sigleMovie, setSingleMovie] = useState("");
  const getSingle = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=16437c59e8adcee097f1b3b1b623e1b6&language=ar`
        // ` https://api.themoviedb.org/3/movie/${params.id}?api_key=16437c59e8adcee097f1b3b1b623e1b6&language=ar`
      )
      .then((res) => setSingleMovie(res.data))
      .catch((error) => {
        console.error("Error fetching movies:", error);
        // You might want to set some default or error state in case of failure
        setSingleMovie([]);
      });
  };
  useEffect(() => {
    getSingle();
  }, []);
  console.log(sigleMovie);
  return (
    <Fragment>
      <h2 className="text-center mt-5 text-white">تفاصيل الفيلم</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 md-6 col-12 text-lg-end text-md-end text-center">
            {sigleMovie.poster_path ? (
              <img
                src={
                  `https://image.tmdb.org/t/p/w500/` + sigleMovie.poster_path
                }
                alt=""
                width={"400px"}
                height={"400px"}
                className="rounded mobile-image"
              ></img>
            ) : (
              <img
                src="https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"
                alt=""
                width={"400px"}
                height={"400px"}
                className="rounded"
              ></img>
            )}
          </div>
          <div className="col-lg-6 md-6 col-12 text-white text-lg-end text-md-end text-center ">
            <h5 className="mt-5"> اسم الفيلم: {sigleMovie.original_title}</h5>
            <h5 className="mt-3">تاريخ الفيلم : {sigleMovie.release_date}</h5>
            <h5 className="mt-3"> عدد المقيمين : {sigleMovie.popularity}</h5>
            <h5 className="mt-3"> التقيم : {sigleMovie.vote_average} /10</h5>
            <div className="row">
              <div className="col-12 text-white mt-5">
                {sigleMovie.overview ? (
                  <p> القصه: {sigleMovie.overview}</p>
                ) : (
                  <p> "لا يوجد قصه"</p>
                )}
                <div>
                  <a href={sigleMovie.homepage} target="_blank">
                    <button className="btn btn-dark ms-3">رابط المشاهده</button>
                  </a>
                  <Link to={"/"}>
                    <button className="btn btn-dark"> العوده للخلف</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default MovieDetails;
