import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { StarshipCard } from "../component/starshipCard";

export const StarshipCardView = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div>
				<h1>Starships</h1>
				<div className="scroller">
					{store.starships.map((value, index) => {
						return <StarshipCard key={index} starship={value} />;
					})}
				</div>
			</div>
		</div>
	);
};
