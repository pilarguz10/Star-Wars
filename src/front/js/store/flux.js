const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			favorites: [],
			characters2: "",

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			addFavorite: newItem => {
				var storeCopy = getStore();
				var checkItem = storeCopy.favorites.find(value => {
					return value == newItem;
				});
				if (checkItem == undefined) {
					var newFavorites = storeCopy.favorites.concat(newItem);
					setStore({ favorites: newFavorites });
				}
			},

			deleteFavorite: deletedItem => {
				var storeCopy = getStore();
				var newFavorites = storeCopy.favorites.filter((value, index) => {
					return value != deletedItem;
				});
				setStore({ favorites: newFavorites });
			},

			loadOneItem: url => {
				let item = {};
				fetch(url)
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						//return response.json();
					})
					.then(function(responseAsJson) {
						console.log("character", responseAsJson);
						return responseAsJson;
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			loadSomeData: () => {
				fetch(`https://www.swapi.tech/api/people/`)
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ characters: responseAsJson.results, characters2: responseAsJson.next });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});

				fetch(`https://www.swapi.tech/api/planets/`)
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ planets: responseAsJson.results });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});

				fetch(`https://www.swapi.tech/api/starships/`)
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ starships: responseAsJson.results });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			// getCharactersMore: () => {
			// 	let store = getStore();

			// 	fetch(`https://www.swapi.tech/api/people/`)
			// 		.then(resp => resp.json())
			// 		.then(data =>
			// 			setStore({ characters: store.characters.concat(data.results), characters2: data.next })
			// 		)
			// 		.catch(error => console.log("Error loading message from backend", error));
			// },
			getCharactersMore: () => {
				let store = getStore();
				var url = store.characters2;

				fetch(url)
					.then(resp => resp.json())
					.then(data =>
						setStore({ characters: store.characters.concat(data.results), characters2: data.next })
					)
					.catch(error => console.log("Error loading message from backend", error));
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			checkTypeofCard: value => {
				const store = getStore();
				let path = "";
				let typeofCard = {};
				let checkCharacters = store.characters.filter((char, index) => {
					return char.name == value;
				});
				let checkPlanets = store.planets.filter((char, index) => {
					return char.name == value;
				});
				let checkStarships = store.starships.filter((char, index) => {
					return char.name == value;
				});
				if (checkCharacters[0] != undefined && checkPlanets[0] == undefined && checkStarships[0] == undefined) {
					path = `/chardetails/${value}`;
					typeofCard = checkCharacters[0];
				} else if (
					checkCharacters[0] == undefined &&
					checkPlanets[0] != undefined &&
					checkStarships[0] == undefined
				) {
					path = `/planetdetails/${value}`;
					typeofCard = checkPlanets[0];
				} else if (
					checkCharacters[0] == undefined &&
					checkPlanets[0] == undefined &&
					checkStarships[0] != undefined
				) {
					path = `/starshipdetails/${value}`;
					typeofCard = checkStarships[0];
				}
				return { cardInfo: typeofCard, pathname: path };
			}
		}
	};
};

export default getState;
