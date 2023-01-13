import React from "react";
import background from "../assets/background.jpg";

const Drinks = ({ data }) => {
	return (
		<article >
			<div className="container__card">
				{data.drinks?.map((info) => (
					<div key={info.idDrink}>
						<div className="card">
							<div className="cover__card">
								<img src={info.strDrinkThumb} alt="" />
							</div>
							<div className="text">
								<h3 className="name">{info.strDrink}</h3>
								<p>{info.strInstructions}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</article>
	);
};

export default Drinks;
