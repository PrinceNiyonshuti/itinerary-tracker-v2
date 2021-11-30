/** @format */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Itinerary from "../components/Itinerary";

// Type | Interface
type IState = {
	itenary: {
		title: string;
		date: string;
		time: string;
		description: string;
		priority: boolean;
		id: number;
	}[];
};

const Home = () => {
	
	const [itenaryData, setItenaryData] = useState<IState["itenary"]>([]);

	// Retrieve all Itenerary with limit of 5
	useEffect(() => {
		fetch(`http://localhost:8000/itenaryList/?_limit=5`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setItenaryData(data);
			});
	}, []);

	return (
		<div>
			<div className="w-full p-4">
				<ul>
					<Itinerary itenaryData={itenaryData} />
				</ul>
				<Link to="/all">
					<p className="font-normal text-blue-700 text-center mt-2">
						More Itineraries
					</p>
				</Link>
			</div>
		</div>
	);
};

export default Home;
