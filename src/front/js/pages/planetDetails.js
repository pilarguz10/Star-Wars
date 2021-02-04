import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = props => {
	const { store, actions } = useContext(Context);
	const [planet, setPlanet] = useState();
	const params = useParams();

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/planets/${params.id}`)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				console.log("planet", responseAsJson);
				//return responseAsJson;
				setPlanet(responseAsJson);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	return (
		<div className="container">
			<div className="d-flex">
				<img
					src="https://cdn.pixabay.com/photo/2016/03/27/07/26/darth-vader-1282288_960_720.jpg"
					alt="Card image cap"
					className="detailsImage m-3"
				/>
				<div>
					{/* <h1>{props.planet.name}</h1> */}
					<h1>{planet ? planet.result.properties.name : ""}</h1>
					<h6>{planet ? planet.result.description : ""}</h6>
				</div>
			</div>
			<hr />
			<div className="d-flex  justify-content-between">
				<div className="detail">
					<h4>Name </h4> {planet ? planet.result.properties.name : ""}
					<br />
				</div>
				<div className="detail">
					<h4>Climate</h4> {planet ? planet.result.properties.cliamte : ""} <br />
				</div>
				<div className="detail">
					<h4>Population</h4> {planet ? planet.result.properties.population : ""} <br />
				</div>
				<div className="detail">
					<h4>Orbital Period</h4> {planet ? planet.result.properties.orbital_period : ""}
					<br />
				</div>
				<div className="detail">
					<h4>Rotation Period</h4> {planet ? planet.result.properties.rotation_period : ""}
					<br />
				</div>
				<div className="detail">
					<h4>Diameter</h4> {planet ? planet.result.properties.diameter : ""}
					<br />
				</div>
				<Link to="/">
					<span className="btn btn-dark btn-lg float-right" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
			<br />
		</div>
	);
};

PlanetDetails.propTypes = {
	planet: PropTypes.object
};
