import React from "react";

const Drinks = ({ data }) => {
	return (
		<article>
			<input type="text" />

			<div>
				{data.drinks?.map((info) => (
					<div className="container__card" key={info.idDrink}>
						<div className="card">
							<div>
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
