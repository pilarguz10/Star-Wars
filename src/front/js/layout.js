import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { CharacterCardView } from "./pages/characterCardView";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { CharacterCard } from "./component/characterCard";
import { StarshipCard } from "./component/starshipCard";

import { CharacterDetails } from "./pages/characterDetails";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PlanetCardView } from "./pages/planetCardView";
import { StarshipCardView } from "./pages/starshipCardView";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/characterCardView">
							<CharacterCardView />
						</Route>
						<Route exact path="/planetCardView">
							<PlanetCardView />
						</Route>
						<Route exact path="/starshipCardView">
							<StarshipCardView />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/chardetails/:thename">
							<CharacterDetails />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
