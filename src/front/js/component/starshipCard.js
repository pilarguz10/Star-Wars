import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const StarshipCard = props => {
	const { store, actions } = useContext(Context);
	const [starship, setStarship] = useState();
	let heart = store.favorites.find((value, index) => {
		return value == props.starship.name;
	});

	useEffect(() => {
		fetch(props.starship.url)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				console.log("starship", responseAsJson);
				//return responseAsJson;
				setStarship(responseAsJson);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	return (
		<div className="card m-3">
			<img
				className="card-img-top"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOaT4N_9XLi_UvSK2WKC2dZekLBOq2UkPaA&usqp=CAU"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.starship.name}</h5>
				<p className="card-text" style={{ color: "darkgrey" }}>
					<b>Model:</b> {starship ? starship.result.properties.model : ""} <br />
					<b>Cost:</b> {starship ? starship.result.properties.cost_in_credits : ""} <br />
				</p>
				<div className="d-flex justify-content-between">
					<Link to={{ pathname: `/starshipdetails/${props.starship.uid}` }}>
						<button href="#" className="btn btn-outline-primary">
							Learn More!
						</button>
					</Link>
					<button
						href="#"
						className="btn btn-outline-danger"
						onClick={e =>
							heart == undefined
								? props.addFavorites(props.starship.name)
								: props.deleteFavorite(props.starship.name)
						}>
						<i className={heart == undefined ? "far fa-heart" : "fas fa-heart"} />
					</button>
				</div>
			</div>
		</div>
	);
};

StarshipCard.propTypes = {
	starship: PropTypes.object,
	addFavorites: PropTypes.func,
	deleteFavorite: PropTypes.func
};
