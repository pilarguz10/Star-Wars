import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/characterCard";

export const CharacterCardView = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div>
				<h1>Characters</h1>
				<div className="scroller">
					{store.characters.map((value, index) => {
						return (
							<CharacterCard
								key={index}
								character={value}
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
