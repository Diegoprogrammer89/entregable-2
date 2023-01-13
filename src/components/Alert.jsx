import Copa from "../assets/copa-rota.png"


const Alert = () => {
	return (
		<div className="card2">
            <div className="" >
                <img src={Copa} alt="" />
            </div>
			<div className="text">
				<h2 className="name">Ups..!</h2>
				<p>
					Lo siento, este trago no existe por favor intente con otro.
				</p>
			</div>
		</div>
	);
};

export default Alert;
