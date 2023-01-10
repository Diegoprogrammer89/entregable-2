import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Drinks from "./components/Drinks";

function App() {
	const [drinkData, setDrinkData] = useState({});

	useEffect(() => {
		axios
			.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
			.then((resp) => setDrinkData(resp.data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="App">
			<Drinks data={drinkData} />
		</div>
	);
}

export default App;
