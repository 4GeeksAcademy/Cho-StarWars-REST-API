import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/planets.css";

export const Planets = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadPlanets();
  }, []);

  return (
    <div>
      <h1>Planetas</h1>
      <div className="card-container">
        {store.planets &&
          store.planets.length > 0 &&
          store.planets.map((planet, index) => (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <img
                src="https://placehold.co/600x400"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  {planet.properties ? planet.properties.name : "No name"}
                </h5>
                <p className="card-text">
                  Climate:{" "}
                  {planet.properties ? planet.properties.climate : "N/A"}
                  <br />
                  Diameter:{" "}
                  {planet.properties ? planet.properties.diameter : "N/A"}
                  <br />
                  Population:{" "}
                  {planet.properties ? planet.properties.population : "N/A"}
                  <br />
                  Terrain:{" "}
                  {planet.properties ? planet.properties.terrain : "N/A"}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
