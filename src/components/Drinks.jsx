import React from "react";

const Drinks = ({ data }) => {
	return (
		<article>
			<input type="text" 
			className=""
			placeholder="Search Drink"
			 />

			<div className="container_image">
				<div className="image image1"></div>
				<div className="image image2"></div>
				<div className="image image3"></div>
			</div>
			<div className="container__card">
				{data.drinks?.map((info) => (
					<div key={info.idDrink}>
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






