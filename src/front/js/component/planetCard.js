import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const PlanetCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card m-3">
			<img
				className="card-img-top"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Galaxymap_p1.jpg/220px-Galaxymap_p1.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.planet.name}</h5>
				<p className="card-text" style={{ color: "darkgrey" }}>
					<b>Population:</b> {props.planet.population} <br />
					<b>Terrain: </b>
					{props.planet.terrain} <br />
				</p>
			</div>
		</div>
	);
};
PlanetCard.propTypes = {
	planet: PropTypes.object
};
