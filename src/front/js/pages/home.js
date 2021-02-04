import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<img src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG32.png" />

			<h3 className="marquee">
				<span>Hola, si eres un friki de Star Wars, este es tu sitio :) </span>
			</h3>
		</div>
	);
};
