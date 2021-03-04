import Logo from "../Logo";
import Navbar from "../Navbar";
import Card from "../UI/Card";
import "./style.css";
const Hero = () => {
	return (
		<div>
			<Card>
				<div style={{ padding: "50px 0" }}>
					<Logo />
				</div>
			</Card>
			<Navbar />
		</div>
	);
};

export default Hero;
