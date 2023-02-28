import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			<Navbar title="Start Bootstrap" label1="Home" label2="About" label3="Services" label4="Contact" />
			<div className="container">
				<Jumbotron title="A Warm Welcome!" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc lobortis mattis aliquam faucibus purus." button="Call to action!" />
				<div className="row">
					<div className="col">
						<Card title="Card title" button="Find Out More!" />
					</div>
					<div className="col">
						<Card title="Card title" button="Find Out More!" />
					</div>
					<div className="col">
						<Card title="Card title" button="Find Out More!" />
					</div>

					<div className="col">
						<Card title="Card title" button="Find Out More!" />
					</div>
				</div>
			</div>
			<div className="bg-dark fixed-bottom pt-4 col-12">
				<p class="text-white d-flex justify-content-center mb-0">
					Copyright @ Your Website 2023
				</p>
			</div>
		</div>
	);
};

export default Home;
