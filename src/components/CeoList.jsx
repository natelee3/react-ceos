import React, { useState, useEffect } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import CeoDetails from "./CeoDetails";
import './CeoList.css';
import CeoDetailsAsync from './CeoDetailsAsync';

export default function CeoList() {
  const [ceos, setCeos] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const ceos = await _fetchData();
      setCeos(ceos);
    })();
  }, [setCeos]);

  const _fetchData = async () => {
    const url = `http://localhost:3000`;
    const response = await fetch(url)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    return response;
  };

  return (
    <>
      {!!ceos.length ? (
        <>
          <Route exact path="/">
            <ul> <span>Apple CEOs</span><br/>
              {ceos.map((ceo, index) => (
                <li key={index}>
                  <Link to={`/ceo/${ceo.slug}`}>{ceo.name}</Link>
                </li>
              ))}
            </ul>
          </Route>
          <Route path="/ceo/:ceo_slug">
              <CeoDetailsAsync />
             {/* <CeoDetails ceoList={ceos} /> */}
             <button type="button" onClick={() => history.goBack()}>Go Home</button>
          </Route>
        </>
      ) : (
          <p>Loading CEOs...</p>
      )}
    </>
  );
}
