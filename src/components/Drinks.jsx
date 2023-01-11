import React from "react";

const Drinks = ({ data }) => {
	return (
		<article>
			<input type="text" />

			<div>
				<div className="container_image">
					<div className="image image1"></div>
					<div className="image image2"></div>
					<div className="image image3"></div>
				</div>

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
