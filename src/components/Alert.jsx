import Copa from "../assets/copa-rota.png";
import Barney from "../assets/barney.png";
import Moe from "../assets/moe.png"
import carllenny from "../assets/carl_lenny.png"

const Alert = () => {
	return (
		<article className="box2" >
			<div className="card2">
				<div className="imageBroken">
					<img src={Copa} alt="" />
				</div>
				<div className="text">
					<h2 className="name">Ups..!</h2>
					<p>
						Lo siento, este trago no existe por favor intente con
						otro.
					</p>
				</div>
			</div>
			<div>
				<img className="barney" src={Barney} alt="" />
				<img className="moe" src={Moe} alt="" />
				<img className="carl_lenny" src={carllenny} alt="" />
				
			</div>
		</article>
	);
};

export default Alert;
