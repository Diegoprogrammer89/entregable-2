import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Drinks from "./components/Drinks";
import React from "react";
import { BiDrink } from "react-icons/bi";
import "animate.css"

function App() {
	const [drinkData, setDrinkData] = useState([]); // guarda la info de la api
	const [inputAlert, setImputAlert] = useState(""); //  guarda el nombre recibido del input
	const [nameDrink, setNameDrink] = useState("");

	useEffect(() => {
		axios
			.get(
				`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nameDrink}`
			)
			.then((resp) => setDrinkData(resp.data))
			.catch((error) => console.error(error));
	}, [nameDrink]);

	const searchDrink = (e) => {
		e.preventDefault();
		setNameDrink(e.target[0].value);
	};

	/*if( inputAlert != nameDrink ){
		console.log(info)
	}else{
		alert("No se encontron coincidencias")
	}*/
	
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
			<Drinks data={drinkData} />
		</div>
	);
}

export default App;

/* 

   const searchDrink = (e) => {
	e.preventDefault();
	setNameDrink(e.target[0].value);
}; 
*/

/*<form  onSubmit={(e) => searchDrink(e)}>
				<input
					className="input"
					type="text"
					placeholder="   Search Drink"
				/>
				<button className="btn" >
					<BiDrink className="icon" />
				</button>
				
			</form> */
