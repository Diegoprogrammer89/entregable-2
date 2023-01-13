import React from "react";
import App from "../App";

const Drinks = ({ data }) => {
	return (
		<article>
			<div className="container__card">
				{data
					.sort((a, b) => {
						if (a.strDrink < b.strDrink) {
							return -1;
						} else if (b.strDrink < a.strDrink) {
							return 1;
						} else {
							return 0;
						}
					})
					.map((info) => (
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
