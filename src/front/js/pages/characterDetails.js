import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetails = props => {
	const { store, actions } = useContext(Context);
	const [character, setCharacter] = useState();
	const params = useParams();

	useEffect(() => {
		fetch(`https://www.swapi.tech/api/people/${params.id}`)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				console.log("character", responseAsJson);
				//return responseAsJson;
				setCharacter(responseAsJson);
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
					{/* <h1>{props.character.name}</h1> */}
					<h1>{character ? character.result.properties.name : ""}</h1>
					<h6>{character ? character.result.description : ""}</h6>
				</div>
			</div>
			<hr />
			<div className="d-flex  justify-content-between">
				<div className="detail">
					<h4>Name </h4> {character ? character.result.properties.name : ""}
					<br />
				</div>
				<div className="detail">
					<h4>Birth Year</h4> {character ? character.result.properties.birth_year : ""} <br />
				</div>
				<div className="detail">
					<h4>Gender</h4> {character ? character.result.properties.gender : ""} <br />
				</div>
				<div className="detail">
					<h4>Height</h4> {character ? character.result.properties.height : ""}
					<br />
				</div>
				<div className="detail">
					<h4>Skin Color</h4> {character ? character.result.properties.skin_color : ""}
					<br />
				</div>
				<div className="detail">
					<h4>Eye Color</h4> {character ? character.result.properties.eye_color : ""}
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

CharacterDetails.propTypes = {
	character: PropTypes.object
};
