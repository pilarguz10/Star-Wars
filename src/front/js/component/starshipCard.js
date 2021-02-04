import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const StarshipCard = props => {
	const { store, actions } = useContext(Context);

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
					<b>Model:</b> {props.starship.model} <br />
					<b>Cost:</b> {props.starship.cost_in_credits} <br />
				</p>
			</div>
		</div>
	);
};

StarshipCard.propTypes = {
	starship: PropTypes.object
};
