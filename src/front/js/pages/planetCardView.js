import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PlanetCard } from "../component/planetCard";

export const PlanetCardView = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div>
				<h1>Planets</h1>
				<div className="scroller">
					{store.planets.map((value, index) => {
						return (
							<PlanetCard
								key={index}
								planet={value}
								addFavorites={actions.addFavorite}
								deleteFavorite={actions.deleteFavorite}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
