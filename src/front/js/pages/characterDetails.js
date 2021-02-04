import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetails = props => {
	return (
		<div className="container">
			<div className="d-flex">
				<img
					src="https://cdn.pixabay.com/photo/2016/03/27/07/26/darth-vader-1282288_960_720.jpg"
					alt="Card image cap"
					className="detailsImage m-3"
				/>
				<div>
					<h1>name</h1>
					<h4>Descripcion</h4>
				</div>
			</div>
			<hr />
			<div className="d-flex  justify-content-between">
				<div className="detail">
					<h3>Birth Year</h3> <br /> {/*<h6>{props.location.state.birth_year}</h6>*/}
				</div>
				<div className="detail">
					<h3>Eye Color</h3> <br />
				</div>
				<div className="detail">
					<h3>Gender</h3> <br />
				</div>
				<div className="detail">
					<h3>Hair Color</h3> <br />
				</div>
				<div className="detail">
					<h3>Height</h3> <br />
				</div>
			</div>
			<br />
			<Link to="/">
				<span className="btn btn-dark btn-lg float-right" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

CharacterDetails.propTypes = {};
