import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export const CharacterCard = props => {
	const [character, setCharacter] = useState();
	const { store, actions } = useContext(Context);
	let heart = store.favorites.find((value, index) => {
		return value == props.character.name;
	});

	useEffect(() => {
		fetch(props.character.url)
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
		<div className="card m-3">
			<img
				className="card-img-top"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPUxwPmen2Pfhl7wO7V9TP0L-S3pTiA_uhcQ&usqp=CAU"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.character.name}</h5>

				<p className="card-text" style={{ color: "darkgrey" }}>
					<b>Gender:</b> {character ? character.result.properties.gender : ""} <br />
					<b>Hair-color:</b>
					{character ? character.result.properties.hair_color : ""} <br />
					<b>Eye-color:</b> {character ? character.result.properties.eye_color : ""} <br />
				</p>

				<div className="d-flex justify-content-between">
					<Link to={{ pathname: `/chardetails/${props.character.uid}` }}>
						<button href="#" className="btn btn-outline-primary">
							Learn More!
						</button>
					</Link>
					<button
						href="#"
						className="btn btn-outline-danger"
						onClick={e =>
							heart == undefined
								? props.addFavorites(props.character.name)
								: props.deleteFavorite(props.character.name)
						}>
						<i className={heart == undefined ? "far fa-heart" : "fas fa-heart"} />
					</button>
				</div>
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	character: PropTypes.object,
	addFavorites: PropTypes.func,
	deleteFavorite: PropTypes.func
};
