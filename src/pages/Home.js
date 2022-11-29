import React, { useState, useEffect } from "react";
import "../App.css";

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2> MOVIE - ADDA</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((curElem) => {
            return (
              <div className="col-10 col-md-4 mt-5">
                <div className="card p-2">
                  <div className="d-flex align-item-center">
                    <div className="image">
                      <img
                        src={curElem.show.image.original}
                        class="rounded"
                        width="155"
                      />
                    </div>
                    <div className="ml-3 w-100">
                      <h4 class="mb-0 mt-0 textLeft">{curElem.show.name}</h4>
                      <span className="textLeft">
                        Genres: {curElem.show.genres[0]}{" "}
                        {curElem.show.genres[1]}{" "}
                      </span>
                      <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div class="d-flex flex-row">
                          <span class="article">
                            Language:
                            {curElem.show.language}
                          </span>
                        </div>
                      </div>
                      <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div class="d-flex flex-row">
                          <span class="article">
                            Rating:
                            {curElem.show.rating.average}
                          </span>
                        </div>
                      </div>
                      <a href={curElem.show.url} target="_blank">
                        <button>Watch Now</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
