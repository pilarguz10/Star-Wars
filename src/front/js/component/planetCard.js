import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const PlanetCard = props => {
	const { store, actions } = useContext(Context);
	const [planet, setPlanet] = useState();
	let heart = store.favorites.find((value, index) => {
		return value == props.planet.name;
	});

	useEffect(() => {
		fetch(props.planet.url)
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
		<div className="card m-3">
			<img
				className="card-img-top"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Galaxymap_p1.jpg/220px-Galaxymap_p1.jpg"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.planet.name}</h5>
				<p className="card-text" style={{ color: "darkgrey" }}>
					<b>Population:</b> {planet ? planet.result.properties.population : ""} <br />
					<b>Terrain:</b> {planet ? planet.result.properties.terrain : ""} <br />
				</p>
				<div className="d-flex justify-content-between">
					<Link to={{ pathname: `/planetdetails/${props.planet.uid}` }}>
						<button href="#" className="btn btn-outline-primary">
							Learn More!
						</button>
					</Link>
					<button
						href="#"
						className="btn btn-outline-danger"
						onClick={e =>
							heart == undefined
								? props.addFavorites(props.planet.name)
								: props.deleteFavorite(props.planet.name)
						}>
						<i className={heart == undefined ? "far fa-heart" : "fas fa-heart"} />
					</button>
				</div>
			</div>
		</div>
	);
};
PlanetCard.propTypes = {
	planet: PropTypes.object,
	addFavorites: PropTypes.func,
	deleteFavorite: PropTypes.func
};
