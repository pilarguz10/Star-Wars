import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarshipDetails = props => {
	const { store, actions } = useContext(Context);
	const [starship, setStarship] = useState();
	const params = useParams();

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/starships/${params.id}`)
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
		<div className="container">
			<div className="d-flex">
				<img
					src="https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_wired.png,fl_progressive,g_face,h_450,q_80,w_800/v1576594418/wired_each-and-every-starfighter-in-star-wars-explained.jpg"
					alt="Card image cap"
					className="detailsImage m-3"
				/>
				<div>
					{/* <h1>{props.starship.name}</h1> */}
					<h1>{starship ? starship.result.properties.name : ""}</h1>
					<h6>{starship ? starship.result.description : ""}</h6>
				</div>
			</div>
			<hr />
			<div className="d-flex  justify-content-between">
				<div className="detail">
					<h4>Name </h4> {starship ? starship.result.properties.name : ""}
					<br />
				</div>
				<div className="detail">
					<h4>Model</h4> {starship ? starship.result.properties.model : ""} <br />
				</div>
				<div className="detail">
					<h4>Cost</h4> {starship ? starship.result.properties.cost_in_credits : ""} <br />
				</div>
				<div className="detail">
					<h4>Consumables</h4> {starship ? starship.result.properties.consumables : ""}
					<br />
				</div>
				<div className="detail">
					<h4>Class</h4> {starship ? starship.result.properties.starship_class : ""}
					<br />
				</div>
				<div className="detail">
					<h4>Passengers</h4> {starship ? starship.result.properties.passengers : ""}
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

StarshipDetails.propTypes = {
	starship: PropTypes.object
};
