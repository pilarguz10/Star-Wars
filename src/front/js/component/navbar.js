import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
						style={{ width: "5em", height: "3em" }}
						alt="Card image cap"
					/>
				</span>
			</Link>

			<ul className="navbar-nav">
				<div className="parte1">
					<Link to="/characterCardView">
						<li className="nav-item">
							<h4>Characters</h4>
						</li>
					</Link>
				</div>

				<div className="parte2">
					<Link to="/planetCardView">
						<li className="nav-item">
							<h4>Planets</h4>
						</li>
					</Link>
				</div>

				<div className="parte3">
					<Link to="/starshipCardView">
						<li className="nav-item">
							<h4>Starships</h4>
						</li>
					</Link>
				</div>

				<div className="dropdown">
					<button
						className="btn btn-lg dropdown-toggle"
						id="dropdownMenuButton"
						type="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="true">
						Favorites <span className="badge badge-danger">{store.favorites.length}</span>
					</button>
					<div className={store.favorites.length > 0 ? "dropdown-menu show  text-white" : "d-non"}>
						{store.favorites.map((value, index) => {
							let info = actions.checkTypeofCard(value);
							return (
								<li key={index} className="dropdown-item  text-white">
									<Link
										className="text-white"
										to={{
											pathname: info.pathname,
											state: info.cardInfo
										}}>
										{value}
									</Link>
									<i
										className="fas fa-trash  float-right"
										onClick={e => actions.deleteFavorite(value)}
									/>
								</li>
							);
						})}
					</div>
				</div>
			</ul>
		</nav>
	);
};
