import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export const CharacterCard = props => {
	const { store, actions } = useContext(Context);
	let heart = store.favorites.find((value, index) => {
		return value == props.character.name;
	});

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
					<b>Gender:</b> {props.character.gender} <br />
					<b>Hair-color:</b> {props.character.hair_color} <br />
					<b>Eye-color:</b> {props.character.eye_color} <br />
				</p>

				<div className="d-flex justify-content-between">
					<Link to={{ pathname: `/chardetails/${props.character.name}`, state: props.character }}>
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
