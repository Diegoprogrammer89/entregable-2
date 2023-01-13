import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Drinks from "./components/Drinks";
import React from "react";
import { BiDrink } from "react-icons/bi";
import "animate.css"
import Alert from "./components/Alert";

function App() {
	const [drinkData, setDrinkData] = useState([]); // guarda la info de la api
	const [nameDrink, setNameDrink] = useState("");//  guarda el nombre recibido del input

	useEffect(() => {
		axios
			.get(
				`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameDrink}`
			)
			.then((resp) => setDrinkData(resp.data.drinks))
			.catch((error) => console.error(error));
	}, [nameDrink]);

	const searchDrink = (e) => {
		e.preventDefault();
		setNameDrink(e.target[0].value);
	};


	return (
		<div className="App">
			<form className="allInput" onSubmit={(e) => searchDrink(e)}>
				<input
					className="input"
					type="text"
					placeholder="   Search Drink"
				/>
				<button className="btn">
					<BiDrink className="icon animate__animated animate__rotateIn" />
				</button>
			</form>
			{
		
		drinkData
		?
			<Drinks data={drinkData} />
			
		
		:
		<Alert/>
		}
		</div>
	);
}

export default App;

